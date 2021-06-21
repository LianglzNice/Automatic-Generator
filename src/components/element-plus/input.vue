<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `input-${count}`, attributes)">
        <el-input 
            v-bind="attributes"
            v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { 
    mouseDown,
    deleteCom,
    constMenu,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style:any = context.attrs.options.style;
        let attributes:any = context.attrs.options.attributes
        let count:number = context.attrs.options.count;

        let input = ref<number|string>('');

        return {
            style,attributes,count,
            input,
            mouseDown,
            deleteCom,
            constMenu,
            handleComponent
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>