<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <!-- <el-link type="primary">主要链接</el-link> -->
    </div>
</template>

<script lang="ts">
import { mouseDown } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = context.attrs.options;

        return {
            style,
            mouseDown
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>