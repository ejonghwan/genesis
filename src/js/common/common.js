

const common = {
    val: {
        body: document.querySelector('body'),
        userAgent: navigator.userAgent,
    },

    init: function() {
        this.deviceCheck();
    },

    deviceCheck: function() {
        if (this.val.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || this.val.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            this.val.body.classList.add('mobile')
        } else {
            this.val.body.classList.add('pc')
        }
    }
}


common.init();