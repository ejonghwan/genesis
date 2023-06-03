import Ui from './Ui.js'

class Tab extends Ui {
    constructor(el, { startTab }) {
        super()
        this.selectName = el
        this.startTab = startTab;
        this.el = document.querySelector(el);
        this.tabHeader = document.querySelector('.tab_header')
        this.tabHeaders = document.querySelectorAll(`${el} > .tab_wrap > .tab_header > .tab_header_item`)
        this.tabBodys = document.querySelectorAll(`${el} > .tab_wrap > .tab_body > li`)

        this.init();
        this.el.addEventListener('click', this.toggle.bind(this), false)
    }

    init() {

        for(let i = 0; i < this.tabHeaders.length; i++) {
            this.setAttr(this.tabHeaders[i], 'data-tab', i)
            this.setAttr(this.tabBodys[i], 'data-tab', i)

            //접근성
            this.setAttr(this.tabHeaders[i], 'id', `${this.selectName.replace(/[^\w\s]/g, '')}_${i}`)
            this.setAttr(this.tabHeaders[i], 'role', 'tab')
            this.setAttr(this.tabHeaders[i], 'aria-selected', 'false')
            this.setAttr(this.tabHeaders[i], 'aria-controls', `${this.selectName.replace(/[^\w\s]/g, '')}_con_${i}`)
            this.setAttr(this.tabBodys[i], 'id', `${this.selectName.replace(/[^\w\s]/g, '')}_con_${i}`)
            this.setAttr(this.tabBodys[i], 'role', 'tabpanel')
            this.setAttr(this.tabBodys[i], 'aria-labelledby', `${this.selectName.replace(/[^\w\s]/g, '')}_${i}`)
        }

        // 접근성
        this.setAttr(this.tabHeader, 'role', 'tablist')
        this.setAttr(this.tabHeaders[this.startTab], 'aria-selected', 'true')
        this.addClass(this.tabHeaders[this.startTab], 'active')
        this.addClass(this.tabBodys[this.startTab], 'active')
        
    }


    toggle(e) {
        // e.preventDefault()
        e.stopPropagation()
        let addEl = this.evtAssign('.tab_header_item', e.target) //타겟보다 아래요소 클릭됐을 때
        if(!addEl) return; //위임 중 다른거 클릭됐을 때
 
        let toggle = this.toggleClass(this.tabHeaders, addEl, 'active')
        let idx = toggle.dataset.tab;
        this.toggleClass(this.tabBodys, this.tabBodys[idx], 'active')
        this.toggleAttr(this.tabHeaders, this.tabHeaders[idx], 'aria-selected', 'false', 'true')
        
    }



    
    
}

export default Tab;