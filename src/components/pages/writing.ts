import { html, customElement } from "lit-element";
import { PageViewElement } from "./page-view-element";

@customElement("writing-page")
export default class WritingPage extends PageViewElement {
  render() {
    return html`
      <div>
        <h1>Writing Page, content will be added here soon.</h1>
      </div>
    `;
  }
}
