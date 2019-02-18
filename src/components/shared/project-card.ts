import { html, customElement, css, LitElement, property } from 'lit-element';

@customElement('project-card')
export default class ProjectCard extends LitElement {

    @property({ type: String }) Name = "";
    @property({ type: String }) Description = "";
    @property({ type: String }) Link = "";

    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            padding: var(--small);
            word-wrap: break-word;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            background-color: white;
        }
        :host > p{
            font-size: var(--small);
            color: var(--color-medium-grey);
        }
        :host > h3{
            margin: 0;
            color: var(--color-dark-grey);
        }
        a{
            margin-top: auto;   
            font-size: var(--small);
            color: var(--color-secondary);     
        }
    `;

    render() {
        return html`
            <h3>${this.Name}</h3>
            <p>${this.Description === "null" ? "There is no information to display" : this.Description}</p>
            <a href=${this.Link}>Read More...</a>

        `;
    }
}