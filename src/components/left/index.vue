<template>
    <div class="left">
        <el-scrollbar height="100%">
            <ul>
                <li v-for="(item,index) in epList" :key="index">{{item.label}}</li>
            </ul>
        </el-scrollbar>
        <div class="arrow"></div>
    </div>
</template>
<script lang="ts">
import epList from '@/utils/element-plus-options';
export default {
    setup(){
        return{
            epList
        }
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/left.scss';
</style>