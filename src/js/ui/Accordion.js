import Ui from './Ui.js'

class Accordion extends Ui {
    constructor(el, { oneTab }) {
        super();

        this.selector = el;
        this.el = document.querySelector(el);
        this.elItems = this.el.querySelectorAll('.item')


        this.init();
    }


    init() {
        console.log('Accordion init')
        console.log(this.selector, this.el, this.elItems)
    }
} 


export default Accordion;