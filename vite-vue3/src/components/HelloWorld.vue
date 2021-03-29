<template>
  <h1>{{ msg }}</h1>
  <p @click="$store.commit('add')">{{$store.state.counter}}</p>

  <!-- 国际化 -->
  <form>
    <label>{{ t('language') }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="ja">ja</option>
    </select>
  </form>
  <p>{{ t('hello') }}</p>

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
import { defineProps, reactive, defineEmit, useContext, ref, getCurrentInstance, computed } from 'vue'
import { useI18n } from 'vue-i18n'

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

// // 获取组件实例
// const ins = getCurrentInstance()
//
// function useI18n() {
//   const locale = ref('en')
//   // 获取i18n资源
//   const i18n = ins.type.i18n
//
//   // 编写t函数，根据传入msg，传出对应的翻译
//   const t = msg => {
//     return computed(() => i18n[locale.value][msg]).value
//   }
//
//   return { locale, t }
// }

const { locale, t } = useI18n({
  inheritLocale: true
})
</script>

<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>

<style scoped>

</style>
