import { html, customElement, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

@customElement('writing-page')
export default class WritingPage extends PageViewElement {

    render() {
        return html`
            <div>
                <h1>writing Page</h1>
            </div>
        `;
    }
}