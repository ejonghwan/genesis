import Ui from './Ui.js'



class Ani extends Ui {
    constructor(el, { limit, els }) {
        super();

        this.el = el;
        this.num = 0;
        this.limit = limit;
        this.duration  = 300;
        this.startTime = performance.now();
        this.animate();
        this.els = els;
        // this.prevEl = null;
        console.log(this.els)

        for(let i = 0; i < this.els.length; i++) {
            this.els[i].style.zIndex = 0;
        }

    }


    resize() {

    }


    animate(time) {
        let ani = requestAnimationFrame(this.animate.bind(this))

        let timelast = time - this.startTime;
		let progress = timelast / this.duration || 500;
        progress < 0 && (progress = 0);
		progress > 1 && (progress = 1);

        console.log('t?', progress * window.innerWidth)
        

        this.num++
        if(this.limit < this.num) {
            cancelAnimationFrame(ani)
            // this.prevEl.style.zIndex = 0;
            // this.prevEl = this.el;

            // console.log('prevEl ?', this.prevEl)
        }

        this.el.style.clip = `rect(0px, ${progress * window.innerWidth}px, 610px, 0px)`
        this.el.style.zIndex = 1

        // console.log(11)
    }

    
} 


export default Ani;


