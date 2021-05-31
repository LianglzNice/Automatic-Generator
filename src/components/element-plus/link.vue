<template>
    <div :style="style">
        <el-link type="primary">主要链接</el-link>
    </div>
</template>

<script lang="ts">
export default {
    setup(props:any, context:any){
        let {style} = context.attrs.options;

        return {
            style
        }
    }
}
</script>