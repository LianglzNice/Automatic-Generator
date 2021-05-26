<template>
  <h1>{{ msg }}</h1>
  <div>{{state.count}}</div>
  <div>{{state.val}}</div>
  <div>{{a}}</div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

let state = reactive({ count: 1, val: 'abc' })
setInterval(() => {
  state.count += 10;
}, 1000)


let artice = reactive({
  author: 'llz',
  age: 18
})

let fn = () => {
  return (state.count + state.val);
}

state.val = fn();
</script>

<script>
let str = {
  data(){
    return{
      obj:{
        b: 20,
        d: 30,
        f: 30
      }
    }
  },
  methods: {
    todo(){
      return 'sdfsdf'
    }
  },
}
export default {
  mixins: [str],
  data(){
    return{
      obj: {
        a: 1
      }
    }
  },
  mounted() {
    console.log(this.obj);
    console.log(this.todo());
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
