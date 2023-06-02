

class Ui {
    constructor() {
        
    }

   
    emit(el, event, data) {
        const evt = new CustomEvent(event, { detail: data });
        el.dispatchEvent(evt);
        return this;
    }

    show(target) {
        target.style.display = '';
    }

    hide(target) {
        target.style.display = 'none'; 
    }

    addClass(target, className) {
        target.classList.add(className)
        return this;
    }

    removeClass(target, className) {
        target.classList.remove(className)
        return this;
    }

    toggleClass(removeEls, addEl, className) {
        // if(!this.typeCheck(removeEls, Array)) removeEls = [removeEls];
        let cur;
        for(let i = 0; i < removeEls.length; i++) {
            this.removeClass(removeEls[i], className);
            for(let j = 0; j < removeEls.length; j++) {
                this.addClass(addEl, className);
            }
        }
        return cur;
    }

    setAttr(target, attr, str) {
        target.setAttribute(attr, str)
        return this;
    }

    removeAttr(target, attr, str) {
        target.removeAttribute(attr, str)
    }

    evtAssign(selector, evtTarget) {
        let isTarget = target => [...target.querySelectorAll(selector)].includes(target) || target.closest(selector)
        return isTarget(evtTarget)
    }

    typeCheck(type, checkType) {
        return type instanceof checkType;
    }

}

export default Ui;