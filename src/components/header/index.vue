<template>
    <header>
        <ul>
            <li>
                画布大小
                <el-input v-model="screenW" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> -
                <el-input v-model="screenH" class="iptw" placeholder="请输入内容"><template #append>px</template></el-input> 
            </li>
        </ul>
    </header>
</template>
<script lang="ts">
import {
    screenW,
    screenH
} from '@/datas/header'

export default {
    setup() {
        return {
            screenW,
            screenH
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/header.scss';
</style>