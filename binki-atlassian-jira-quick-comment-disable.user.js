// ==UserScript==
// @name binki-atlassian-jira-quick-comment-disable
// @homepageURL https://github.com/binki/binki-atlassian-jira-quick-comment-disable
// @version 1.0.1
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  var style = document.createElement('style');
  style.textContent = `div[data-testid='issue.activity.comment'] > div > div > div[role=group],
  /* Updated style with slow AI-generated comments. See #1. */
  div[data-testid='issue.activity.comment'] > div[data-testid^='canned-comments.ui'] > div > div > div > div[role=group][aria-label] {
    display: none;
  }
  /* With the slow AI-generated comments (see #1), the height was forced to be tall instead of using natural flow. Allow to be shorter. */
  /* Both the button and its container have extraneous height specifications. */
  div:has(> button[data-testid='canned-comments.common.ui.comment-text-area-placeholder.textarea']), 
  button[data-testid='canned-comments.common.ui.comment-text-area-placeholder.textarea'] {
    height: auto;
  }`;
  document.head.append(style);
})();
