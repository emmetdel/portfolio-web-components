import { html, customElement, css, LitElement, property } from 'lit-element';

@customElement('project-card')
export default class ProjectCard extends LitElement {

    @property({ type: String }) Name = "";
    @property({ type: String }) Description = "";

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            padding: var(--small);
            border: 1px solid var(--primay-color)
        }
    `;

    render() {
        return html`
            <h3>${this.Name}</h3>
            <p>${this.Description}</p>
        `;
    }
}