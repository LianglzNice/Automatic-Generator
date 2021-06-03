<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { mouseDown } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;
        let input = ref<number|string>('');

        return {
            style,
            input,
            mouseDown
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>