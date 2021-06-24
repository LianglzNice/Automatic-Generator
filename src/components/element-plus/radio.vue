<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `radio-${count}`, attributes)">
        <el-radio-group v-model="radio" v-bind="attributes">
            <component :is="attributes.shapeType" :border="attributes.border" :label="1">单选框 A</component>
            <component :is="attributes.shapeType" :border="attributes.border" :label="2">单选框 B</component>
        </el-radio-group>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
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
        let radio = ref<number>(1);
        
        return {
            radio,
            style,attributes,count,
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