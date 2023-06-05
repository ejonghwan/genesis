import Ui from '../ui/Ui.js';

class Popup extends Ui {
    constructor() {
        this.popupbtn = document.querySelector('.popup_btn')
        this.popupEl = document.querySelector('.popup')
        this.body = document.querySelector('body')


        this.popupbtn.addEventListener('click', this.popOpen.bind(this))
    }


    popOpen() {
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