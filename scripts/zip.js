const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)
const token = process.env.TOKEN

console.log(token)
const { spawn } = require('child_process')
;(async () => {
	const commits = gh.commits
	const templates = await getAllTemplates()
	if (commits.length > 0) {
		commits.forEach((commit) => {
			const id = commit.id

			const process = spawn('git', ['show', '--name-only', '--pretty=', id])

			// Capture the output
			let output = []

			process.stdout.on('data', (data) => {
				const enc = new TextDecoder('utf-8').decode(data)
				console.log(enc)
				output.push(data)
			})

			process.stderr.on('data', (error) => {
				console.error(`Error: ${error}`)
			})

			process.on('close', (code) => {
				if (code === 0) {
					//	creating zip files
					const filterCommitedTemplates = output.filter((x) => !x.startsWith('templates'))
					if (filterCommitedTemplates.length > 0) {
						const projectToZip = []
						for (let i = 0; i < filterCommitedTemplates.length; ++i) {
							for (let j = 0; j < templates.length; ++j) {
								if (filterCommitedTemplates[i].contains(templates[j])) {
									projectToZip.push(templates[j])
								}
							}
						}
					}
				} else {
					console.error(`Git process exited with code ${code}`)
				}
			})
		})
	}
})()

async function getAllTemplates() {
	const paths = ['discord-activities', 'discord-bots', 'plugins', 'web-apps']
	const templates = []
	for (const path of paths) {
		const url = `https://api.github.com/repos/nazeofel/robo/contents/templates/${path}`
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
