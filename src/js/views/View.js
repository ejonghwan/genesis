

class View {
    constructor(el, name) {
        if(!el) throw el;
        this.el = el;
        return el;
    }

    on(event, handler) {
        this.el.addEventListener(event, handler);
        return this;
    }

    emit(event, data) {
        const evt = new CustomEvent(event, { detail: data });
        this.el.dispatchEvent(evt);
        return this;
    }

    show() {
        this.el.style.display = '';
    }

    hide() {
        this.el.style.display = 'none'; 
    }

}

export default View;