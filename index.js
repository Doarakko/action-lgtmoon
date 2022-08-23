import fetch from "node-fetch";
import { getInput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { Octokit } from "@octokit/core";
import * as core from "@actions/core";

async function run() {
  try {
    const githubToken = getInput("github-token");
    const octokit = new Octokit({ auth: githubToken });

    if (!(context.payload.comment.body || "").match(/lgtm/)) {
      core.debug("nothing to do.");
      return;
    }

    switch (context.eventName) {
      case "issue_comment":
        break;
      case "pull_request_review":
        if(context.payload.review.state !== "approved"){
          core.debug("nothing to do.");
          return;
        }
        break;
      case "pull_request_review_comment":
        break;
      default:
        core.debug("nothing to do.");
        return;
    }

    fetch("https://lgtmoon.herokuapp.com/api/images/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imageUrl = data.images[0].url;

        if (context.eventName === "issue_comment" || context.eventName === "pull_request_review") {
          octokit.request(
            "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
            {
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `![](${imageUrl})`,
            }
          );
        } else if (context.eventName === "pull_request_review_comment") {
          octokit.request(
            "POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
            {
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `![](${imageUrl})`,
              pull_number: context.payload.pull_request.number,
              comment_id: context.payload.comment.id,
            }
          );
        }
      });
  } catch (error) {
    setFailed(error.message);
  }
}

run();
