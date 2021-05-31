<template>
    <div :style="style">
        <el-button>默认按钮</el-button>
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