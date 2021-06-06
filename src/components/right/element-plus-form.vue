<template>
    <el-form class="form" :label-position="'top'" label-width="80px" :model="formData">
        <el-form-item label="宽度">
            <el-input v-model="formData.width"><template #append>px</template></el-input>
        </el-form-item>
        <el-form-item label="高度">
            <el-input v-model="formData.height"><template #append>px</template></el-input>
        </el-form-item>
        <el-form-item label="透明度">
            <el-input v-model="formData.opacity"></el-input>
        </el-form-item>
    </el-form>
</template>
<script lang="ts">
import { reactive } from 'vue'
export default {
    setup(){
        interface form{
            width: number|string,
            height: number|string,
            opacity: number|string
        }
        let formData = reactive<form>({
            width: '',
            height: '',
            opacity: ''
        })

        return{
            formData
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/right.scss';
</style>