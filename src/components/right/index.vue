<template>
    <div class="right">
        <l-epform />
        <div class="arrow"></div>
    </div>
</template>
<script lang="ts">
import LEpform from './element-plus-form.vue' 
export default {
    components: {
        LEpform
    }
}
</script>
<style lang="scss" scoped>
    @import '@/style/right.scss';
</style>