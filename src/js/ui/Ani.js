import Ui from './Ui.js'



class Ani extends Ui {
    constructor(el, { limit }) {
        super();

        this.el = el;
        this.num = 0;
        this.limit = limit;
        this.speed = 2;
        this.animate();

        this.width 
       
        // console.log(el, limit)

    }


    resize() {

    }


    animate() {
        let ani = requestAnimationFrame(this.animate.bind(this))
        this.num++
        if(this.limit < this.num) {
            cancelAnimationFrame(ani)
        }

        this.el.style.clip = `rect(0px, ${this.num * this.speed}px, 610px, 0px)`

        console.log(11)
    }

    
} 


export default Ani;


