import Ui from './Ui.js';


class Loading extends Ui {
    constructor(el, loadingText) {
        super();
        this.el = document.querySelector(el);
        this.loadingText = loadingText || ['G', 'E', 'N', 'E', 'S', 'I', 'S'];

        this.init();
        
    }


    init() {
        this.createDOM();
    }


    createDOM() {
        let t = '';
        t += ` 
            <div class="loading">
                <div class="loading_text">
                    ${this.loadingText.map(item => ` <span class="loading_text_word">${item}</span>`)}
                </div>
            </div>
        ` 
        this.el.innerHTML = t
    }
}



export default Loading;