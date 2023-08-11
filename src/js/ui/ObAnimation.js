import Ui from './Ui.js'


class ObAnimation extends Ui {
    constructor(els, { className }) {
        super();
        this.els = document.querySelectorAll(els);
        this.className = className;
        this.observer();
    }


    observer() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(item => {
                item.target.classList.toggle(this.className, item.isIntersecting)
                if(item.isIntersecting) observer.unobserve(item.target) // 이미 생성된건 유지
            })
        },)


        this.els.forEach((item, idx) => {
            observer.observe(item)
        })
        
    }





}

export default ObAnimation;