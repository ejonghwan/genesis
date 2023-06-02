import View from '../View.js'

class TabView extends View {
    constructor(el) {
        super(el);
        this.el = el;
        this.init();
    }

    init() {
        this.tabTitle = this.el.querySelector('.tab_header');
        console.log(this)
        this.on('click', e => {
            // console.log(e.target.classList.add('hoho'))
            // this.addClass(e.target, 'hoho?')
        })
    }



    
    
}

export default TabView;