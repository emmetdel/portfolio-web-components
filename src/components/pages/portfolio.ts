import { html, customElement, property, css } from "lit-element";
import { PageViewElement } from "./page-view-element";

import "../shared/project-card";

@customElement("portfolio-page")
export default class PortfolioPage extends PageViewElement {
  @property({ type: Array }) repos: Array<object> = [];

  firstUpdated() {
    fetch("https://api.github.com/users/emmetdel/repos")
      .then((res) => res.json())
      .then((res) =>
        res.map((obj) => ({
          name: obj.name,
          description: obj.description,
          link: obj.html_url,
        }))
      )
      .then((array) => (this.repos = array));
  }

  static styles = css`
    :host {
      padding: 20px 0px;
    }
    #portfolio-page {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-template-rows: minmax(250px, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  `;

  render() {
    if (this.repos.length < 1) {
      return html`<p>Loading...</p>`;
    }
    return html`
      <div id="portfolio-page">
        ${this.repos.map(
          (ar: any) =>
            html`
              <project-card
                name=${ar.name}
                description=${ar.description}
                link=${ar.link}
              ></project-card>
            `
        )}
      </div>
    `;
  }
}
