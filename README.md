# GHRepoDeleteHelper

<p align="center">
[English]
[<a href="doc/README-zh.md">中文</a>]
</p>

## Star This Project 🌟

If you find GHRepoDeleteHelper helpful, please consider giving it a star! ⭐️

## Description

GHRepoDeleteHelper is a Tampermonkey script that simplifies the process of deleting repositories on GitHub.

It adds a `🤖 Auto Fill` button above the `Delete this repository` button. Clicking this button automatically fills the input box with `<username>/<repo-name>` and activates the `Delete this repository` button below.

The reason for not directly activating the `Delete this repository` button is because I believe this operation is indeed very dangerous. Therefore, think twice before you go, and GitHub does this probably for the same reason.

However, every time I am sure I want to delete a repository, it is cumbersome to copy and paste. Hence, I created this script to save time, hoping it can also be helpful for you.

However, it is very annoying to copy and paste every time I decide to delete a repository. Therefore, I created this script to save time, and I hope it can also be helpful for you.

## Installation

1. If not installed yet, please install the [Tampermonkey](https://www.tampermonkey.net/) extension for your browser ([Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/) / [Edge](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd)).
2. Click to install the script:
   - Github: https://raw.githubusercontent.com/chiperman/GHRepoDeleteHelper/main/GHRepoDeleteHelper.js
   - Greasy Fork: https://greasyfork.org/zh-CN/scripts/485556-auto-fill-repository-name-when-deletion-confirmation
3. Visit the Settings page of your GitHub repository to enable the script.

## Usage

1. Go to the GitHub repository's Settings page.
2. Scroll down to locate the Danger Zone section.
3. Click the `Delete this repository` button and follow the instructions until a popup prompts you to enter `<username>/<repo-name>`.
4. Above the `Delete this repository` button, a `🤖 Auto Fill` button will automatically appear.
5. Click the `🤖 Auto Fill button` , and the input box will be filled automatically, activating the `Delete this repository button`.

## Preview

![preview](/assets/preview.gif)

## License

This project is licensed under the terms of the MIT License.

## Acknowledgments

- Thank you to ChatGPT for its assistance during development.
- Special thanks to the official Tampermonkey team and other public documentation for their support and assistance.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.
