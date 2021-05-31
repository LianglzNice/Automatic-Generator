<template>
    <div>
        <el-button>默认按钮</el-button>
    </div>
</template>

<script lang="ts">
export default {
    setup(props, context){
        console.log(context.attrs.options);
    }
}
</script>

