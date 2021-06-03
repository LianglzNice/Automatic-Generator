<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup.delete="deleteCom($event)">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { mouseDown,deleteCom } from '@/utils/common'

export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;
        let radio = ref<string>('');
        
        return {
            radio,
            style,
            mouseDown,
            deleteCom
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/element-plus';
</style>