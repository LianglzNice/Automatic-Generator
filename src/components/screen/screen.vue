<template>
    <div id="screen" class="screen" @drop="drop($event)" @dragover="allowDrop($event)" @click="handleScreen($event)" :style="{width: screenW + 'px', height: screenH + 'px'}">
        <component v-for="(item, index) in epComponents" :key="index" :is="item.component" :options="options"></component>
    </div>
</template>

<script lang="ts">
import { reactive, toRefs} from 'vue'
import { screenW, screenH } from '@/datas/header'
import { cName } from '@/datas/screen'
import cmOptions from '@/datas/options'

import { recoveryEplus } from '@/utils/common'
import epOptions from '@/utils/element-plus-options'


export default {
    components: (():any => {
        let obj:any = {};
        for(let item of epOptions){
            try{
                obj[item.alias] = require(`@/components/element-plus/${item.name}.vue`).default;
            }catch(err){
                obj[item.alias] = {};
            }
        }
        return obj
    })(),
    setup(){
        let data = reactive<any>({
            epComponents: []
        });

        let options:any = Object.assign(new Object(), cmOptions);

        let drop = (event:any):void => {
            event.preventDefault();

            data.epComponents.push(getComponent(cName.value));
            options.style['left'] = event.offsetX + 'px';
            options.style['top'] = event.offsetY + 'px';
        }
        let allowDrop = (event:any):void => {
            event.preventDefault();
        }
        let handleScreen = (event:any):void => {
            for(let item of event.path){
                if(item.className === 'eplus' || item.className === 'eplus active'){
                    return;
                }
            }
            recoveryEplus(['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']);
        }
        let getComponent = (name:string):any => {
            for(let item of epOptions){
                if(item.name === name){
                    return item
                }
            }
        }
        return {
            screenW,screenH,
            drop,allowDrop,handleScreen,
            options,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>