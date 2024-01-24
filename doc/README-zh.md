# GHRepoDeleteHelper

<p align="center">
[<a href="../README.md">English</a>]
[中文]
</p>

## 描述

GHRepoDeleteHelper 是一个适用于 Tampermonkey 的脚本，简化了在 GitHub 上删库的流程。

它在 `Delete this repository` 按钮上方添加了一个 `🤖 Auto Fill` 按钮。点击此按钮可以一键在窗口框输入 `<username>/<repo-name>`，然后激活下方的 `Delete this repository` 按钮。

之所以没有直接激活 `Delete this repository` 这个按钮，我认为这个操作的确是非常危险的，所以需要你三思而后行，Github 这么做应该也是这个原因。

但是每次我确定要删库的时候都需要复制黏贴非常的麻烦，因此制作了这个脚本节约时间，希望也能帮助到你。

## 安装

1. 如果尚未安装，请为你的浏览器安装 [Tampermonkey](https://www.tampermonkey.net/) 扩展（[Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) / [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/) / [Edge](https://microsoftedge.microsoft.com/addons/detail/%E7%AF%A1%E6%94%B9%E7%8C%B4/iikmkjmpaadaobahmlepeloendndfphd))。
2. 点击即可安装脚本：
   - Github：https://raw.githubusercontent.com/chiperman/GHRepoDeleteHelper/main/GHRepoDeleteHelper.js
   - Greasy Fork：https://greasyfork.org/zh-CN/scripts/485556-auto-fill-repository-name-when-deletion-confirmation
3. 访问 Github 仓库的 Setting 页面即可启用脚本。

## 使用方法

1. 转到 GitHub 存储库设置页面。
2. 下滑找到 Danger Zone 区域。
3. 点击 `Delete this repository` 按钮，并按照操作直到弹出窗口提示你输入 `<username>/<repo-name>` 。
4. `Delete this repository` 按钮上方会自动多出一个 `🤖 Auto Fill` 按钮。
5. 点击 `🤖 Auto Fill` 按钮，输入框会自动填写并且激活 `Delete this repository`

## 许可证

此项目根据 MIT 许可的条款进行许可

## 致谢

- 感谢 ChatGPT 在开发中的帮助。
- 特别感谢 Tampermonkey 官方和其它公开文档的支持和帮助。

## 贡献

欢迎贡献！请随时提交问题或拉取请求。
