import { LitElement, html, customElement, css, property } from "lit-element";
import { installRouter } from "pwa-helpers/router.js";

import "./shared/header";
import "./pages/portfolio";
import "./pages/writing";
import "./pages/cv";

@customElement("my-app")
export default class MyApp extends LitElement {
  static styles = css`
    .page {
      display: none;
    }
    .page[active] {
      display: block;
    }

    .main-content {
      max-width: 900px;
      margin: auto;
    }
    footer {
      padding: 15px 0;
      text-align: center;
    }
  `;

  @property({ type: String }) currentPage;

  firstUpdated() {
    installRouter((location) => {
      this.currentPage = location.hash.split("#/")[1] || "";
      console.log(this.currentPage);
    });
  }

  render() {
    return html`
      <header-element currentPage="${this.currentPage}"></header-element>
      <main role="main" class="main-content">
        <portfolio-page
          class="page"
          ?active="${this.currentPage === "" || this.currentPage === undefined}"
        >
        </portfolio-page>
        <writing-page class="page" ?active="${this.currentPage === "writing"}">
        </writing-page>
        <cv-page class="page" ?active="${this.currentPage === "cv"}"> </cv-page>
      </main>
      <footer>
        &copy; Emmet Delaney 2020
      </footer>
    `;
  }
}
