<template>
    <div class="screen" :style="{width: screenW + 'px', height: screenH + 'px'}"></div>
</template>

<script lang="ts">
import {
    screenW,
    screenH
} from '@/datas/header'

export default {
    setup(){
        return {
            screenW,screenH
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/style/screen.scss';
</style>