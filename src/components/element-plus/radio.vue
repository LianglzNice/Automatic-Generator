<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)">
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { taggetEPlus } from '@/datas/screen'
export default {
    setup(props:any, context:any){
        let radio = ref<string>('');

        let {style} = context.attrs.options;
        
        let mouseDown = (event:any):void => {
            for(let item of event.path){
                if(item.className === 'eplus'){
                    taggetEPlus.value = item;
                }
            }
        }
        return {
            radio,
            style,
            mouseDown
        }
    }
}
</script>