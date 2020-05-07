import { html, customElement } from "lit-element";
import { PageViewElement } from "./page-view-element";

@customElement("cv-page")
export default class CvPage extends PageViewElement {
  render() {
    return html`
      <div>
        <h1>CV Page, content will be added here soon.</h1>
      </div>
    `;
  }
}
