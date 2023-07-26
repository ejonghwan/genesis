import Ui from './Ui.js';

class ScrollAction extends Ui {
    constructor() {
        super();
        
        this.yOffset = 0; // 총 y 값
        this.prevHeight = 0; // 지나온 값
        this.curNum = 0; //현재 섹션 n
        this.curSecYOffset; // 현재 섹션 y값
        this.secChange = false; //새로운 섹션에서 true

        this.info = [
            {
                type: 'sticky',
                heightNum: 5,
                secHeight: 0,
                els: {
                    wrap: document.querySelector('#sec_0'),
                    msgH: document.querySelector('#sec_0 .g_sans.m0'), 
                    msgA: document.querySelector('#sec_0 .message.m1'), 
                    msgB: document.querySelector('#sec_0 .message.m2'), 
                    canvas: document.querySelector('#sec_0 #canvas_01'),
                    context: document.querySelector('#sec_0 #canvas_01').getContext('2d'),
                    imagesArr: [],
                },
                values: {
                    imageCount: 206,
                    imageSequence: [0, 205],
                    canvas_opacity_out: [1, 0, { start: 0.9, end: 0.99 }],
                    msgH_scale_out: [1, 100, { start: 0, end: 0.2 }],
                    msgA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                    msgA_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
                    msgA_transY_in: [20, 0, { start: 0.1, end: 0.2 }],
                    msgA_transY_out: [0, -20, { start: 0.3, end: 0.4 }],

                    msgB_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    msgB_opacity_out: [1, 0, { start: 0.7, end: 0.8 }],
                    msgB_transY_in: [20, 0, { start: 0.5, end: 0.6 }],
                    msgB_transY_out: [0, -20, { start: 0.7, end: 0.8 }],

                }
            },
            {
                type: 'normal',
                heightNum: 2,
                secHeight: 0,
                els: {
                    wrap: document.querySelector('#sec_1')
                }
            },
            {
                type: 'sticky',
                heightNum: 4,
                secHeight: 0,
                els: {
                    wrap: document.querySelector('#sec_2'),
                    msgHa: document.querySelector('#sec_2 .m0'), 
                    canvas: document.querySelector('#sec_2 #canvas_01'),
                    context: document.querySelector('#sec_2 #canvas_01').getContext('2d'),
                    imagesArr: [],
                },
                values: {
                    imageCount: 86,
                    imageSequence: [0, 85],
                    // canvas_opacity_in: [0, 1, { start: 0.01, end: 0.2 }],
                    // canvas_opacity_out: [1, 0, { start: 0.9, end: 0.99 }],

                    // msgH_filter_in: [10, 0, { start: 0.01, end: 0.2 }],
                    // msgH_filter_out: [0, 10, { start: 0.2, end: 0.3 }],
                    msgHa_opacity_in: [0, 1, { start: 0.2, end: 0.4 }],
                    // msgHa_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
                    // msgHa_translateY_in: [0, -150, { start: 0.4, end: 0.6}],

                }
            },
            {
                type: 'sticky',
                heightNum: 5,
                secHeight: 0,
                els: {
                    wrap: document.querySelector('#sec_3')
                }
            },
        ]


        window.addEventListener('load', this.init.bind(this));
        window.addEventListener('resize', this.setHeight.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
        // window.addEventListener('DOMContentLoaded', this.setHeight.bind(this));
    }


    

    init() {
        this.setHeight()
        this.setImage(0, '../src/assets/images/product/s01/gene_s01_', 0); //idx, src, fileStartNum
        this.setImage(2, '../src/assets/images/product/s03d1/gene_s03d_', 188);
      
        this.info[0].els.context.drawImage(this.info[0].els.imagesArr[0], 0, 0)
        // this.info[2].els.context.drawImage(this.info[2].els.imagesArr[0], 0, 0)
    }

    ani() {
        const els = this.info[this.curNum].els;
        const values = this.info[this.curNum].values;
        let curSecRatio = this.curSecYOffset / this.info[this.curNum].secHeight;
        // console.log(curSecRatio)
        // console.log(this.curSecYOffset)
        switch(this.curNum) {
            case 0: 
                let sequence0 = Math.round(this.calc(values.imageSequence))
                els.context.drawImage(els.imagesArr[sequence0], 0, 0);
                els.canvas.style.opacity = this.calc(values.canvas_opacity_out)
                els.msgH.style.transform = `scale(${this.calc(values.msgH_scale_out)})`
                if(curSecRatio <= 0.25) {
                    els.msgA.style.opacity = this.calc(values.msgA_opacity_in)
                    els.msgA.style.transform = `translateY(${this.calc(values.msgA_transY_in)}px)`
                } else {
                    els.msgA.style.opacity = this.calc(values.msgA_opacity_out)
                    els.msgA.style.transform = `translateY(${this.calc(values.msgA_transY_out)}px)`
                }
                if(curSecRatio <= 0.4) {
                    els.msgB.style.opacity = this.calc(values.msgB_opacity_in)
                    els.msgB.style.transform = `translateY(${this.calc(values.msgB_transY_in)}px)`
                    // els.msgH.style.display = 'block';
                } else {
                    els.msgB.style.opacity = this.calc(values.msgB_opacity_out)
                    els.msgB.style.transform = `translateY(${this.calc(values.msgB_transY_out)}px)`
                    // els.msgH.style.display = 'none';
                }
                return 

            case 1: 
                // console.log('1 ani')
                return 

            case 2: 
                // console.log('2 ani')
                // let sequence2 = Math.round(this.calc(values.imageSequence))
                // els.context.drawImage(els.imagesArr[sequence2], 0, 0);
                // els.canvas.style.opacity = this.calc(values.canvas_opacity_out)
                if(curSecRatio <= 0.5) {
                    // console.log('o', this.calc(values.msgH_opacity_in))
                    // console.log('ccc?', this.calc(values.msgH_opacity_in))
                    els.msgHa.style.opacity = this.calc(values.msgHa_opacity_in)
                    // els.msgH.style.filter = `blur(${this.calc(values.msgH_filter_in)}px)`
                    // els.canvas.style.opacity = this.calc(values.canvas_opacity_in)
                } else {
                    // console.log('x', this.calc(values.msgH_opacity_in))
                }
               

                
                return 

            case 3: 
                // console.log('3 ani')
                return 
            
            case 4: 
                // console.log('4 ani')
                return 

            default : 0
        }
    }


    setHeight() {
        let totalHeight = 0;
        this.yOffset = window.pageYOffset;
        for(let i = 0; i < this.info.length; i++) {
            
            if(this.info[i].type === 'sticky') {
                this.info[i].secHeight = this.info[i].heightNum * window.innerHeight;
            }

            if(this.info[i].type === 'normal') {
                this.info[i].secHeight = this.info[i].els.wrap.offsetHeight;
            }
            
            this.info[i].els.wrap.style.height = `${this.info[i].secHeight}px`
        }

        for(let i = 0; i < this.info.length; i++) {
            totalHeight += this.info[i].secHeight;
            if(totalHeight >= this.yOffset) {
                this.curNum = i;
                break
            }
        }
        document.body.setAttribute('id', `show_sec_${this.curNum}`)
        let heightRatio = window.innerHeight / 1080;

        // canvas 설정
        this.info[0].els.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0.2})`
        this.info[2].els.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0.2})`
    }

    handleScroll() {
        this.yOffset = window.pageYOffset;
        this.curSecYOffset = Math.abs(this.yOffset - this.prevHeight);
        this.scrollLoop();
    }

    scrollLoop() {
        this.secChange = false;
        this.prevHeight = 0;
        for(let i = 0; i < this.curNum; i++) {
            this.prevHeight += this.info[i].secHeight;
        }
        if(this.yOffset > this.prevHeight + this.info[this.curNum].secHeight) {
            this.secChange = true;
            if(this.curNum === this.info.length - 1) return;
            this.curNum++
        }
        if(this.yOffset < this.prevHeight) {
            this.secChange = true;
            if(this.curNum === 0) return;
            this.curNum--
        }
        document.body.setAttribute('id', `show_sec_${this.curNum}`)
        // console.log(this.curSecYOffset, this.secChange)

        // console.log(this.secChange)
        if(this.secChange) return; //섹션이 변경될 때는 ani를 잠깐 실행 중지
        this.ani()
        this.conHaeder();
        
    }

    calc(values) {
        // 현재 섹션부터 시작, 끝값 계산
        let result = null;
        const ratio = this.curSecYOffset / this.info[this.curNum].secHeight;
        const curSecHeight = this.info[this.curNum].secHeight; //현재 섹션값
        console.log('?????', result)
        if(values.length === 3) {
            // part 존재 시
            const partStart = values[2].start * curSecHeight;
            const partEnd = values[2].end * curSecHeight;
            const partHeight = partEnd - partStart;     
            
            if(this.curSecYOffset >= partStart && this.curSecYOffset <= partEnd) {
                // part 구간
                let partRatio = (this.curSecYOffset - partStart) / partHeight;
                result = partRatio * (values[1] - values[0]) + values[0];
            } else if(this.curSecYOffset <= partStart) {
                // part 전 구간
                result = values[0];
            } else if(this.curSecYOffset >= partEnd) {
                // part 후 구간
                result = values[1];
            }
            console.log('re??', result)
        } else {
            // part가 없을 시 
            result = ratio * (values[1] - values[0]) + values[0];
        }

    
        return result;
    }

    
    

    setImage(idx, src, startNum) {
        let imgEl = null;
        for(let i = startNum; i < startNum + this.info[idx].values.imageCount; i++) {
            imgEl = new Image();
            // 영상 내보내기 이름 설정 못해서 
            if(i <= 10) { 
                imgEl.src = `${src}000${i}.png` 
                // console.log('10 이하구간', i)
            }
            if(i >= 10 && i < 100) { 
                imgEl.src = `${src}00${i}.png` 
                // console.log('100 이하구간', i)
            }
            if(i >= 100 && i < 1000) { 
                imgEl.src = `${src}0${i}.png` 
                // console.log('1000 이하구간', i)
            }
            this.info[idx].els.imagesArr.push(imgEl)
        }

        console.log(this.info[idx])
    }

    conHaeder() {
        const header = document.querySelector('#header');
        const conHeader = document.querySelector('.con_header');
        // content header
        if(conHeader && header.clientHeight - 30 < this.yOffset) { 
            conHeader.classList.add('h_sticky') 
        } else {
            conHeader.classList.remove('h_sticky')
        }
       
    

        
    }

}


export default ScrollAction;
