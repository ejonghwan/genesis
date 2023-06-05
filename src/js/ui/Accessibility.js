import Ui from './Ui.js'


// 팝업같은 형태의 UI에서 형제, 자식 aria-hidden과 tabindex 토글 해주는 객체
class Accessibility extends Ui {
    constructor(els) {
        super();
        // if(!this.typeCheck(els, NodeList) || !this.typeCheck(els, Array) ) throw new Error('Array or NodeList로 전달해주세요')

        this.els = document.querySelectorAll(els);
    }

    disable() {
        // aria-hidden='true', tabindex="-1"

        for(let i = 0; i < this.els.length; i++) {
             // 엘리먼트가 탭인덱스 0인 경우. 이거 나중에 손봐야됨. 2개 넣어도 1개만 찾아짐
            //  console.log( this.els[i].querySelectorAll("[tabindex='0']").length)
            //  for(let g = 0; g < this.els[i].querySelectorAll("[tabindex='0']").length; g++) {
            //     // console.log(this.els[i].querySelectorAll("[tabindex='0']")[g])
            //     console.log(g)
            //     this.setAttr(this.els[i].querySelectorAll("[tabindex='0']")[g], 'tabindex', 'asdasd')
            // }
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
            // 엘리먼트가 탭인덱스 0인 경우. 이거 나중에 손봐야됨. 2개 넣어도 1개만 찾아짐
           //  console.log( this.els[i].querySelectorAll("[tabindex='0']").length)
           //  for(let g = 0; g < this.els[i].querySelectorAll("[tabindex='0']").length; g++) {
           //     // console.log(this.els[i].querySelectorAll("[tabindex='0']")[g])
           //     console.log(g)
           //     this.setAttr(this.els[i].querySelectorAll("[tabindex='0']")[g], 'tabindex', 'asdasd')
           // }
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
        target.focus();
    }
    

}

export default Accessibility;