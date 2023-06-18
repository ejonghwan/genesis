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
                console.log('item: ', item)
                if(item.isIntersecting) observer.unobserve(item.target) // 이미 생성된건 유지
            })
            // console.log(entries)
        }, {
            // threshold: 1, // 임계값 0 ~ 1
            // rootMargin: '-100px', // 엘리먼트가 사라져있는 위치
            // root: ,
            // threshold: 1,
        })


        this.els.forEach((item, idx) => {
            console.log(idx)
            observer.observe(item)
        })
        
    }





}

export default ObAnimation;