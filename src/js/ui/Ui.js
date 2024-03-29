class Ui {
    constructor() {}

   
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
        for(let i = 0; i < removeEls.length; i++) {
            this.removeClass(removeEls[i], className);
            for(let j = 0; j < removeEls.length; j++) {
                this.addClass(addEl, className);
            }
        }
        return addEl;
    }

    toggleAttr(removeEls, addEl, attrName, removeStr, addStr) {
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

    imageLazyLoad(els) {
        const lazyEls = document.querySelectorAll(els);
        const options = {}
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const target = entry.target;
                    const previousSibling = target.previousElementSibling;
                    target.src = target.dataset.src;
                    previousSibling.srcset = previousSibling.dataset.srcset;
                    if(entry.isIntersecting) observer.unobserve(target)
                }
            })
        }
        const observer = new IntersectionObserver(callback, options);
        lazyEls.forEach(el => observer.observe(el));
    }

    bgLazyLoad(els) {
        const lazyEls = document.querySelectorAll(els);
        const options = {}
        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const target = entry.target;
                    target.style.backgroundImage = `url(${target.dataset.src})`
                    if(entry.isIntersecting) observer.unobserve(target)
                }
            })
        }
        const observer = new IntersectionObserver(callback, options);
        lazyEls.forEach(el => observer.observe(el));
    }


    throttle(cb) {
        let rAfTimeout = null;

        return function () {
          if (rAfTimeout) window.cancelAnimationFrame(rAfTimeout);
          rAfTimeout = window.requestAnimationFrame(() => cb() )
        }
      }


    startCallDebounce(cb, wait) {
        let timeout = null;
        let hoho = false;

        return function(args) {
            if(!hoho) {
                cb(args);
                hoho = true; 
            }
            clearTimeout(timeout); //클리어하고
            timeout = setTimeout(() => { hoho = false; }, wait); //다시 설정하고  
        }
    }

    lastCallDebounce(cb, delay) {
        let timeout
        return (args) => {
          clearTimeout(timeout)
          timeout = setTimeout(() => {
            cb(args)
          }, delay)
        }
    }

}

export default Ui;