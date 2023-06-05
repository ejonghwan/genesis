import Ui from '../ui/Ui.js';
import Accessibility from './Accessibility.js'

class Popup extends Ui {
    constructor(el, btn) {
        super();
        this.popupEl = document.querySelector(el)
        this.popupbtn = document.querySelector(btn)
        this.body = document.querySelector('body')

        // this.init();
        this.popupbtn.addEventListener('click', this.popOpen.bind(this))
    }

    init() {
        console.log('popup class')
    }


    popOpen() {
        // 접근성 테스트 
        const acc = new Accessibility(['header', 'footer', 'main', '#skip_conts']);
        acc.disable()

        // acc.focus('.popup')


        // 임시 테스트
        if(!this.popupbtn.classList.contains('on')) {
            this.popupbtn.classList.add('on')
            this.body.classList.add('popop_active')

            if(this.popupbtn.classList.contains('header_all_menu')) {
                this.body.classList.add('allmenu')
            }
            
        } else {
            this.popupbtn.classList.remove('on')
            this.body.classList.remove('popop_active')

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