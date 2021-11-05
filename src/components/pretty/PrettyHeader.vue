<template>
  <div class="pretty-header" @click="goLayout">header</div>
</template>

<script setup>
// import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goLayout = () => {
  router.push('/layout')
}
</script>

<style lang="scss">
.pretty-header {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background: #333;
  opacity: 0.8;
  cursor: pointer;
  z-index: 99999;
}
</style>
