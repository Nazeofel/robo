const gh = JSON.parse(process.env.GITHUB_PUSH_OBJECT)

console.log('=================================')
console.log(gh.commits)
console.log('=================================')
console.log(gh.head_commit)
console.log('=================================')
console.log(gh)
;(async () => {
	// const templates = commits.filter((temp) => temp.startsWith('templates'))

	// if (templates.length > 0) {
	// 	console.log(templates)
	// }

	console.log('hello world')
})()
