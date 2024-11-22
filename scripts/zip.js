const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)
const token = process.env.TOKEN
const repoData = process.env.REPO_DATA
const BUCKET_NAME = 'templates-robo-js'

const REPO_OWNER = repoData.split('/')[0]
const REPO_NAME = repoData.split('/')[1]
const { execSync } = require('child_process')

const fs = require('fs')
const path = require('path')

;(async () => {
	const commits = gh.commits
	const templates = await getAllTemplates()
	if (commits.length > 0) {
		commits.forEach(async (commit) => {
			const id = commit.id
			const committedFiles = await getCommittedFiles(id)

			if (committedFiles.length > 0) {
				const templatesToZip = []
				for (let i = 0; i < committedFiles.length; ++i) {
					for (let j = 0; j < templates.length; ++j) {
						if (committedFiles[i].filename.includes(templates[j])) {
							templatesToZip.push(templates[j])
						}
					}
				}

				if (templatesToZip.length > 0) {
					templatesToZip.forEach((template) => {
						const templateName = template.split('/')[template.split('/').length - 1]
						const templatePath = template.slice(10)

						const outputDir = path.join(process.cwd(), 'zips', `${templatePath.replace(`/${templateName}`, '')}`)
						const outputZip = path.join(outputDir, templateName)

						console.log('output dir', outputDir)
						console.log('output Zip', outputZip)

						if (!fs.existsSync(outputDir)) {
							fs.mkdirSync(outputDir, { recursive: true })
						}

						execSync(`zip -r ${outputZip} templates/${templatePath}`)

						const templateZippedPath = 'zips' + '/' + templatePath

						console.log('zipped path', templateZippedPath)
						console.log('template path', templateZippedPath)

						execSync(`b2 file upload ${BUCKET_NAME} ${outputDir} ${templateZippedPath}`)
					})
				}
			} else {
				console.log('ERROR: not committed file and Job still ran ?')
			}
		})
	}
})()

async function getAllTemplates() {
	const paths = ['discord-activities', 'discord-bots', 'plugins', 'web-apps']
	const templates = []
	for (const path of paths) {
		const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/templates/${path}`
		const response = await fetch(url, {
			headers: {
				Authorization: `token ${token}`
			}
		})
		const data = await response.json()
		templates.push(...data.filter((item) => item.type === 'dir').map((folder) => folder.path))
	}

	return templates
}

async function getCommittedFiles(id) {
	const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits/${id}`
	const response = await fetch(url, {
		headers: {
			Authorization: `token ${token}`
		}
	})

	const json = await response.json()
	const files = json.files

	return files.filter((file) => {
		return file.filename.startsWith('templates')
	})
}
