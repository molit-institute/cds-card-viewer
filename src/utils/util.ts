import DOMPurify from "dompurify";
import { marked } from "marked";


/**
 * Creates safe HTML from markdown by using DOMPurify and marked.js.
 *
 * @param {String} markdown - the markdown text
 * @param {boolean} [openLinksInNewTab=false] - whether to open generated links in new tab
 * @returns {String} - the generated HTML
 */
export const markdownToHtml = (markdown, openLinksInNewTab = false) => {
  if (!markdown || typeof markdown !== "string") {
    return "";
  }

  let html = DOMPurify.sanitize(marked(markdown, { sanitize: true }));

  if (openLinksInNewTab) {
    html = html.replace(/<a /g, '<a target="_blank" rel="nofollow" ');
  }

  html = html.replace(/&lt;br&gt;/g, '<br>');

  return html;
};
