<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @click="handleComponent($event, `radio-${count}`, attributes)">
        <el-radio-group v-model="radio" v-bind="attributes">
            <component :is="attributes.radioType" :border="attributes.border" :label="1">单选框 A</component>
            <component :is="attributes.radioType" :border="attributes.border" :label="2">单选框 B</component>
        </el-radio-group>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { 
    mouseDown,
    deleteCom,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style = context.attrs.options.style;
        let attributes:any = context.attrs.options.attributes;
        let count:number = context.attrs.options.count;
        let radio = ref<number>(1);
        
        return {
            radio,
            style,attributes,count,
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