import Ui from './Ui.js'

class Tab extends Ui {
    constructor(el) {
        super()
        this.el = el;
        this.tabHeaders = this.el.querySelectorAll('.tab_header > .tab_header_item')
        this.tabBodys = this.el.querySelectorAll('.tab_body > li')
          
        this.el.addEventListener('click', e => {

            // console.log(e.target, '.tab_header_item')

            let targetEl = this.evtAssign('.tab_header_item', e.target)
            let idx = this.toggleClass(this.tabHeaders, targetEl, 'active')
            // this.toggleClass(this.tabBodys, this.tabBodys, 'active')

            console.log(idx)


            // console.log(e.target.classList.add('hoho'))
            // this.addClass(e.target, 'hoho?')
        })
    }

    init() {
        

      
    }



    
    
}

export default Tab;