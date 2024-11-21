const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)
const token = process.env.TOKEN
;(async () => {
	const commits = gh.commits
	const templates = await getAllTemplates()
	if (commits.length > 0) {
		commits.forEach(async (commit) => {
			const id = commit.id
			const committedFiles = await getCommittedFiles(id)

			console.log(committedFiles)
			if (committedFiles.length > 0) {
				// const projectToZip = []
				// for (let i = 0; i < committedFiles.length; ++i) {
				// 	for (let j = 0; j < templates.length; ++j) {
				// 		if (committedFiles[i].contains(templates[j])) {
				// 			projectToZip.push(templates[j])
				// 		}
				// 	}
				// }

				console.log(projectToZip)
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

async function getCommittedFiles(id) {
	const url = `https://api.github.com/repos/Nazeofel/robo/commits/${id}`
	const response = await fetch(url, {
		headers: {
			Authorization: `token ${token}`
		}
	})

	const json = await response.json()
	const files = json.files

	return files.filter((file) => {
		if (file.filename.startsWith('templates')) {
			return file.filename
		}
	})
}
