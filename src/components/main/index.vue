<template>
    <l-header />
    <div class="bottom">
        <l-left />
        <l-right />
        <l-screen />
    </div>
</template>
<script lang="ts">
//顶部、左、右、场景
import LHeader from '@/components/header/index.vue'
import LLeft from '@/components/left/index.vue'
import LRight from '@/components/right/index.vue'
import LScreen from '@/components/screen/index.vue'

export default {
    components: {LHeader, LLeft, LRight, LScreen},
    setup() {
        
    }
}
</script>
<style lang="scss" scoped>
.bottom{
    width: 100%;
    height: calc(100% - 60px);
    padding-top: 60px;
}
</style>