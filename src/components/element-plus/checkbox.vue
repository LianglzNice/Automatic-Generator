<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-checkbox-group v-model="checkList">
            <el-checkbox :label="1">复选框 A</el-checkbox>
            <el-checkbox :label="2">复选框 B</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script lang="ts">
import { reactive,toRefs } from 'vue'
import { mouseDown } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        interface list{
            checkList: number[]
        }
        let data = reactive<list>({
            checkList: [1]
        })
        return {
            style,
            ...toRefs(data),
            mouseDown
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>