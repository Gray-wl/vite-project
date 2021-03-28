<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3 + Vite" @myclick="onmyclick" ref="hw" />-->
  <router-view></router-view>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import { ref } from 'vue'

const hw = ref(null)

const onmyclick = () => {
  console.log('myclick from helloworld')
  hw.value.someMethod()
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>

</style>
