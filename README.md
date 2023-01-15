# terminal-support-emoji

![version](https://img.shields.io/badge/dynamic/json.svg?style=for-the-badge&url=https://raw.githubusercontent.com/TopCli/terminal-support-emoji/master/package.json&query=$.version&label=Version)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/TopCli/terminal-support-emoji/commit-activity)
[![mit](https://img.shields.io/github/license/Naereen/StrapDown.js.svg?style=for-the-badge)](https://github.com/TopCli/terminal-support-emoji/blob/master/LICENSE)
[![OpenSSF
Scorecard](https://api.securityscorecards.dev/projects/github.com/TopCli/terminal-support-emoji/badge?style=for-the-badge)](https://api.securityscorecards.dev/projects/github.com/TopCli/terminal-support-emoji)
![build](https://img.shields.io/github/actions/workflow/status/TopCli/terminal-support-emoji/node.js.yml?style=for-the-badge)


Node.js - Detect if the terminal that execute your script support emoji or not (using the process.ppid).

## Getting started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i @topcli/terminal-support-emoji
# or
$ yarn add @topcli/terminal-support-emoji
```

## Usage example

```js
import { supportEmoji } from "@topcli/terminal-support-emoji";

supportEmoji().then(console.log).catch(console.error);
```

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/thomas-gentilhomme/"><img src="https://avatars.githubusercontent.com/u/4438263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gentilhomme</b></sub></a><br /><a href="https://github.com/TopCli/terminal-support-emoji/commits?author=fraxken" title="Code">💻</a> <a href="https://github.com/TopCli/terminal-support-emoji/commits?author=fraxken" title="Documentation">📖</a> <a href="https://github.com/TopCli/terminal-support-emoji/pulls?q=is%3Apr+reviewed-by%3Afraxken" title="Reviewed Pull Requests">👀</a> <a href="#security-fraxken" title="Security">🛡️</a> <a href="https://github.com/TopCli/terminal-support-emoji/issues?q=author%3Afraxken" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/YoannBuzenet"><img src="https://avatars.githubusercontent.com/u/28066290?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoann Buzenet</b></sub></a><br /><a href="https://github.com/TopCli/terminal-support-emoji/commits?author=YoannBuzenet" title="Code">💻</a> <a href="https://github.com/TopCli/terminal-support-emoji/commits?author=YoannBuzenet" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Licence

MIT
