<template>
    <el-form class="form" :label-position="'top'" label-width="80px" :model="formData">
        <el-form-item v-for="(item, index) in formKeys" :key="index" :label="formData[item].label">
            <el-input v-model="formData.width"><template #append>px</template></el-input>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { reactive, toRefs, watch } from 'vue'
import { cType } from '@/datas/screen'
import epOptions from '@/utils/element-plus-options'

export default {
    setup(){
        let data = reactive<any>({
            formData: {},
            formKeys: []
        })

        watch(cType, (val) => {
            data.formData = getAttributes(val);
            data.formKeys = Object.keys(getAttributes(val));
        })

        let getAttributes = (name:string):any => {
            for(let item of epOptions){
                if(item.name === name){
                    return item.attributes
                }
            }
        }

        return{
            ...toRefs(data)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/right.scss';
</style>