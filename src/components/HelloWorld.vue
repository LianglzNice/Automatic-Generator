<template>
  <h1>{{ msg }}</h1>
  <div>{{state.count}}</div>
  <div>{{state.val}}</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 1, val: 'abc' })
state.count += 10;

let fn = () => {
  return (state.count + state.val);
}

state.val = fn();
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
