import { html, customElement, property, css } from 'lit-element';
import { PageViewElement } from './page-view-element';

import '../shared/project-card';

@customElement('portfolio-page')
export default class PortfolioPage extends PageViewElement {

    @property({ type: Array }) repos: Array<object> = [];


    firstUpdated() {
        fetch("https://api.github.com/users/emmetdel/repos")
            .then(res => res.json())
            .then(res => res.map(obj => {
                return { name: obj.name, description: obj.description }
            }))
            .then(array => this.repos = array)
    }

    static styles = css`
        :host{
            display: flex;
            grid-template-columns: minmax(100px, 1fr);
            border: 2px solid grey;
        }
    `;

    render() {
        if (this.repos.length < 1) {
            return html`<p>Loading...</p>`
        }
        return html`
            ${this.repos.map((ar: any) => 
                html`
                    <project-card name=${ar.name} description=${ar.description}></project-card>
                `
            )}
        `;
    }
}