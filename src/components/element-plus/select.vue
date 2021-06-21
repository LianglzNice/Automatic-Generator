<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event, count)" @keyup="deleteCom($event)" @contextmenu="constMenu($event)" @click="handleComponent($event, `input-${count}`, attributes)">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script lang="ts">
import { reactive,ref,toRefs } from 'vue';
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

        let value = ref<number>(1);

        interface item{
            value: number,
            label: string
        }
        interface list{
            options: item[]
        }
        let data = reactive<list>({
            options: [{
                value: 1,
                label: '黄金糕'
            }, {
                value: 2,
                label: '双皮奶'
            }, {
                value: 3,
                label: '蚵仔煎'
            }]
        })

        return {
            style,count,
            value,
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