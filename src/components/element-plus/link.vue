<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)">
        <!-- <el-link type="primary">主要链接</el-link> -->
    </div>
</template>

<script lang="ts">
import { mouseDown } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = context.attrs.options.style;
        let count:number = context.attrs.options.count;

        return {
            style, count,
            mouseDown
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>