import * as core from "@actions/core";
// import * as github from "@actions/github";

try {
	const github_token = core.getInput("github_token");
	console.log(`Before Secret: ${github_token}`);
	core.setSecret("github_token");
	console.log(`After Secret: ${github_token}`);

	// const octokit = github.getOctokit(github_token);
	//
	// const {
	// 	data: { workflow_runs },
	// } = await octokit.rest.actions.listWorkflowRuns({
	// 	owner: "suborbitalsentinel",
	// 	repo: "my-action-test",
	// 	workflow_id: "master.yml",
	// 	status: "success",
	// 	event: "push",
	// 	per_page: 1,
	// });
	// workflow_runs[0].head_sha;
} catch (error) {
	core.setFailed(error.message);
}
