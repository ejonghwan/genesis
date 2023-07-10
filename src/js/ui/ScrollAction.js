import Ui from './Ui.js';

class ScrollAction extends Ui {
    constructor() {
        super();
    }

    init() {
        this.info = [
            {
                type: 'sticky',
                heightNumber: 5,
                scrollHeight: 0,

            }
        ]
    }


}


export default ScrollAction;
