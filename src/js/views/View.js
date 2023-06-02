

class View {
    constructor(el, name) {
        if(!el) throw new Error(`e? ${el}`);
        this.el = el;
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

    addClass(target, className) {
        target.classList.add(className)
        return this;
    }

    removeClass(target, className) {
        target.classList.remove(className)
        return this;
    }

    setAttr(target, attr, str) {
        target.setAttribute(attr, str)
        return this;
    }

    removeAttr(target, attr, str) {
        target.removeAttribute(attr, str)
    }

    toggle(attr, str) {
        
    }

}

export default View;