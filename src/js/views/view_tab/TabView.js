

class TabView extends View {
    constructor(el) {
        super(el)
        console.log('el?', el)
        this.test();
    }

    test() {
        console.log('tab test')
    }
    
}

export default TabView;