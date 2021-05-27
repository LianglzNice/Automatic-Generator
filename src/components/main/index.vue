<template>
    <l-header />
    <l-left />
    <l-right />
    <l-screen />
</template>
<script>
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

</style>