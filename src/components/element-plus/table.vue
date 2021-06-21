<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `input-${count}`, attributes)">
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
import { reactive,toRefs } from 'vue';
import { 
    mouseDown,
    deleteCom,
    constMenu,
    handleComponent
} from '@/utils/common'

export default {
    setup(props:any, context:any){
        let style:any = context.attrs.options.style;
        let count:number = context.attrs.options.count;

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
            style,count,
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