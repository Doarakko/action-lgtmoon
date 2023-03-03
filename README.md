# action-lgtmoon

Post LGTM image on GitHub Issue and Pull request using [LGTMoon](https://github.com/yoshikyoto/lgtmoon).

![example](./example.gif)

## Inputs

### `github-token`

**Required** The GitHub token used to create an authenticated client.

## Example usage

```yaml
name: LGTM
on:
  issue_comment:
    types: [created]
  pull_request_review:
    types: [submitted]
  pull_request_review_comment:
    types: [created]

jobs:
  lgtm:
    runs-on: ubuntu-latest
    steps:
      - name: LGTM
        uses: Doarakko/action-lgtmoon/@v1.4
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
```

## Demo

Please comment or review "lgtm" to [this issue](https://github.com/Doarakko/action-lgtmoon/issues/1) and [this pull request](https://github.com/Doarakko/action-lgtmoon/pull/2)!

## Credit

- [LGTMoon](https://lgtmoon.dev/)
