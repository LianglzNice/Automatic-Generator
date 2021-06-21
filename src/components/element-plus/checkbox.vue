<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `checkbox-${count}`, attributes)">
        <el-checkbox-group v-model="checkList" v-bind="attributes">
            <component :is="attributes.checkoutType" :border="attributes.border" :label="1">复选框 A</component>
            <component :is="attributes.checkoutType" :border="attributes.border" :label="2">复选框 B</component>
            <component :is="attributes.checkoutType" :border="attributes.border" :label="3">复选框 C</component>
        </el-checkbox-group>
    </div>
</template>

<script lang="ts">
import { reactive,toRefs } from 'vue'
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

        interface list{
            checkList: number[]
        }
        let data = reactive<list>({
            checkList: [1]
        })

        return {
            style,attributes,count,
            ...toRefs(data),
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