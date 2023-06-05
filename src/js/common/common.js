const common = {
    val: {
        body: document.querySelector('body'),
        userAgent: navigator.userAgent,
    },

    init: function() {
        this.deviceCheck();
        this.popOpen();
    },

    deviceCheck: function() {
        if (this.val.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || this.val.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            this.val.body.classList.add('mobile')
        } else {
            this.val.body.classList.add('pc')
        }
    },


    popOpen: function() {
        const popupbtn = document.querySelector('.popup_btn')
        const popupEl = document.querySelector('.popup')
        const body = document.querySelector('body')

        popupbtn.addEventListener('click', e => {
           
           

            // 임시 테스트
            if(!popupbtn.classList.contains('on')) {
                popupbtn.classList.add('on')
                body.classList.add('popop_active')

                if(popupbtn.classList.contains('header_all_menu')) {
                    body.classList.add('allmenu')
                }
                
            } else {
                popupbtn.classList.remove('on')
                body.classList.remove('popop_active')

                if(popupbtn.classList.contains('header_all_menu')) {
                    body.classList.remove('allmenu')
                }
            }

            

            // body
            if(!popupEl.classList.contains('on')) {
                popupEl.classList.add('on')
            } else {
                popupEl.classList.remove('on')
            }
        })
    },
}


common.init();