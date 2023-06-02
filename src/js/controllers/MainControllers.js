import TabView from '../views/view_tab/TabView.js'

class MainContrllers {
    constructor() {
        this.tab = document.querySelector('.tab_wrap')
    }

    init() {
        console.log('main controll')
        new TabView(this.tab);
    }
}


export default MainContrllers;