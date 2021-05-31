<template>
    <div class="left">
        <el-scrollbar height="100%">
            <ul>
                <li v-for="(item,index) in epList" :key="index" draggable="true" @dragstart="dragStart($event, item.name)">{{item.label}}</li>
            </ul>
        </el-scrollbar>
        <div class="arrow"></div>
    </div>
</template>
<script lang="ts">
import epList from '@/utils/element-plus-options';
import { cName } from '@/datas/screen'
export default {
    setup(){
        let dragStart = (event:any, name:string):void => {
            //event.dataTransfer.setData(name, event.target.id);
            cName.value = name;
        }

        return{
            epList,
            dragStart,
            cName
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/left.scss';
</style>