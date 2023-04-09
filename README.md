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
        uses: Doarakko/action-lgtmoon/@v1.5
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
```

## Credit

- [LGTMoon](https://lgtmoon.dev/)
