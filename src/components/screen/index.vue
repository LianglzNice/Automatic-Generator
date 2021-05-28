<template>
    <div class="outer_layer">
        <div class="rule_x" ref="ruleX"></div>
        <div class="rule_y" ref="ruleY"></div>
        <div class="screen" :style="{width: screenW + 'px', height: screenH + 'px'}"> </div>
    </div>
</template>

<script lang="ts">
import {
    screenW,
    screenH
} from '@/datas/header'
import { ref, onMounted, nextTick } from 'vue'

export default {
    setup(){
        let ruleX = ref<any>(null),
            ruleY = ref<any>(null);
        onMounted(() => {
            
        })

        nextTick(() => {
            createEl(ruleX, ruleX.value.offsetWidth, 'rule_lv1');
            createEl(ruleY, ruleY.value.offsetHeight, 'rule_lv1 rule_lv1_plus');
        })

        let createEl = (ele:any, len:number, cla:string):any => {
            let el = ele.value;
            for(let i=0; i<len/50-1; i++){
                let lv1 = document.createElement('ul');
                lv1.className = cla;
                lv1.innerHTML = `<div class="rule_num">${i*50}</div>`;
                
                for(let j=0; j<9; j++){
                    let lv2 = document.createElement('li');
                    lv2.className = 'rule_lv2';
                    lv1.appendChild(lv2);
                }

                el.appendChild(lv1);
            }
        }

        return {
            ruleX,ruleY,
            screenW,screenH
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>