import Ui from './Ui.js'

class Accordion extends Ui {
    constructor(el, { oneTab }) {
        super();

        this.selector = el;
        this.el = document.querySelector(el);
        this.head = this.el.querySelectorAll('.item > .acco_head')
        this.body = this.el.querySelectorAll('.item > .acco_body')

        this.init();

        this.el.addEventListener('click', this.action.bind(this))
    }


    init() {
        // console.log('Accordion init')
        for(let i = 0; i < this.head.length; i++) {
            this.setAttr(this.head[i], 'data-acco_head', i)
        }

        for(let i = 0; i < this.body.length; i++) {
            this.setAttr(this.body[i], 'data-acco_body', i)
        }
    }


    action(e) {
        e.stopPropagation()
        let isTarget = this.evtAssign('.acco_head', e.target)
        if(!isTarget) return;

        let idx = isTarget.dataset.acco_head
        this.toggleClass(this.head, isTarget, 'on')
        this.toggleClass(this.body, this.body[idx], 'on')
    }
} 


export default Accordion;