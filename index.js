const core = require('@actions/core');
const github = require("@actions/github");

try {
  const endpoint_url  = 'https://intr-p-iapi/changeautomation/api/FullYaml';

  const build_id = $GITHUB_RUN_ID;

  console.log("The 'build id' is: " + build_id);
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
