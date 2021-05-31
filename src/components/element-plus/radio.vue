<template>
    <div :style="style">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup(props:any, context:any){
        let radio = ref<string>('');

        let {style} = context.attrs.options;
        
        return {
            radio,
            style
        }
    }
}
</script>