import Ui from './Ui.js'
import Tab from './Tab.js'
import Accordion from './Accordion.js'
import Popup from './Popup.js'



class Common {
    constructor() {
        this.body = document.querySelector('body'),
        this.userAgent = navigator.userAgent;
        
    }

    init() {
        this.deviceCheck();
        this.footer();
        this.globalHeader();
    }

    footer() {
         // 푸터 아코디언
         new Accordion('.footer_sec.all_menu', {
            startTab: false,
            oneTab: true,
        })

        // 푸터 공지

        
        
        new Swiper(".noti_Swiper", {
            centeredSlides: true,
            direction: 'vertical',
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            loop: true,
            navigation: {
                nextEl: ".swiper.noti_Swiper .swiper-button-next",
                prevEl: ".swiper.noti_Swiper .swiper-button-prev"
            },

            on: {
                init: function() {
                    const play = document.querySelector('.noti_Swiper .swiper-state .play')
                    const stop = document.querySelector('.noti_Swiper .swiper-state .stop')
                    play.addEventListener('click', e => {
                        stop.classList.add('on')
                        play.classList.remove('on')
                        this.autoplay.start()
                    })
                    stop.addEventListener('click', e => {
                        stop.classList.remove('on')
                        play.classList.add('on')
                       this.autoplay.stop()
                    })
                }
            }
         });

         

          

    }
    globalHeader() {
           
            // 햄버거 메뉴 
            new Popup('.popup.all_menu', {
                openBtn: '.popup_btn',
                closeBtn: '.popup_btn',
                accList: ['#container', 'footer', '#skip_conts'],
                nextFocus: ".pupup_type1_body",
                prevFocus: ".popup_btn",
                dimd: '.dimd',
                toggle: true,
            })

            // 햄버거 메뉴 안 아코디언
            new Accordion('.footer_sec.all_menu.pop', {
                startTab: false,
                oneTab: true,
            })

            // 네비메뉴
            // new Popup('.popup.nav_menu', {
            //     openBtn: '.header_nav',
            //     closeBtn: '.popup.nav_menu .pop_close',
            //     accList: ['#container', 'footer', '#skip_conts'],
            //     nextFocus: ".pupup_type1_body",
            //     prevFocus: ".popup_btn",
            //     dimd: '.dimd'
            // })

            // 네비 안 탭
        //    new Tab('.tab.type2', {
        //         startTab: 0,
        //         current: function(idx) {// console.log(idx)
        //         },
        //         callback: function(idx) {
              
        //         }
        //     })    

            const nav_swiper = new Swiper(".swiper.header_nav", {
                autoHeight : true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper.header_nav .swiper-button-next",
                    prevEl: ".swiper.header_nav .swiper-button-prev"
                },
                on: {
                    init() {
                        // console.log('nav swiper init?')
                    }
                }
            });



            const menus = document.querySelectorAll('.header_nav > li');

            for(let i = 0; i < menus.length; i++) {
                menus[i].addEventListener('click', e => {
                    nav_swiper.slideTo(i)
                })
            }
           
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