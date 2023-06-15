import Ui from './ui/Ui.js'
import Tab from './ui/Tab.js'
import Accordion from './ui/Accordion.js'
import Popup from './ui/Popup.js'
import Common from './ui/Common.js'
import Accessibility from './ui/Accessibility.js'
import Animete from './ui/Animete.js'
import ClipAni from './ui/ClipAni.js'
import Loading from './ui/Loading.js'
import Test from './ui/Test.js'




// DOM 생성시 실행
window.addEventListener('DOMContentLoaded', new Common().init())


export {
    Ui, 
    Tab,
    Accordion,
    Popup,
    Accessibility,
    Animete,
    ClipAni,
    Loading,
    Test,
}
