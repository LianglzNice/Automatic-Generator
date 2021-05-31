<template>
    <div class="screen" @drop="drop($event)" @dragover="allowDrop($event)" :style="{width: screenW + 'px', height: screenH + 'px'}">
        <component v-for="(item, index) in epComponents" :key="index" :is="item.component" :options="{abc: 123456}"></component>
    </div>
</template>

<script lang="ts">
import {reactive, toRefs} from 'vue'
import { screenW, screenH } from '@/datas/header'
import { cName } from '@/datas/screen'
import epOptions from '@/utils/element-plus-options'

export default {
    components: (():any => {
        let obj:any = {};
        for(let item of epOptions){
            try{
                obj[item.alias] = require(`@/components/element-plus/${item.name}.vue`).default;
            }catch(err){
                obj[item.alias] = {};
                console.log(err);
            }
        }
        return obj
    })(),
    setup(){
        let data = reactive<any>({
            epComponents: []
        });

        let drop = (event:any):void => {
            event.preventDefault();

            data.epComponents.push(getComponent(cName.value));
        }
        let allowDrop = (event:any):void => {
            event.preventDefault();
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
            drop,allowDrop,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>