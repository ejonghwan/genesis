import Ui from '../ui/Ui.js';
import Accessibility from './Accessibility.js'


class Popup extends Ui {
    constructor(el, { openBtn, closeBtn, accList, nextFocus, prevFocus, dimd, toggle }) {
        super();
        this.popupEl = document.querySelector(el)
        this.openBtn = document.querySelector(openBtn)
        this.closeBtn = document.querySelectorAll(closeBtn)
        this.dimd = document.querySelector(dimd)
        this.body = document.querySelector('body')
        this.toggle = toggle || false // 버튼 하나로 열닫할때 true / false

        // 접근성 테스트 
        this.nextFocus = nextFocus;
        this.prevFocus = prevFocus;
        this.accList = accList;
        this.acc = new Accessibility(this.accList);

        // this.init();
        window.addEventListener('resize', this.init.bind(this))
        this.openBtn.addEventListener('click', this.popOpen.bind(this))
        this.dimd.addEventListener('click', this.popClose.bind(this))
        for(let i = 0; i < this.closeBtn.length; i++) {
            this.closeBtn[i].addEventListener('click', this.popClose.bind(this))
        }
    }

    init() {
        console.log('popup class')
    }

    resize() {
        this.popClose();
    }





    popOpen() {

        this.popToggle();
        if(!this.toggle && !this.openBtn.classList.contains('on')) {
            // 열기
            this.addClass(this.openBtn, 'on')
            this.addClass(this.body, 'popop_active')
            this.addClass(this.dimd, 'on')
            this.addClass(this.popupEl, 'on')
            this.acc.disable();
            this.acc.focus(this.nextFocus) //ms 300
            
            if(this.openBtn.closest('header')) this.addClass(this.body, 'allmenu')
        }
    }


    popClose() {
        if(!this.toggle && this.openBtn.classList.contains('on')) {
             // 닫기
             this.removeClass(this.openBtn, 'on')
             this.removeClass(this.body, 'popop_active')
             this.removeClass(this.dimd, 'on')
             this.removeClass(this.popupEl, 'on')
             this.acc.enable()
             this.acc.focus(this.prevFocus) //ms 300
             
             if(this.openBtn.closest('header')) this.removeClass(this.body, 'allmenu')
        }
    }


    popToggle() {
         // 임시 테스트
         if(this.toggle && !this.openBtn.classList.contains('on')) {
            // 열기
            this.addClass(this.openBtn, 'on')
            this.addClass(this.body, 'popop_active')
            this.addClass(this.dimd, 'on')
            this.addClass(this.dimd, 'on')
            this.addClass(this.popupEl, 'on')
            
            this.acc.disable();
            this.acc.focus(this.nextFocus) //ms 300
            
            
            if(this.openBtn.closest('header')) this.addClass(this.body, 'allmenu')
        } else {
             // 닫기
             this.removeClass(this.openBtn, 'on')
             this.removeClass(this.body, 'popop_active')
             this.removeClass(this.dimd, 'on')
             this.removeClass(this.popupEl, 'on')
             this.acc.enable()
             this.acc.focus(this.prevFocus) //ms 300
             
             if(this.openBtn.closest('header')) this.removeClass(this.body, 'allmenu')
        }



    }

}


export default Popup;