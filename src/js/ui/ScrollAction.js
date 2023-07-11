import Ui from './Ui.js';

class ScrollAction extends Ui {
    constructor() {
        super();
        
        this.yOffset = 0;
        this.prevScrollHeight = 0;
        this.currentSection = 0;
    }


    

    init() {
        this.info = [
            {
                type: 'sticky',
                heightNumber: 5,
                scrollHeight: 0,
                el: {
                    wrap: document.querySelector('#sec_0')
                }
            },
            {
                type: 'normal',
                heightNumber: 2,
                scrollHeight: 0,
                el: {
                    wrap: document.querySelector('#sec_1')
                }
            },
            {
                type: 'sticky',
                heightNumber: 1,
                scrollHeight: 0,
                el: {
                    wrap: document.querySelector('#sec_2')
                }
            },
            {
                type: 'sticky',
                heightNumber: 5,
                scrollHeight: 0,
                el: {
                    wrap: document.querySelector('#sec_3')
                }
            },
        ]

        this.setHeight()

        window.addEventListener('resize', this.setHeight.bind(this))
        window.addEventListener('scroll', this.handleScroll.bind(this))

    }


    setHeight() {
        for(let i = 0; i < this.info.length; i++) {
            this.info[i].scrollHeight = this.info[i].heightNumber * window.innerHeight;
            this.info[i].el.wrap.style.height = `${this.info[i].scrollHeight}px`
        }

    }


    handleScroll() {
        this.yOffset = window.pageYOffset;
        this.scrollLoop()
        
    }

    scrollLoop() {
        this.prevScrollHeight = 0;
        for(let i = 0; i < this.info.length; i++) {
            this.prevScrollHeight += this.info[i].scrollHeight;
        }

        console.log(this.prevScrollHeight)
    }

}


export default ScrollAction;
