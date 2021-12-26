# terminal-support-emoji

![V1.0](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/fraxken/is-powershell/commit-activity)
![MIT](https://img.shields.io/github/license/mashape/apistatus.svg)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)

Node.js - Detect if the terminal that execute your script support emoji or not (using the process.ppid).

## Getting started

This package is available in the Node Package Repository and can be easily installed with [npm](https://docs.npmjs.com/getting-started/what-is-npm) or [yarn](https://yarnpkg.com).

```bash
$ npm i terminal-support-emoji
# or
$ yarn add terminal-support-emoji
```

## Usage example

```js
import { supportEmoji } from "terminal-support-emoji";

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
