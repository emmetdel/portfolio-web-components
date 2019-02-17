import { LitElement, html, customElement, css, property } from 'lit-element';
import { installRouter } from 'pwa-helpers/router.js';

import "./shared/sidebar";
import "./pages/portfolio";
import "./pages/writing";
import "./pages/cv";

@customElement('my-app')
export default class MyApp extends LitElement {

    static styles = css`
        :host{
            display: grid;
            grid-template-columns: 25fr 75fr;
            padding: 0px;
            margin: 0px;
            height: 100vh;
        }

        .page {
          display: none;
        }
        .page[active] {
          display: block;
        }

    `;

    @property({ type: String }) currentPage;

    firstUpdated() {
        installRouter((location) => {
            this.currentPage = location.hash;
        });
    }

    render() {
        return html`
            <nav-sidebar></nav-sidebar>
            <main role="main" class="main-content">
                <portfolio-page class="page" ?active="${this.currentPage === '#/portfolio'}"></portfolio-page>
                <cv-page class="page" ?active="${this.currentPage === '#/cv'}"></cv-page>
                <writing-page class="page" ?active="${this.currentPage === '#/writing'}"></writing-page>
            </main>
        `;
    }
}