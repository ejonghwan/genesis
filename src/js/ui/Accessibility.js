import Ui from './Ui.js'


// 팝업같은 형태의 UI에서 형제, 자식 aria-hidden과 tabindex 토글 해주는 객체
class Accessibility extends Ui {
    constructor(els) {
        super();
        this.els = document.querySelectorAll(els);
    }

    disable() {
        // aria-hidden='true', tabindex="-1"
        for(let i = 0; i < this.els.length; i++) {
             // 링크태그인 경우
             for(let j = 0; j < this.els[i].querySelectorAll('a').length; j++) {
                this.setAttr(this.els[i].querySelectorAll('a')[j], 'tabindex', '-1')
            }
             // 버튼인 경우
            for(let h = 0; h < this.els[i].querySelectorAll('button').length; h++) {
                this.setAttr(this.els[i].querySelectorAll('button')[h], 'tabindex', '-1')
            }
           
            this.setAttr(this.els[i], 'aria-hidden', 'true')
            this.setAttr(this.els[i], 'tabindex', '-1')
        }
    }


    enable() {
        // aria-hidden 없애고, tabindex 없앰
        for(let i = 0; i < this.els.length; i++) {
            // 링크태그인 경우
            for(let j = 0; j < this.els[i].querySelectorAll('a').length; j++) {
               this.setAttr(this.els[i].querySelectorAll('a')[j], 'tabindex', '0')
           }
            // 버튼인 경우
           for(let h = 0; h < this.els[i].querySelectorAll('button').length; h++) {
               this.setAttr(this.els[i].querySelectorAll('button')[h], 'tabindex', '0')
           }
          
           this.removeAttr(this.els[i], 'aria-hidden', 'true')
           this.removeAttr(this.els[i], 'tabindex', '-1')

       }
    }

    focus(el) {
        if(!el) throw new Error('el 없음');
        let target = document.querySelector(el);
        setTimeout(() => target.focus(), 300); 
    }
    

}

export default Accessibility;