// ==UserScript==
// @name         Auto Fill Repository Name when Deletion Confirmation
// @name:zh-CN   自动填写 GitHub 仓库名简化删除操作
// @namespace    https://github.com/chiperman/GHRepoDeleteHelper
// @version      1.0
// @description  Add a button above the "Delete this repository" button and auto-fill the repository name when deleting a repository on GitHub.
// @description:zh-CN 在“删除此存储库”按钮上方添加一个按钮，并在 GitHub 上删除存储库时自动填写存储库名称。
// @author       chiperman
// @match        https://github.com/*/settings
// @grant        none
// @icon         https://github.githubassets.com/pinned-octocat.svg
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/485556/Auto%20Fill%20Repository%20Name%20when%20Deletion%20Confirmation.user.js
// @updateURL https://update.greasyfork.org/scripts/485556/Auto%20Fill%20Repository%20Name%20when%20Deletion%20Confirmation.meta.js
// ==/UserScript==

(function () {
  'use strict';

  let observer;

  const autoInputBtn = document.createElement('span');
  autoInputBtn.innerText = '🤖 Auto Fill';
  autoInputBtn.id = 'auto-input-btn';
  autoInputBtn.className =
    'js-repo-delete-proceed-button Button--danger Button--medium Button Button--fullWidth';

  autoInputBtn.style.display = 'flex';
  autoInputBtn.style.justifyContent = 'center';
  autoInputBtn.style.alignItems = 'center';
  autoInputBtn.style.marginBottom = '8px';

  document
    .getElementById('dialog-show-repo-delete-menu-dialog')
    .addEventListener('click', clickDeleteRepositoryBtn);

  function clickDeleteRepositoryBtn() {
    // Add a MutationObserver to listen for changes in the dialog content
    const targetNode = document.getElementById('repo-delete-menu-dialog');
    observer = new MutationObserver(() => {
      // Rebind events when the dialog content changes
      handleDialogClick();
    });

    const config = { childList: true, subtree: true };
    observer.observe(targetNode, config);
  }

  function handleDialogClick() {
    const buttonElement = document.getElementById('repo-delete-proceed-button');

    const buttonLabel = buttonElement.textContent.trim();

    if (buttonLabel === 'Delete this repository') {
      addAutoInputBtn();
    }
  }

  function addAutoInputBtn() {
    const targetButton = document.getElementById('repo-delete-proceed-button');

    const buttonContainer = targetButton.parentElement;

    buttonContainer.insertBefore(autoInputBtn, targetButton);

    autoInputBtn.addEventListener('click', autoInputFunction);

    observer.disconnect();
  }

  function autoInputFunction() {
    const repositoryElement = document.querySelector('.text-bold.f3.mt-2');
    const repositoryName = repositoryElement.textContent.trim();

    const inputBlock = document.getElementById('verification_field');

    // Simulate manually typing each character of the repository name into the input block
    inputBlock.focus();
    for (let i = 0; i < repositoryName.length; i++) {
      inputBlock.value += repositoryName[i];

      // Trigger the input event
      const inputEvent = new Event('input');
      inputBlock.dispatchEvent(inputEvent);
    }
  }
})();
