import * as core from "@actions/core";

try {
	const github_token = core.getInput("github_token");
	console.log(`Before Secret: ${github_token}`);
	core.setSecret("github_token");
	console.log(`After Secret: ${github_token}`);
} catch (error) {
	core.setFailed(error.message);
}
