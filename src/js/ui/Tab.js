import Ui from './Ui.js'

class Tab extends Ui {
    constructor(el) {
        super()
        this.el = document.querySelector(el);
        this.tabHeaders = document.querySelectorAll(`${el} > .tab_wrap > .tab_header > .tab_header_item`)
        this.tabBodys = document.querySelectorAll(`${el} > .tab_wrap > .tab_body > li`)

        
        this.init();
        this.el.addEventListener('click', this.toggle.bind(this), false)

    }

    init() {
        for(let i = 0; i < this.tabHeaders.length; i++) {
            this.setAttr(this.tabHeaders[i], 'data-num', i)
            this.setAttr(this.tabBodys[i], 'data-num', i)
        }
    }


    toggle(e) {
        // e.preventDefault()
        e.stopPropagation()
        let addEl = this.evtAssign('.tab_header_item', e.target)
        if(!addEl) return;
 
        let toggle = this.toggleClass(this.tabHeaders, addEl, 'active')
        let idx = toggle.dataset.num
        this.toggleClass(this.tabBodys, this.tabBodys[idx], 'active')
    }



    
    
}

export default Tab;