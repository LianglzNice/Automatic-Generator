<template>
    <div class="outer_layer" id="layer">
        <el-scrollbar ref="scrollbar" class="scrollbar" @scroll="getScroll">
            <div class="rule_x" ref="ruleX" @mousedown="getGuide($event, 'x')"></div>
            <div class="rule_y" ref="ruleY" @mousedown="getGuide($event, 'y')" :style="{ height : screenH > innerH ? screenH+'px' : innerH+'px'}"></div>
            <l-screen />
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'
import { screenW, screenH } from '@/datas/header'
import { scrollTop, cCount, taggetGuide, taggetEPlus, taggetShape, epComponentsList } from '@/datas/screen'
import LScreen from './screen.vue'

export default {
    components:{
        LScreen
    },
    setup(){
        let ruleX = ref<any>(null),
            ruleY = ref<any>(null),
            scrollbar = ref<any>(null),
            innerH = ref<number|string>(window.innerHeight - 76),
            layerW = ref<number>(0);
            
        let timeout:any;
        let isGetLine:boolean = true;
        let xLine:any;
        let yLine:any;

        onMounted(() => {
            //横标尺偷个懒，直接设置1920
            createEl(ruleX, 1920 | ruleX.value.offsetWidth, 'rule_lv1');
            createEl(ruleY, (() => screenH.value > innerH.value ? screenH.value : innerH.value)(), 'rule_lv1 rule_lv1_plus');

            layerW.value = (document.getElementById('layer') as any).offsetWidth;
            rulexToScreen();

            window.onresize = () => {
                innerH.value = window.innerHeight - 76;
            }
            
            document.onmousemove = (event:any) => {
                if(taggetGuide.value){
                    taggetGuide.value.className.indexOf('rule_x_guide') > -1 ? taggetGuide.value.style.top = (event.clientY - 60) + 'px' : taggetGuide.value.style.left = (event.clientX - 200) + 'px';
                }

                if(taggetEPlus.target){
                    let screen:any = document.getElementById('screen');
                    epComponentsList[cCount.value].style.top = (event.clientY + scrollTop.value - taggetEPlus.y - 76) + 'px';
                    epComponentsList[cCount.value].style.left = (event.clientX - screen.offsetLeft - taggetEPlus.x - 200) + 'px';
                    toAdsorb();
                }

                if(taggetShape.target){
                    console.log(taggetShape);
                    const screen:any = document.getElementById('screen');
                    const name:any = taggetShape.target.getAttribute('name');

                    //const w:number = taggetEPlus.target.offsetWidth;
                    //const h:number = taggetEPlus.target.offsetHeight;

                    const arr:any[] = name.split('_');
                    for(const item of arr){
                        switch(item){
                            case 'left':
                                epComponentsList[cCount.value].style.width = (taggetShape.r - (event.clientX - screen.offsetLeft - 200)) + 'px';
                                epComponentsList[cCount.value].style.right = taggetShape.r + 'px';
                                epComponentsList[cCount.value].style.top = taggetShape.t + 'px';
                                epComponentsList[cCount.value].style.bottom = taggetShape.b + 'px';
                                break;
                            case 'top':
                                epComponentsList[cCount.value].style.height = (taggetShape.b - (event.clientY + scrollTop.value - 76)) + 'px';
                                epComponentsList[cCount.value].style.bottom = taggetShape.b + 'px';
                                epComponentsList[cCount.value].style.right = taggetShape.r + 'px';
                                epComponentsList[cCount.value].style.left = taggetShape.l + 'px';
                                break;
                            case 'right':
                                epComponentsList[cCount.value].style.width = ((event.clientX - screen.offsetLeft - 200) - taggetShape.l) + 'px';
                                epComponentsList[cCount.value].style.top = taggetShape.t + 'px';
                                epComponentsList[cCount.value].style.left = taggetShape.l + 'px';
                                epComponentsList[cCount.value].style.bottom = taggetShape.b + 'px';
                                break;
                            case 'bottom':
                                epComponentsList[cCount.value].style.height = ((event.clientY + scrollTop.value - 76) - taggetShape.t) + 'px';
                                epComponentsList[cCount.value].style.top = taggetShape.t + 'px';
                                epComponentsList[cCount.value].style.left = taggetShape.l + 'px';
                                epComponentsList[cCount.value].style.right = taggetShape.r + 'px';
                                console.log(epComponentsList[cCount.value].style.bottom);
                                break;
                            default: break;
                        }
                    }
                }
            }

            document.onmouseup = () => {
                let dom:any = taggetGuide.value; // || taggetEPlus.target
                let layer:any = document.getElementById('layer');

                if(dom && (parseInt(dom.style.top) < 16 || parseInt(dom.style.left) < 16)){
                    layer.removeChild(dom);
                }

                taggetGuide.value = null;
                taggetShape.target = null;
                taggetEPlus.target = null;
            }
        })

        //添加监听
        watch([screenW, screenH, innerH], () => {
            if(screenW.value > layerW.value) screenW.value = layerW.value - 32;
            changeRuleHeight();
            rulexToScreen();
        })

        //x标尺0坐标和screen的左边对其
        let rulexToScreen = ():void => {
            let num:number = (layerW.value - screenW.value) / 2;
            ruleX.value.style.paddingLeft = num + 'px';
        }

        //改变标尺的高度
        let changeRuleHeight = ():void => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                createEl(ruleY, (() => screenH.value > innerH.value ? screenH.value : innerH.value)() , 'rule_lv1 rule_lv1_plus');
            }, 500)
        }

        //创建标尺刻度
        let createEl = (ele:any, len:any, cla:string):void => {
            let el:HTMLDivElement = ele.value;
            el.innerHTML = '';
            
            let frag1:DocumentFragment = document.createDocumentFragment();
            for(let i=0; i<len/50; i++){
                let lv1:HTMLUListElement = document.createElement('ul');
                lv1.className = cla;
                lv1.innerHTML = `<div class="rule_num">${i*50}</div>`;
                
                let frag2:DocumentFragment = document.createDocumentFragment();
                for(let j=0; j<9; j++){
                    let lv2:HTMLLIElement = document.createElement('li');
                    lv2.className = 'rule_lv2';
                    frag2.appendChild(lv2);
                }
                
                lv1.appendChild(frag2);
                frag1.appendChild(lv1);
            }

            el.appendChild(frag1);
        }

        let getGuide = (event:any, type:string):void => {
            event.preventDefault();

            let elLine:HTMLDivElement = document.createElement('div');

            if(type === 'x'){
                elLine.className = 'rule_guide rule_x_guide';
                elLine.style.top = (event.clientY - 40) + 'px';
            }else if(type === 'y'){
                elLine.className = 'rule_guide rule_y_guide';
                elLine.style.left = (event.clientX - 180) + 'px';
            }
            elLine.onmousedown = (event:any):void => {
                taggetGuide.value = event.target;
            }

            let layer:any = document.getElementById('layer');
            layer.appendChild(elLine);
        }

        let getScroll = () => {
            scrollTop.value = scrollbar.value.wrap.scrollTop;
        }

        let toAdsorb = () => {
            let {left, top}:any = epComponentsList[cCount.value].style;
            left = parseInt(left);
            top = parseInt(top);
            let right:number = left + taggetEPlus.target.offsetWidth;
            let bottom:number = top + taggetEPlus.target.offsetHeight;
            
            let num:number = (layerW.value - screenW.value) / 2;

            if(isGetLine){
                xLine = document.getElementsByClassName('rule_x_guide');
                yLine = document.getElementsByClassName('rule_y_guide');
                isGetLine = false;
                setTimeout(() => {
                    isGetLine = true;
                }, 1000)
            }

            for(let item of xLine){
                let xl:any = document.defaultView?.getComputedStyle(item,null).top;
                xl = parseInt(xl);
                Math.abs(top + 16 - parseInt(xl)) < 6 ? epComponentsList[cCount.value].style.top = (xl - 16) + 'px'  : true;
                Math.abs(bottom + 16 - parseInt(xl)) < 6 ? epComponentsList[cCount.value].style.top = (xl - 16 - taggetEPlus.target.offsetHeight) + 'px' : true;
            }

            for(let item of yLine){
                let yl:any = document.defaultView?.getComputedStyle(item, null).left;
                yl = parseInt(yl);
                Math.abs(left + num - yl) < 6 ? epComponentsList[cCount.value].style.left = (yl - num) + 'px' : true;
                Math.abs(right + num - yl) < 6 ? epComponentsList[cCount.value].style.left = (yl - num - taggetEPlus.target.offsetWidth) + 'px' : true;
            }
        }

        return {
            ruleX,ruleY,scrollbar,
            screenW,screenH,
            innerH,scrollTop,
            getGuide,getScroll
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>