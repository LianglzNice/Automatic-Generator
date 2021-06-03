<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script lang="ts">
import { mouseDown } from '@/utils/common'
import { reactive,toRefs } from 'vue';

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        interface tableData{
            date: string,
            name: string,
            address: string
        }
        interface list{
            tableData: tableData[]
        }
        let data = reactive<list>({
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }]
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