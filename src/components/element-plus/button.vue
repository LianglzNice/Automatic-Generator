<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup.delete="deleteCom($event)" @click="handleComponent($event, 'button')">
        <el-button
            v-bind="attributes"
        >默认按钮</el-button>
    </div>
</template>

<script lang="ts">
import { 
    mouseDown,
    deleteCom,
    handleComponent,
    getComponentOptions 
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = Object.assign({}, context.attrs.options.style);
        
        let attributes:any = getComponentOptions('button');

        return {
            style, attributes,
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