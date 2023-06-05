import Ui from '../ui/Ui.js';
import Accessibility from './Accessibility.js'

class Popup extends Ui {
    constructor(el, btn, { accList, focus }) {
        super();
        this.popupEl = document.querySelector(el)
        this.popupbtn = document.querySelector(btn)
        this.body = document.querySelector('body')

        // 접근성 테스트 
        this.focus = focus;
        this.accList = accList;
        this.acc = new Accessibility(this.accList);

        // this.init();
        this.popupbtn.addEventListener('click', this.popOpen.bind(this))
    }

    init() {
        console.log('popup class')
    }


    popOpen() {
        // 임시 테스트
        if(!this.popupbtn.classList.contains('on')) {
            // 열기
            this.popupbtn.classList.add('on')
            this.body.classList.add('popop_active')
            this.acc.disable();

            setTimeout(() => { //팝업 열리고 포커스 이동
                this.acc.focus(this.focus)
            }, 300)
            
            if(this.popupbtn.classList.contains('header_all_menu')) {
                this.body.classList.add('allmenu')
            }
            
        } else {
            // 닫기
            this.popupbtn.classList.remove('on')
            this.body.classList.remove('popop_active')
            this.acc.enable()

            if(this.popupbtn.classList.contains('header_all_menu')) {
                this.body.classList.remove('allmenu')
            }
        }

        // body
        if(!this.popupEl.classList.contains('on')) {
            this.popupEl.classList.add('on')
        } else {
            this.popupEl.classList.remove('on')
        }
        
    }
}


export default Popup;