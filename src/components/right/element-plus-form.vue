<template>
    <el-form class="form" :label-position="'top'" label-width="80px" :model="formData">
        <p class="title">{{title}}</p>
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
            <el-input v-if="formData[item].type === 'input'" v-model="privateForm[item]">
                <template v-if="formData[item].unit" #append>{{formData[item].unit}}</template>
            </el-input>
            <!-- 颜色类型 -->
            <el-color-picker v-if="formData[item].type === 'color'" v-model="privateForm[item]"></el-color-picker>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { ref, reactive, toRefs, watch } from 'vue'
import { cType, cAttributes } from '@/datas/screen'
import epOptions from '@/utils/element-plus-options'

export default {
    setup(){
        let data = reactive<any>({
            formData: {},
            privateForm: {},
            listType: {
                ynList: [
                    { value: true, label: '是' },
                    { value: false, label: '否'}
                ],
                borderStyleList: [
                    { value: 'solid', label: '实线' },
                    { value: 'dotted', label: '圆点' },
                    { value: 'dashed', label: '短的方形虚线' },
                    { value: 'double', label: '双实线' },
                    { value: 'groove', label: '雕刻效果' },
                    { value: 'ridge', label: '浮雕效果' },
                    { value: 'inset', label: '陷入效果' },
                    { value: 'outset', label: '突出效果' }
                ],
                sizeList: [
                    { value: '', label: '默认' },
                    { value: 'medium', label: '中等' },
                    { value: 'small', label: '小型' },
                    { value: 'mini', label: '超小'}
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
                ],
                checkboxTypeList: [
                    { value: 'el-checkbox', label: '选框模式' },
                    { value: 'el-checkbox-button', label: '按钮模式'}
                ],
                radioTypeList: [
                    { value: 'el-radio', label: '选框模式' },
                    { value: 'el-radio-button', label: '按钮模式'}
                ]
            }
        })

        watch(cType, (val) => {
            data.privateForm = cAttributes.value;
            data.formData = getAttributes((val as any).match(/(\S*)-/)[1]);
        })

        let title = ref<string>('');

        let getAttributes = (name:string):any => {
            for(let item of epOptions){
                if(item.name === name){
                    title.value = item.label + '控件';
                    return item.attributes
                }
            }
        }

        return{
            title,
            ...toRefs(data)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/right.scss';
</style>