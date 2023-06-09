class Ui {
    constructor() {
        
    }

   
    emit(el, event, data) {
        if(!el) return;
        const evt = new CustomEvent(event, { detail: data });
        el.dispatchEvent(evt);
        return this;
    }

    show(target) {
        if(!target) return;
        target.style.display = '';
    }

    hide(target) {
        if(!target) return;
        target.style.display = 'none'; 
    }

    addClass(target, className) {
        if(!target) return;
        target.classList.add(className)
        return this;
    }

    removeClass(target, className) {
        if(!target) return;
        target.classList.remove(className)
        return this;
    }

    toggleClass(removeEls, addEl, className) {
        // if(!this.typeCheck(removeEls, Array)) removeEls = [removeEls];
        for(let i = 0; i < removeEls.length; i++) {
            this.removeClass(removeEls[i], className);
            for(let j = 0; j < removeEls.length; j++) {
                this.addClass(addEl, className);
            }
        }
        return addEl;
    }

    toggleAttr(removeEls, addEl, attrName, removeStr, addStr) {
        // if(!this.typeCheck(removeEls, Array)) removeEls = [removeEls];
        for(let i = 0; i < removeEls.length; i++) {
            this.setAttr(removeEls[i], attrName, removeStr)
            for(let j = 0; j < removeEls.length; j++) {
                this.setAttr(addEl, attrName, addStr)
            }
        }
        return addEl;
    }

    setAttr(target, attr, str) {
        if(!target) return;
        target.setAttribute(attr, str)
        return this;
    }

    removeAttr(target, attr, str) {
        if(!target) return;
        target.removeAttribute(attr, str)
    }

    evtAssign(selector, evtTarget) {
        let isTarget = target => [...target.querySelectorAll(selector)].includes(target) || target.closest(selector)
        return isTarget ? isTarget(evtTarget): false; 
    }

    typeCheck(type, checkType) {
        return type instanceof checkType;
    }

    throttle(cb) {
        var rAfTimeout = null;

        return function () {
          if (rAfTimeout) window.cancelAnimationFrame(rAfTimeout);
          rAfTimeout = window.requestAnimationFrame(() => cb() )
        }
      }

    debounce(cb, wait) {
        var timeout;
        var hoho = false;
        return function(args) {

            if(!hoho) {
                cb(args);
                hoho = true; 
            }
            clearTimeout(timeout); //클리어하고
            timeout = setTimeout(() => { hoho = false; }, wait); //다시 설정하고  
        }
    }

}

export default Ui;