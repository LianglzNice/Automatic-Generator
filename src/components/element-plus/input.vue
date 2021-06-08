<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @click="handleComponent($event, 'input')">
        <el-input 
            v-bind="attributes"
            v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { 
    mouseDown,
    getComponentOptions,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = Object.assign({}, context.attrs.options.style);
        
        let input = ref<number|string>('');

        let attributes:any = getComponentOptions('button');

        return {
            style,attributes,
            input,
            mouseDown,
            handleComponent
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>