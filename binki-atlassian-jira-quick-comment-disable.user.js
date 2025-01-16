// ==UserScript==
// @name binki-atlassian-jira-quick-comment-disable
// @homepageURL https://github.com/binki/binki-atlassian-jira-quick-comment-disable
// @version 1.0.0
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  var style = document.createElement('style');
  style.textContent = `div[data-testid='issue.activity.comment'] > div > div > div[role=group] {
    display: none;
  }`;
  document.head.append(style);
})();
