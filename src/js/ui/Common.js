
class Common {
    constructor() {
        this.body = document.querySelector('body'),
        this.userAgent = navigator.userAgent;
        
    }

    init() {
        this.deviceCheck();
    }



    deviceCheck() {
        if (this.userAgent.match(/iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || this.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
            this.body.classList.add('mobile')
        } else {
            this.body.classList.add('pc')
        }
    }

}

export default Common;