import { LitElement, html, customElement, css, property } from 'lit-element';

@customElement('header-element')
export default class Header extends LitElement {

    @property({type: String}) location = "";

    static styles = css`
        #header{
            display: flex;
            flex-direction: row;
            height: 55px;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: auto;
            padding: 0 10px 0 10px;
            box-sizing: border-box;
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
            padding: 0;
            margin: 0;
        }
        ul{
            display: flex;
            flex-direction: row;
            list-style: none;
            font-size: var(--medium);
            margin: 0;
            padding: 0;
            align-items: center;
        }
        ul > li{
            margin-bottom: 10px;
            color: var(--color-primary);
            width: 50%;
            margin-left: var(--large);
            margin-bottom: 0;
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
        a:active{
            text-decoration: underline;
        }
    `;

    checkForActiveLink(){
        const portfolio = this.shadowRoot.getElementById("portfolio");
        const cv = this.shadowRoot.getElementById("cv");
        const writing = this.shadowRoot.getElementById("writing");
        if(this.location.includes("portfolio")){
            portfolio.style.textDecoration = "underline";
            cv.style.textDecoration = "none";
            writing.style.textDecoration = "none";
            return;
        }
        if(this.location.includes("cv")){
            portfolio.style.textDecoration = "none";
            cv.style.textDecoration = "underline";
            writing.style.textDecoration = "none"; 
            return;       
        }
        if(this.location.includes("writing")){
            portfolio.style.textDecoration = "none";
            cv.style.textDecoration = "none";
            writing.style.textDecoration = "underline";
            return;        
        }

        portfolio.style.textDecoration = "none";
        cv.style.textDecoration = "none";
        writing.style.textDecoration = "none";

    }

    render() {
        return html`
            <section id="header">
                <h1> <a href="/">Emmet Delaney</a></h1>
                <ul>
                    <li><a id="portfolio" href="/#/portfolio">portfolio</a></li>
                    <li><a id="cv" href="/#/cv">cv</a></li>
                    <li><a id="writing" href="/#/writing">writing</a></li>
                </ul>
            </section>
            ${this.checkForActiveLink()}
        `;
    }
}