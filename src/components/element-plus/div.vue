<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup="deleteCom($event)" @click="handleComponent($event, `div-${count}`, style)"></div>
</template>

<script lang="ts">
import { 
    mouseDown,
    deleteCom,
    handleComponent
} from '@/utils/common'
export default {
    setup(props:any, context:any){
        let style:any = context.attrs.options.style;
        let count:number = context.attrs.options.count;

        return{
            style,count,
            mouseDown,
            deleteCom,
            handleComponent
        }
    }
}
</script>