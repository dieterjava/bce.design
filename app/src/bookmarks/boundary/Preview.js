import BElement from "../../BElement.js";
import { html } from "../../libs/lit-html.js";

class Preview extends BElement {

    extractState({ bookmarks }) {
        return bookmarks;
    }
    view() {
        const { bookmark: { label,link, newfield}  } = this.state;
        return html`
        <div>
            bookmark: <a href="${link}">${label} ${newfield}</a> (${link})
        </div>
        `;
    }
}
customElements.define('b-preview',Preview);