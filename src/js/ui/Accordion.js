import Ui from './Ui.js'

class Accordion extends Ui {
    constructor(el, { startTab, oneTab }) {
        super();

        this.selectName = el;
        this.startTab = startTab;
        this.el = document.querySelector(el);
        this.heads = this.el.querySelectorAll('.item > .acco_head')
        this.bodys = this.el.querySelectorAll('.item > .acco_body')

        this.init();

        this.el.addEventListener('click', this.action.bind(this))
    }


    init() {
        // console.log('Accordion init')
        for(let i = 0; i < this.heads.length; i++) {
            this.setAttr(this.heads[i], 'data-acco_head', i)
            
            //접근성
            this.setAttr(this.heads[i], 'aria-expanded', 'false')
            this.setAttr(this.heads[i], 'aria-controls', `${this.selectName.replace(/[^\w\s]/g, '')}_accoHead_${i}`)
            this.setAttr(this.heads[i], 'id', `${this.selectName.replace(/[^\w\s]/g, '')}_accoBody_${i}`)

            this.setAttr(this.bodys[i], 'data-acco_body', i)
            this.setAttr(this.bodys[i], 'id', `${this.selectName.replace(/[^\w\s]/g, '')}_accoHead_${i}`)
            this.setAttr(this.bodys[i], 'aria-labelledby', `${this.selectName.replace(/[^\w\s]/g, '')}_accoBody_${i}`)
        }


        // 로드 시 열려있어야하는 탭
        if(this.startTab) {
            console.log(this.startTab)
            this.setAttr(this.heads[this.startTab], 'aria-expanded', 'false')
            this.addClass(this.heads[this.startTab], 'on')
            this.addClass(this.bodys[this.startTab], 'on')
        }
    }

    action(e) {
        e.stopPropagation()
        let isTarget = this.evtAssign('.acco_head', e.target)
        if(!isTarget) return;

        let idx = isTarget.dataset.acco_head
    

        if(isTarget.classList.contains('on')) {
            console.log('assad')
            this.removeClass(isTarget, 'on')
            this.removeClass(this.bodys[idx], 'on')
            this.setAttr(this.bodys[idx], 'aria-expanded', 'false')
        } else {
            this.toggleClass(this.heads, isTarget, 'on')
            this.toggleClass(this.bodys, this.bodys[idx], 'on')
            
            // 접근성
            this.toggleAttr(this.heads, this.heads[idx], 'aria-expanded', 'false', 'true')
        }
    }
} 


export default Accordion;