<template>
    <div class="outer_layer" id="layer">
        <el-scrollbar class="scrollbar">
            <div class="rule_x" ref="ruleX" @mousedown="getGuide($event, 'x')"></div>
            <div class="rule_y" ref="ruleY" @mousedown="getGuide($event, 'y')" :style="{ height : screenH > innerH ? screenH+'px' : innerH+'px'}"></div>
            <l-screen />
        </el-scrollbar>
    </div>
</template>

<script lang="ts">
import { ref, onMounted, watch } from 'vue'
import { screenW, screenH } from '@/datas/header'
import LScreen from './screen.vue'

export default {
    components:{
        LScreen
    },
    setup(){
        let ruleX = ref<any>(null),
            ruleY = ref<any>(null),
            innerH = ref<number|string>(window.innerHeight - 76),
            layerW = ref<number>(0);
        
        let timeout:any;

        onMounted(() => {
            //横标尺偷个懒，直接设置1920
            createEl(ruleX, 1920 | ruleX.value.offsetWidth, 'rule_lv1');
            createEl(ruleY, (() => screenH.value > innerH.value ? screenH.value : innerH.value)(), 'rule_lv1 rule_lv1_plus');

            layerW.value = (document.getElementById('layer') as any).offsetWidth;
            rulexToScreen();

            window.onresize = function(){
                innerH.value = window.innerHeight - 76;
            }

            document.onmousedown = ($event) => {
                //$event.preventDefault();
                let {target}:any = $event;

                if(target.className.indexOf("rule_guide") > -1){
                    target.setAttribute('tagget', 'true');
                }
            }
            document.onmousemove = ($event) => {
                $event.preventDefault();
                let dom:any = document.getElementsByClassName('rule_guide');
                
                for(let i=0; i<dom.length; i++){
                    if(dom[i].getAttribute('tagget') === 'true'){
                        dom[i].className.indexOf('rule_x_guide') > -1 ? dom[i].style.top = ($event.clientY - 60) + 'px' : dom[i].style.left = ($event.clientX - 200) + 'px';
                    }
                }
            }
            document.onmouseup = () => {
                let dom:any = document.getElementsByClassName('rule_guide');
                let layer:any = document.getElementById('layer'); 

                for(let i=0; i<dom.length; i++){
                    dom[i].setAttribute('tagget', 'false');
                    if(dom[i].className.indexOf('rule_x_guide') > -1){
                        parseInt(dom[i].style.top) < 16 ? layer.removeChild(dom[i]) : true;
                    }else{
                        parseInt(dom[i].style.left) < 16 ? layer.removeChild(dom[i]) : true;
                    }
                }
            }
        })

        //添加监听
        watch([screenW, screenH, innerH], () => {
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

            for(let i=0; i<len/50; i++){
                let lv1:HTMLUListElement = document.createElement('ul');
                lv1.className = cla;
                lv1.innerHTML = `<div class="rule_num">${i*50}</div>`;
                
                for(let j=0; j<9; j++){
                    let lv2:HTMLLIElement = document.createElement('li');
                    lv2.className = 'rule_lv2';
                    lv1.appendChild(lv2);
                }

                el.appendChild(lv1);
            }
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

            let layer:any = document.getElementById('layer');
            layer.appendChild(elLine);
        }

        return {
            ruleX,ruleY,
            screenW,screenH,
            innerH,
            getGuide
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>