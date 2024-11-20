const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)
import { spawn } from 'child_process'

console.log(gh)
;(async () => {
	const commits = gh.commits

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
					const templates = output.filter((x) => !x.startsWith('templates'))

					if (templates.length > 0) {
					}
				} else {
					console.error(`Git process exited with code ${code}`)
				}
			})
		})
	}
})()

async function getAllTemplates() {}
