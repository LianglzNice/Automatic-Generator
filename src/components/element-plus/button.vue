<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-button>默认按钮</el-button>
    </div>
</template>

<script lang="ts">
import { taggetEPlus } from '@/datas/screen'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        let mouseDown = (event:any):void => {
            taggetEPlus.value = event.target.offsetParent;
        }
        return {
            style,
            mouseDown
        }
    }
}
</script>