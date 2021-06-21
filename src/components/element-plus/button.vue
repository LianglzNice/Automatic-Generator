<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `button-${count}`, attributes)">
        <el-button
            v-bind="attributes"
        >{{attributes.value}}</el-button>
    </div>
</template>

<script lang="ts">
import { 
    mouseDown,
    deleteCom,
    constMenu,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style:any = context.attrs.options.style;
        let attributes:any = context.attrs.options.attributes;
        let count:number = context.attrs.options.count;

        return {
            style, attributes, count,
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