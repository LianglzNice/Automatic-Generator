<template>
    <el-form class="form" :label-position="'top'" label-width="80px" :model="formData">
        <el-form-item v-for="(item, index) in Object.keys(formData)" :key="index" :label="formData[item].label">
            <!-- 下拉类型 -->
            <el-select v-if="formData[item].type === 'select'" v-model="privateForm[item]" placeholder="请选择">
                <el-option v-for="item in listType[formData[item].list]" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <!-- 单选类型 -->
            <el-radio-group v-if="formData[item].type === 'radio'" v-model="privateForm[item]">
                <el-radio v-for="item in listType[formData[item].list]" :key="item.label" :label="item.value">{{item.label}}</el-radio>
            </el-radio-group>
            <!-- 输入框类型 -->
            <el-input v-if="formData[item].type === 'input'" v-model="privateForm[item]"></el-input>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { reactive, toRefs, watch } from 'vue'
import { cType, cAttributes } from '@/datas/screen'
import epOptions from '@/utils/element-plus-options'

export default {
    setup(){
        let data = reactive<any>({
            formData: {},
            privateForm: {},
            listType: {
                sizeList: [
                    { value: '', label: '默认' },
                    { value: 'medium', label: '中等' },
                    { value: 'small', label: '小型' },
                    { value: 'mini', label: '超小'}
                ],
                ynList: [
                    { value: true, label: '是' },
                    { value: false, label: '否'}
                ],
                buttonTypeList: [
                    { value: '', label: '默认' },
                    { value: 'primary', label: '主要' },
                    { value: 'success', label: '成功' },
                    { value: 'info', label: '信息' },
                    { value: 'warning', label: '警告' },
                    { value: 'danger', label: '危险'}
                ],
                inputTypeList: [
                    { value: 'text', label: '文本' },
                    { value: 'textarea', label: '文本域' },
                ]
            }
        })

        watch(cType, (val) => {
            data.privateForm = cAttributes.value;
            data.formData = getAttributes((val as any).match(/(\S*)-/)[1]);
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