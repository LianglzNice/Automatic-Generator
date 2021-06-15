<template>
    <header>
        <ul>
            <li>
                画布大小
                <el-input v-model="screenW" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> -
                <el-input v-model="screenH" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> 
            </li>
        </ul>
        <el-button class="export" type="primary" size="small" plain @click="toExport">导出</el-button>
    </header>
</template>
<script lang="ts">
import {
    screenW,
    screenH
} from '@/datas/header'
import { epComponentsList } from '@/datas/screen'

export default {
    setup() {
        let toExport = () => {
            console.log(epComponentsList);
        }

        return {
            screenW,
            screenH,
            toExport
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/header.scss';
</style>