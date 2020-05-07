import { LitElement, html, customElement, css, property } from "lit-element";

@customElement("header-element")
export default class Header extends LitElement {
  @property({ type: String }) currentPage = "";

  static styles = css`
    #header {
      display: flex;
      flex-direction: row;
      height: 75px;
      justify-content: space-between;
      align-items: center;
      max-width: 900px;
      margin: auto;
      box-sizing: border-box;
    }
    p {
      color: var(--color-primary);
    }
    h1 {
      font-size: var(--large);
      color: var(--color-dark-grey);
      padding: 0;
      margin: 0;
    }

    h1 > a:link,
    h1 > a:hover {
      color: inherit;
      text-decoration: none;
      font-style: normal;
      background-color: initial;
    }

    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      font-size: var(--medium);
      margin: 0;
      padding: 0;
      align-items: center;
    }
    ul > li {
      margin-bottom: 10px;
      color: var(--color-primary);
      width: 50%;
      margin-left: var(--large);
      margin-bottom: 0;
    }
    a:link,
    a:visited {
      color: inherit;
      text-decoration: none;
    }
    a:hover,
    .active-link {
      background-color: var(--color-secondary);
      font-style: italic;
      color: white !important;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <section id="header">
        <h1>Emmet Delaney</h1>
        <ul>
          <li>
            <a
              class="${this.currentPage === "" ? "active-link" : ""}"
              id="portfolio"
              href="/#/"
              >portfolio</a
            >
          </li>
          <li>
            <a
              class="${this.currentPage === "cv" ? "active-link" : ""}"
              id="cv"
              href="/#/cv"
              >cv</a
            >
          </li>
          <li>
            <a
              class="${this.currentPage === "writing" ? "active-link" : ""}"
              id="writing"
              href="/#/writing"
              >writing</a
            >
          </li>
        </ul>
      </section>
    `;
  }
}
