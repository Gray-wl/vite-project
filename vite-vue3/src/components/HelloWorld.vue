<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">{{$store.state.counter}}</p>
  <comp></comp>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <el-input />
  <el-button @click="onClick">emit</el-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
// 1、直接导入组件
import Comp from '@/components/Comp.vue'
import { defineProps, reactive, defineEmit, useContext } from 'vue'

// 2、属性定义
const props = defineProps({
  msg: String
})

console.log(props)

// 3、获取上下文
const ctx = useContext()
console.log(ctx)
ctx.expose({
  someMethod() {
    console.log('some message form HelloWorld')
  }
})

// 4、定义事件
const emit = defineEmit(['myclick'])

const state = reactive({ count: 0 })

const onClick = () => {
  // emit('myclick')
  ctx.emit('myclick')
}

// 请求mock api
fetch('/api/getUsers').then(res => res.json()).then(data => {
  console.log(data)
})
</script>

<style scoped>

</style>
