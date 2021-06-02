<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-button>默认按钮</el-button>
    </div>
</template>

<script lang="ts">
import { mouseDown } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        return {
            style,
            mouseDown
        }
    }
}
</script>