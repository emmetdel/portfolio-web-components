import { LitElement, html, customElement, css } from 'lit-element';

@customElement('nav-sidebar')
export default class NavSidebar extends LitElement {

    static styles = css`
        #sidebar{
            display: flex;
            flex-direction: column;
            margin: 0px;
            height: calc(100vh - 40px);
            background-color: var(--color-light-grey);
            padding: var(--medium);
            border-right: 0.5px solid var(--color-secondary);
        }
        h1 > a:link, h1 > a:hover{
            color: inherit;
            text-decoration: none;
            font-style: normal;
            background-color: initial;
        }
        h1{
            font-size: var(--large);
            color: var(--color-dark-grey);
        }
        ul{
            list-style: none;
            padding: 5px;
            font-size: var(--medium);
        }
        ul > li{
            margin-bottom: 10px;
            color: var(--color-primary);
            width: 50%;
        }
        a:link, a:visited{
            color: inherit;
            text-decoration: none;
        }
        a:hover{
            background-color: var(--color-secondary);
            font-style: italic;
            color: white;
            cursor: pointer;
        }
        #footer-text{
            font-size: calc(var(--small) * 0.75);
            margin-top: auto;
            color: var(--color-secondary)
        }
        
    `;

    render() {
        return html`
            <section id="sidebar">
                <h1> <a href="/">Emmet Delaney</a></h1>
            
                <ul>
                    <li><a href="/#/portfolio">portfolio</a></li>
                    <li><a href="/#/cv">cv</a></li>
                    <li><a href="/#/writing">writing</a></li>
                </ul>
                <p id="footer-text">Built with &hearts; &copy; ${new Date().getFullYear()}</p>
            </section>
        `;
    }
}