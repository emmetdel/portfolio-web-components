import { LitElement, html, customElement, css, property } from 'lit-element';
// import { installRouter } from 'pwa-helpers/router.js';

import "./shared/header";
import "./pages/portfolio";
import "./pages/writing";
import "./pages/cv";

@customElement('my-app')
export default class MyApp extends LitElement {

    static styles = css`
        /* .page {
          display: none;
        }
        .page[active] {
          display: block;
        } */

        .main-content{
            max-width: 900px;
            margin: auto;
        }
    `;

    // @property({ type: String }) currentPage;

    // firstUpdated() {
    //     installRouter((location) => {
    //         this.currentPage = location.hash;
    //     });
    // }

    render() {
        return html`
            <header-element></header-element>
            <main role="main" class="main-content">
                <portfolio-page class="page" active>
                </portfolio-page>
            </main>
        `;
    }
}