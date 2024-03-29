import Ui from './Ui.js';

class ScrollAction extends Ui {
    constructor() {
        super();
        
        this.yOffset = 0; // 총 y 값
        this.prevHeight = 0; // 지나온 값
        this.curNum = 0; //현재 섹션 n
        this.curSecYOffset = 0; // 현재 섹션 y값
        this.secChange = true; //새로운 섹션에서 true
        this.title = document.querySelector('.con_hader_cur');

        this.info = [
            {
                type: 'sticky',
                heightNum: 5,
                secHeight: 0,
                title: "제네시스 브랜드",
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
                    imageSequence: [0, 205, { start: 0, end: 0.9 }],
                    canvas_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    // msgH_scale_out: [1, 10, { start: 0, end: 0.2 }],
                    msgH_filter_out: [0, 15, { start: 0.02, end: 0.14 }],
                    msgH_opacity_out: [1, 0, { start: 0.07, end: 0.14 }],
                    msgH_transY_out: [0, -40, { start: 0, end: 0.1 }],
                    msgH_letter_out: [30, 0, { start: 0, end: 0.2 }],
                    msgA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                    msgA_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
                    msgA_transY_in: [40, 0, { start: 0.1, end: 0.2 }],
                    msgA_transY_out: [0, -40, { start: 0.3, end: 0.4 }],

                    msgB_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    msgB_opacity_out: [1, 0, { start: 0.7, end: 0.8 }],
                    msgB_transY_in: [40, 0, { start: 0.5, end: 0.6 }],
                    msgB_transY_out: [0, -40, { start: 0.7, end: 0.8 }],

                }
            },
            {
                type: 'sticky',
                heightNum: 2,
                title: "제네시스 브랜드",
                secHeight: 0,
                els: {
                    wrap: document.querySelector('#sec_1'),
                    msg_1: document.querySelector('#sec_1 .con_sticky.m0'),
                    msg_1_all: document.querySelectorAll('#sec_1 .con_sticky.m0 > span'),
                    vid: document.querySelector('#sec_1 .vid0'),
                },
                values: {
                    msg_1_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                    msg_1_transY_in: [-40, 0, { start: 0, end: 0.1 }],
                    msg_1_opacity_out: [1, 0, { start: 0.9, end: 1 }],
                    msg_1_transY_out: [0, -40, { start: 0.9, end: 1 }],
                }
            },
            {
                type: 'sticky',
                heightNum: 7,
                secHeight: 0,
                title: "디자인",
                els: {
                    wrap: document.querySelector('#sec_2'),
                    dimd: document.querySelector('#sec_2 .dimd_sticky'),
                    msgHa_0: document.querySelector('#sec_2 .m0'), 
                    msgHa_1: document.querySelector('#sec_2 .m1'), 
                    msgHa_2: document.querySelector('#sec_2 .m2'), 
                    msgHa_3: document.querySelector('#sec_2 .m3'), 
                    canvas: document.querySelector('#sec_2 #canvas_01'),
                    context: document.querySelector('#sec_2 #canvas_01').getContext('2d'),
                    imagesArr: [],
                    canvas_2: document.querySelector('#sec_2 #canvas_02'),
                    context_2: document.querySelector('#sec_2 #canvas_02').getContext('2d'),
                    imagesArr_2: [],
                },
                values: {
                    imageCount: 86,
                    imageSequence: [0, 85, { start: 0, end: 0.4 }],
                    imageCount_2: 187,
                    imageSequence_2: [0, 186, { start: 0.4, end: 0.95 }],
                    canvas_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                    canvas_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],

                    msgHa_0_filter_in: [10, 0, { start: 0, end: 0.1 }],
                    msgHa_0_filter_out: [0, 10, { start: 0.2, end: 0.3 }],

                    msgHa_0_opacity_in: [0, 1, { start: 0, end: 0.1 }],
                    msgHa_0_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
                    msgHa_0_transY_in: [40, 0, { start: 0.05, end: 0.1 }],
                    msgHa_0_transY_out: [0, -40, { start: 0.25, end: 0.35 }],

                    // 2번쨰 
                    msgHa_1_opacity_in: [0, 1, { start: 0.1, end: 0.15 }],
                    msgHa_1_opacity_out: [1, 0, { start: 0.2, end: 0.3 }],
                    msgHa_2_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                    msgHa_2_transY_in: [40, 0, { start: 0.5, end: 0.6 }],
                    msgHa_2_opacity_out: [1, 0, { start: 0.7, end: 0.75 }],
                    msgHa_2_transY_out: [0, -40, { start: 0.7, end: 0.75 }],
                    msgHa_3_opacity_in: [0, 1, { start: 0.7, end: 0.75 }],
                    msgHa_3_transY_in: [40, 0, { start: 0.7, end: 0.75 }],
                    msgHa_3_opacity_out: [1, 0, { start: 0.9, end: 0.95 }],
                    msgHa_3_transY_out: [0, -40, { start: 0.9, end: 0.95 }],
                    canvas_2_opacity_in: [0, 1, { start: 0.23, end: 0.35 }],
                    canvas_2_opacity_out: [1, 0, { start: 0.85, end: 0.95 }],

                }
            },
            {
                type: 'normal',
                heightNum: 5,
                secHeight: 0,
                title: "제네시스 테크놀로지",
                els: {
                    wrap: document.querySelector('#sec_3')
                }
            },
            {
                type: 'sticky',
                heightNum: 15,
                secHeight: 0,
                title: "제네시스 엔진",
                els: {
                    wrap: document.querySelector('#sec_4'),
                    canvas: document.querySelector('#sec_4 #canvas_01'),
                    context: document.querySelector('#sec_4 #canvas_01').getContext('2d'),
                    imagesArr: [],
                    canvas_1: document.querySelector('#sec_4 #canvas_02'),
                    context_1: document.querySelector('#sec_4 #canvas_02').getContext('2d'),
                    imagesArr_1: [],
                    canvas_2: document.querySelector('#sec_4 #canvas_03'),
                    context_2: document.querySelector('#sec_4 #canvas_03').getContext('2d'),
                    imagesArr_2: [],
                    canvas_3: document.querySelector('#sec_4 #canvas_04'),
                    context_3: document.querySelector('#sec_4 #canvas_04').getContext('2d'),
                    imagesArr_3: [],

                    msg_0: document.querySelector('#sec_4 .message.m0'),
                    msg_1: document.querySelector('#sec_4 .message.m1'),
                    msg_2: document.querySelector('#sec_4 .message.m2'),
                    msg_3: document.querySelector('#sec_4 .message.m3'),
                    msg_4: document.querySelector('#sec_4 .message.m4'),
                    msg_5: document.querySelector('#sec_4 .message.m5'),
                }, 
                values: { 
                    imageCount: 164,
                    imageSequence: [0, 163, { start: 0, end: 0.25 }],
                    canvas_opacity_in: [0, 1, { start: 0, end: 0.05 }],
                    canvas_opacity_out: [1, 0, { start: 0.2, end: 0.25 }],
                    msg_0_opacity_in: [0, 1, { start: 0, end: 0.01 }],
                    msg_0_opacity_out: [1, 0, { start: 0.02, end: 0.025 }],
                    msg_0_scale_out: [1, 10, { start: 0.02, end: 0.04 }],
                    msg_1_opacity_in: [0, 1, { start: 0.15, end: 0.17 }],
                    msg_1_transY_in: [50, 0, { start: 0.15, end: 0.17 }],
                    msg_1_opacity_out: [1, 0, { start: 0.24, end: 0.27 }],
                    msg_1_transY_out: [0, -50, { start: 0.24, end: 0.27 }],


                    imageCount_1: 33,
                    imageSequence_1: [0, 32, { start: 0.25, end: 0.45 }],
                    canvas_1_opacity_in: [0, 1, { start: 0.25, end: 0.3}],
                    canvas_1_opacity_out: [1, 0, { start: 0.4, end: 0.55 }],
                    msg_2_opacity_in: [0, 1, { start: 0.33, end: 0.35 }],
                    msg_2_transY_in: [50, 0, { start: 0.33, end: 0.35 }],
                    msg_2_opacity_out: [1, 0, { start: 0.4, end: 0.55 }],
                    msg_2_transY_out: [0, -50, { start: 0.4, end: 0.55 }],

                    imageCount_2: 88,
                    imageSequence_2: [0, 87, { start: 0.45, end: 0.7 }],
                    canvas_2_opacity_in: [0, 1, { start: 0.45, end: 0.5 }],
                    canvas_2_opacity_out: [1, 0, { start: 0.7, end: 0.75 }],
                    msg_3_opacity_in: [0, 1, { start: 0.55, end: 0.6 }],
                    msg_3_transY_in: [50, 0, { start: 0.55, end: 0.6 }],
                    msg_3_opacity_out: [1, 0, { start: 0.65, end: 0.75 }],
                    msg_3_transY_out: [0, -50, { start: 0.65, end: 0.75 }],

                    imageCount_3: 220,
                    imageSequence_3: [0, 219, { start: 0.75, end: 0.93 }],
                    canvas_3_opacity_in: [0, 1, { start: 0.75, end: 0.8 }],
                    canvas_3_opacity_out: [1, 0, { start: 0.95, end: 1 }],
                    msg_4_opacity_in: [0, 1, { start: 0.75, end: 0.8 }],
                    msg_4_transY_in: [50, 0, { start: 0.75, end: 0.8 }],
                    msg_4_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                    msg_4_transY_out: [0, -50, { start: 0.85, end: 0.9 }],
                    msg_5_opacity_in: [0, 1, { start: 0.88, end: 0.93 }],
                    msg_5_transX_in: [150, 0, { start: 0.88, end: 0.93 }],
                    msg_5_opacity_out: [1, 0, { start: 0.97, end: 1 }],
                    // msg_5_transX_out: [0, -100, { start: 0.97, end: 1 }],

                    
                }
            },
            {
                type: 'normal',
                heightNum: 5,
                secHeight: 0,
                title: "제네시스 모델",
                els: {
                    wrap: document.querySelector('#sec_5')
                }
            },
        ],

        window.addEventListener('load', this.init.bind(this));
        window.addEventListener('resize', this.setHeight.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
        // window.addEventListener('DOMContentLoaded', this.setHeight.bind(this));
    }
    

    init() {
        this.setHeight()
        //idx, src, fileStartNum, infoimgCount, arr, filetpye, iszero
        this.setImage(0, '../src/assets/images/product/s01/gene_s01_', 0, this.info[0].values.imageCount, this.info[0].els.imagesArr, 'png'); 
        this.setImage(2, '../src/assets/images/product/s03d1/gene_s03d_', 188, this.info[2].values.imageCount, this.info[2].els.imagesArr, 'png');
        this.setImage(2, '../src/assets/images/product/s03d2/gene_s03d_', 274, this.info[2].values.imageCount_2, this.info[2].els.imagesArr_2, 'png');
        this.setImage(4, '../src/assets/images/product/s03d3/gene_s04d_', 428, this.info[4].values.imageCount, this.info[4].els.imagesArr, 'jpg');
        this.setImage(4, '../src/assets/images/product/s03d4/gene_s04d_', 792, this.info[4].values.imageCount_1, this.info[4].els.imagesArr_1, 'jpg');
        this.setImage(4, '../src/assets/images/product/s03d5/gene_s04d_', 1372, this.info[4].values.imageCount_2, this.info[4].els.imagesArr_2, 'jpg', true);
        this.setImage(4, '../src/assets/images/product/s03d6/gene_s04d_', 1460, this.info[4].values.imageCount_3, this.info[4].els.imagesArr_3, 'jpg', true);
      
        this.info[0].els.context.drawImage(this.info[0].els.imagesArr[0], 0, 0)
        // this.info[2].els.context.drawImage(this.info[2].els.imagesArr[0], 0, 0)
    }

    ani() {
        const els = this.info[this.curNum].els;
        const values = this.info[this.curNum].values;
        let curSecRatio = this.curSecYOffset / this.info[this.curNum].secHeight;
        let sec1_toggle = false;
        // console.log('els?', els)

        switch(this.curNum) {
            case 0: 
                // console.log('0 ani')
                let sequence0 = Math.round(this.calc(values.imageSequence))
                els.context.drawImage(els.imagesArr[sequence0], 0, 0);
               
                // els.msgH.style.transform = `scale(${this.calc(values.msgH_scale_out)})`
                els.msgH.style.opacity = this.calc(values.msgH_opacity_out)
                els.msgH.style.filter = `blur(${this.calc(values.msgH_filter_out)}px)`;
                els.msgH.style.transform = `translateY(${this.calc(values.msgH_transY_out)}px)`;
                els.msgH.style.letterSpacing = `${this.calc(values.msgH_letter_out)}px`;
                els.canvas.style.opacity = this.calc(values.canvas_opacity_out);
                
                if(curSecRatio <= 0.25) {
                    els.msgA.style.opacity = this.calc(values.msgA_opacity_in)
                    els.msgA.style.transform = `translateY(${this.calc(values.msgA_transY_in)}px)`
                } else {
                    els.msgA.style.opacity = this.calc(values.msgA_opacity_out)
                    els.msgA.style.transform = `translateY(${this.calc(values.msgA_transY_out)}px)`
                }
                if(curSecRatio <= 0.65) {
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
                if(curSecRatio <= 0.5) {
                    els.msg_1.style.opacity = this.calc(values.msg_1_opacity_in)
                    els.msg_1.style.transform = `translateY(${this.calc(values.msg_1_transY_in)}px)`
                    els.vid.style.opacity = this.calc(values.msg_1_opacity_in)
                } else {
                    els.msg_1.style.opacity = this.calc(values.msg_1_opacity_out)
                    els.msg_1.style.transform = `translateY(${this.calc(values.msg_1_transY_out)}px)`
                    els.vid.style.opacity = this.calc(values.msg_1_opacity_out)
                }
                if(curSecRatio <= 0.19) {
                    // console.log('0 몇번출력?')
                    for(let i = 0; i < els.msg_1_all.length; i++) { els.msg_1_all[i].classList.remove('on') }
                    els.msg_1_all[0].classList.add('on')
                }
                if(curSecRatio >= 0.2 && curSecRatio <= 0.25) {
                    // console.log('1 몇번출력?')
                    for(let i = 0; i < els.msg_1_all.length; i++) { els.msg_1_all[i].classList.remove('on') }
                    els.msg_1_all[1].classList.add('on')
                }
                if(curSecRatio >= 0.4 && curSecRatio <= 0.45) {
                    // console.log('1 몇번출력?')
                    for(let i = 0; i < els.msg_1_all.length; i++) { els.msg_1_all[i].classList.remove('on') }
                    els.msg_1_all[2].classList.add('on')
                }
                if(curSecRatio >= 0.6 && curSecRatio <= 0.65) {
                    // console.log('1 몇번출력?')
                    for(let i = 0; i < els.msg_1_all.length; i++) { els.msg_1_all[i].classList.remove('on') }
                    els.msg_1_all[3].classList.add('on')
                }
                if(curSecRatio >= 0.8 && curSecRatio <= 0.85) {
                    // console.log('1 몇번출력?')
                    for(let i = 0; i < els.msg_1_all.length; i++) { els.msg_1_all[i].classList.remove('on') }
                    els.msg_1_all[4].classList.add('on')
                }
                return; 

            case 2: 
                // console.log('2 ani')
                // 첫번쨰 캔버스
                let sequence2 = Math.round(this.calc(values.imageSequence))
                els.context.drawImage(els.imagesArr[sequence2], 0, 0);
                els.canvas.style.opacity = this.calc(values.canvas_opacity_out)

                // 두번쨰 캔버스
                let sequence3 = Math.round(this.calc(values.imageSequence_2))
                els.context_2.drawImage(els.imagesArr_2[sequence3], 0, 0);

                if(curSecRatio <= 0.1) {
                    els.msgHa_0.style.filter = `blur(${this.calc(values.msgHa_0_filter_in)}px)`
                    els.canvas.style.opacity = this.calc(values.canvas_opacity_in)
                } 

                // txt 0
                if(curSecRatio <= 0.2) {
                    els.msgHa_0.style.opacity = this.calc(values.msgHa_0_opacity_in)
                    els.msgHa_0.style.transform = `translateY(${this.calc(values.msgHa_0_transY_in)}px)`
                    els.msgHa_1.style.opacity = this.calc(values.msgHa_1_opacity_in)
                } else {
                    els.msgHa_0.style.opacity = this.calc(values.msgHa_0_opacity_out)
                    els.msgHa_0.style.transform = `translateY(${this.calc(values.msgHa_0_transY_out)}px)`
                    els.msgHa_1.style.opacity = this.calc(values.msgHa_1_opacity_out)
                }

                // canvas
                if(curSecRatio <= 0.5) { 
                    // console.log(els.msgHa_1)
                    els.canvas_2.style.opacity = this.calc(values.canvas_2_opacity_in)
                } else {
                    els.canvas_2.style.opacity = this.calc(values.canvas_2_opacity_out)
                }
                
                // txt 1
                if(curSecRatio <= 0.65) { 
                    els.msgHa_2.style.opacity = this.calc(values.msgHa_2_opacity_in)
                    els.msgHa_2.style.transform = `translateY(${this.calc(values.msgHa_2_transY_in)}px)`
                } else {
                    els.msgHa_2.style.opacity = this.calc(values.msgHa_2_opacity_out)
                    els.msgHa_2.style.transform = `translateY(${this.calc(values.msgHa_2_transY_out)}px)`
                }

                 // txt 2
                 if(curSecRatio <= 0.85) { 
                    els.msgHa_3.style.opacity = this.calc(values.msgHa_3_opacity_in)
                    els.msgHa_3.style.transform = `translateY(${this.calc(values.msgHa_3_transY_in)}px)`
                } else {
                    els.msgHa_3.style.opacity = this.calc(values.msgHa_3_opacity_out)
                    els.msgHa_3.style.transform = `translateY(${this.calc(values.msgHa_3_transY_out)}px)`
                }

            
                return 

            case 3: 
                // console.log('3 ani')
                return 
            
            case 4: 
                // console.log('4 ani')
                // 첫번쨰 캔버스
                let sequence4 = Math.round(this.calc(values.imageSequence))
                els.context.drawImage(els.imagesArr[sequence4], 0, 0);
                
                // 두번쨰 캔버스
                let sequence5 = Math.round(this.calc(values.imageSequence_1))
                els.context_1.drawImage(els.imagesArr_1[sequence5], 0, 0);


                // 세번쨰 캔버스
                let sequence6 = Math.round(this.calc(values.imageSequence_2))
                els.context_2.drawImage(els.imagesArr_2[sequence6], 0, 0);

                // 네번쨰 캔버스
                let sequence7 = Math.round(this.calc(values.imageSequence_3))
                els.context_3.drawImage(els.imagesArr_3[sequence7], 0, 0);

                if(curSecRatio <= 0.01) {
                    els.msg_0.style.opacity = this.calc(values.msg_0_opacity_in)
                } else {
                    els.msg_0.style.opacity = this.calc(values.msg_0_opacity_out)
                    els.msg_0.style.transform = `scale(${this.calc(values.msg_0_scale_out)})`
                }
        
                if(curSecRatio <= 0.15) {
                    els.canvas.style.opacity = this.calc(values.canvas_opacity_in)
                } else {
                    els.canvas.style.opacity = this.calc(values.canvas_opacity_out)
                }

                if(curSecRatio <= 0.22) {
                    els.msg_1.style.opacity = this.calc(values.msg_1_opacity_in)
                    els.msg_1.style.transform = `translateY(${this.calc(values.msg_1_transY_in)}px)`
                } else {
                    els.msg_1.style.opacity = this.calc(values.msg_1_opacity_out)
                    els.msg_1.style.transform = `translateY(${this.calc(values.msg_1_transY_out)}px)`
                }


                if(curSecRatio <= 0.35) {
                    els.canvas_1.style.opacity = this.calc(values.canvas_1_opacity_in)
                    els.msg_2.style.opacity = this.calc(values.msg_2_opacity_in)
                    els.msg_2.style.transform = `translateY(${this.calc(values.msg_2_transY_in)}px)`
                } else {
                    els.canvas_1.style.opacity = this.calc(values.canvas_1_opacity_out)
                    els.msg_2.style.opacity = this.calc(values.msg_2_opacity_out)
                    els.msg_2.style.transform = `translateY(${this.calc(values.msg_2_transY_out)}px)`
                    
                }

                if(curSecRatio <= 0.6) {
                    els.canvas_2.style.opacity = this.calc(values.canvas_2_opacity_in)
                    els.msg_3.style.opacity = this.calc(values.msg_3_opacity_in)
                    els.msg_3.style.transform = `translateY(${this.calc(values.msg_3_transY_in)}px)`
                } else {
                    els.canvas_2.style.opacity = this.calc(values.canvas_2_opacity_out)
                    els.msg_3.style.opacity = this.calc(values.msg_3_opacity_out)
                    els.msg_3.style.transform = `translateY(${this.calc(values.msg_3_transY_out)}px)`
                }
                
                if(curSecRatio <= 0.85) {
                    els.canvas_3.style.opacity = this.calc(values.canvas_3_opacity_in)
                    els.msg_4.style.opacity = this.calc(values.msg_4_opacity_in)
                    els.msg_4.style.transform = `translateY(${this.calc(values.msg_4_transY_in)}px)`
                } else {
                    els.canvas_3.style.opacity = this.calc(values.canvas_3_opacity_out)
                    els.msg_4.style.opacity = this.calc(values.msg_4_opacity_out)
                    els.msg_4.style.transform = `translateY(${this.calc(values.msg_4_transY_out)}px)`
                }

                
                if(curSecRatio <= 0.96) {
                    els.msg_5.style.opacity = this.calc(values.msg_5_opacity_in)
                    els.msg_5.style.transform = `translateX(${this.calc(values.msg_5_transX_in)}px)`
                } else {
                    els.msg_5.style.opacity = this.calc(values.msg_5_opacity_out)
                    // els.msg_5.style.transform = `translateX(${this.calc(values.msg_5_transX_out)}px)`
                }
                
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
        this.title.innerHTML = this.info[this.curNum].title;
        let heightRatio = window.innerHeight / 1080;

        // canvas 설정
        this.info[0].els.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0.2})`
        this.info[2].els.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0.25})`
        this.info[2].els.canvas_2.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0})`
        this.info[4].els.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0})`
        this.info[4].els.canvas_1.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0})`
        this.info[4].els.canvas_2.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0})`
        this.info[4].els.canvas_3.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio - 0})`
    }

    handleScroll() {
        this.yOffset = window.pageYOffset;
        this.curSecYOffset = Math.abs(this.yOffset - this.prevHeight);
        // console.log( this.curSecYOffset )
        if(this.secChange === true ) this.sectionChange(); //해결. 섹션 변경될때 섹션 옵셋 0으로 초기화 
        this.scrollLoop();
    }

    sectionChange() {
        this.curSecYOffset = 0;
      
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
            this.title.innerHTML = this.info[this.curNum + 1].title;
            this.curNum++
        }
        if(this.yOffset < this.prevHeight) {
            this.secChange = true;
            if(this.curNum === 0) return;
            this.title.innerHTML = this.info[this.curNum - 1].title;
            this.curNum--
        }
        document.body.setAttribute('id', `show_sec_${this.curNum}`)

        if(this.secChange) return; //섹션이 변경될 때는 ani를 잠깐 실행 중지
        this.ani()
        this.conHaeder();
        
    }

    calc(values) {
        // 현재 섹션부터 시작, 끝값 계산
        let result = null;
        const ratio = this.curSecYOffset / this.info[this.curNum].secHeight;
        const curSecHeight = this.info[this.curNum].secHeight; //현재 섹션값
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
        } else {
            // part가 없을 시 
            result = ratio * (values[1] - values[0]) + values[0];
        }

        return result;
    }

    setImage(idx, src, startNum, imageCount, arr, fileType, noneZero) {
        let imgEl = null;
        for(let i = startNum; i < startNum + imageCount; i++) {
            imgEl = new Image();
            if(noneZero) {
                imgEl.src = `${src}${i}.${fileType}`
            }
            // 영상 내보내기 이름 설정 못해서 
            if(!noneZero && i <= 10) { 
                imgEl.src = `${src}000${i}.${fileType}` 
                // console.log('10 이하구간', i)
            }
            if(!noneZero && i >= 10 && i < 100) { 
                imgEl.src = `${src}00${i}.${fileType}` 
                // console.log('100 이하구간', i)
            }
            if(!noneZero && i >= 100 && i < 1000) { 
                imgEl.src = `${src}0${i}.${fileType}` 
                // console.log('1000 이하구간', i)
            }
            // imgEl.setAttribute('loading', 'lazy')
            // console.log(imgEl)
            arr.push(imgEl)
        }

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
