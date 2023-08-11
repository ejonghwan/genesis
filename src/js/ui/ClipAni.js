import Ui from './Ui.js'



class ClipAni extends Ui {
    constructor(el, { limit, els, prev_el, duration, callback }) {
        super();

        this.el = el;
        this.num = 0;
        this.limit = limit;
        this.duration = duration;
        this.startTime = performance.now();
        this.els = els;
        this.prev_el = prev_el;
        this.callback = callback;

        this.init();
        requestAnimationFrame(this.animate.bind(this))
        
    }

    init() {
        for(let i = 0; i < this.els.length; i++) {
            this.els[i].style.zIndex = 0;
        }
        this.prev_el.style.zIndex = 1;
        this.el.style.zIndex = 2;
    }


    animate(time) {
        let timelast = time - this.startTime;
		let progress = timelast / this.duration || 500;

        progress < 0 && (progress = 0);
		progress > 1 && (progress = 1);
        progress < 1 ? requestAnimationFrame(this.animate.bind(this)) : this.callback && setTimeout(this.callback, 0);
        this.el.style.clip = `rect(0px, ${progress * this.limit}px, 610px, 0px)`
    }

    
} 


export default ClipAni;


