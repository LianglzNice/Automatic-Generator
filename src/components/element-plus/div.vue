<template>
    <div tabindex="0" class="eplus" :style="style" @mousedown="mouseDown($event, count, 'div')" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `div-${count}`, style)"></div>
</template>

<script lang="ts">
import { 
    mouseDown,
    deleteCom,
    constMenu,
    handleComponent,
} from '@/utils/common'
export default {
    setup(props:any, context:any){
        let style:any = context.attrs.options.style;
        let count:number = context.attrs.options.count;

        return{
            style,count,
            mouseDown,
            deleteCom,
            constMenu,
            handleComponent
        }
    }
}
</script>