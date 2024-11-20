const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)
const { spawn } = require('child_process')

console.log(gh)
;(async () => {
	const commits = gh.commits
	const templates = await getAllTemplates()

	console.log(templates)
	if (commits.length > 0) {
		commits.forEach((commit) => {
			const id = commit.id

			const process = spawn('git', ['show', '--name-only', '--pretty=""', id])

			// Capture the output
			let output = []

			process.stdout.on('data', (data) => {
				output.push(data)
			})

			process.stderr.on('data', (error) => {
				console.error(`Error: ${error}`)
			})

			process.on('close', (code) => {
				if (code === 0) {
					// creating zip files
					// const filterCommitedTemplates = output.filter((x) => !x.startsWith('templates'))
					// if (filterCommitedTemplates.length > 0) {
					// 	filterCommitedTemplates.map((templateCommited) => templates.includes(templateCommited))
					// }
				} else {
					console.error(`Git process exited with code ${code}`)
				}
			})
		})
	}
})()

async function getAllTemplates() {
	const paths = ['discord-activities', 'discord-bot', 'plugin', 'web-apps']
	const templates = []

	for (const path of paths) {
		const url = `https://api.github.com/repos/Nazeofel/robo.js/contents/templates/${path}`
		const response = await fetch(url)
		const data = await response.json()
		templates.push(...data.filter((item) => item.type === 'dir').map((folder) => 'templates' + path + folder.name))
	}

	return templates
}
