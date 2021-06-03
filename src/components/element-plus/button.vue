<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup.delete="deleteCom($event)">
        <el-button>默认按钮</el-button>
    </div>
</template>

<script lang="ts">
import { mouseDown,deleteCom } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        return {
            style,
            mouseDown,
            deleteCom
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>