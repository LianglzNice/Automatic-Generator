<template>
    <div id="screen" class="screen" v-if="refreshScreen" @drop="drop($event)" @dragover="allowDrop($event)" @click="handleScreen($event)" :style="{width: screenW + 'px', height: screenH + 'px'}">
        <component v-for="(item, index) in epComponentsList" :key="index" :is="item.component" :options="item"></component>
    </div>
    <!-- 右键菜单 -->
    <ul id="menu" class="menu">
        <li @click="adjustZIndex(1)">上移</li>
        <li @click="adjustZIndex(-1)">下移</li>
        <li @click="deleteComponent">删除</li>
    </ul>
</template>

<script lang="ts">
import { ref } from 'vue'
import { screenW, screenH } from '@/datas/header'
import { cName, cCount, epComponentsList } from '@/datas/screen'

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
        let refreshScreen = ref<boolean>(true);
        let count:number = 0;

        let drop = (event:any):void => {
            event.preventDefault();

            let item:any = Object.assign({}, getComponent(cName.value));
            let attributes:any = getAttributes(item.attributes);

            item.attributes = attributes;
            item.style['left'] = event.offsetX + 'px';
            item.style['top'] = event.offsetY + 'px';
            count ++;
            item.count = count;
            //必须使用 JSON.parse(JSON.stringify(item)) 方式，否则每个item之间都会相互影响
            epComponentsList.push(JSON.parse(JSON.stringify(item)));
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
                    return item;
                }
            }
        }
        let getAttributes = (attributes: any):any => {
            let obj:any = {};
            for(let item in attributes){
                obj[item] = attributes[item].value;
            }
            return obj;
        }
        let deleteComponent = async ():Promise<void> => {
            refreshScreen.value = false;
            await epComponentsList.splice(cCount.value, 1);
            refreshScreen.value = true;
        }
        let adjustZIndex = (count:number):void => {
            epComponentsList[cCount.value].style['z-index'] += count;
        }
        return {
            screenW,screenH,refreshScreen,
            drop,allowDrop,handleScreen,
            epComponentsList,
            deleteComponent,
            adjustZIndex
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>