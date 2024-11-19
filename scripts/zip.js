const commits = JSON.parse(process.env.GITHUB_PUSH_OBJECT).commits

console.log(commits)
;(async () => {
	const templates = commits.filter((temp) => temp.startsWith('templats'))

	if (templates.length > 0) {
		console.log(templates)
	}

	console.log('hello world')
})()
