import { html, customElement, property } from 'lit-element';
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

    render() {
        if (this.repos.length < 1) {
            return html`<p>Loading...</p>`
        }
        return html`
            <div>
                ${this.repos.map((ar: any) => 
                    html`
                        <project-card>
                            <h2>${ar.name}</h2>  
                            <p>${ar.description}</p>
                        </project-card>
                    `
                )}
            </div>
        `;
    }
}