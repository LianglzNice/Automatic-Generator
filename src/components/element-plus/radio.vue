<template>
    <div>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    setup(){
        let radio = ref<string>('');

        return {
            radio
        }
    }
}
</script>