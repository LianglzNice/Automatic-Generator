<template>
    <div id="screen" class="screen" @drop="drop($event)" @dragover="allowDrop($event)" @click="handleScreen($event)" :style="{width: screenW + 'px', height: screenH + 'px'}">
        <component v-for="(item, index) in epComponentsList" :key="index" :is="item.component" :options="style"></component>
    </div>
</template>

<script lang="ts">
import { screenW, screenH } from '@/datas/header'
import { cName, epComponentsList } from '@/datas/screen'

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
        let style:any = {
            position: 'absolute',
            left: '',
            top: ''
        }

        let drop = (event:any):void => {
            event.preventDefault();

            epComponentsList.push(getComponent(cName.value));
            style['left'] = event.offsetX + 'px';
            style['top'] = event.offsetY + 'px';
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
            style,
            epComponentsList
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>