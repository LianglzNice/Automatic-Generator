<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup.delete="deleteCom($event)" @click="handleComponent($event, `button-${count}`, attributes)">
        <el-button
            v-bind="attributes"
        >{{attributes.value}}</el-button>
    </div>
</template>

<script lang="ts">
import { 
    mouseDown,
    deleteCom,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = Object.assign({}, context.attrs.options.style);
        let attributes:any = context.attrs.options.attributes;
        let count:number = context.attrs.options.count;

        return {
            style, attributes, count,
            mouseDown,
            deleteCom,
            handleComponent
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>