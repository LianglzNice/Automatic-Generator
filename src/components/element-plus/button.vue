<template>
    <div class="eplus" :style="style" @mousedown="mouseDown($event)" @keyup.delete="deleteCom($event)" @click="handleComponent($event, 'button')">
        <el-button
            v-bind="attributes"
        >默认按钮</el-button>
    </div>
</template>

<script lang="ts">
import { mouseDown,deleteCom,handleComponent } from '@/utils/common'
import epOptions from '@/utils/element-plus-options'

export default {
    setup(props:any, context:any){
        let style = context.attrs.options;
        
        let getComponentOptions = (name: string):any => {
            let attributes:any, obj:any = {};
            for(let item of epOptions){
                if(item.name === name){
                    attributes = item.attributes;
                    break;
                }
            }
            for(let item in attributes){
                obj[item] = attributes[item].value;
                console.log(obj);
            }
            return obj;
        }
        let attributes:any = getComponentOptions('button');

        return {
            style, attributes,
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