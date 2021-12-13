<template>
  <div class="pretty">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './Header.vue'

export default defineComponent({
  name: 'Pretty',
  components: { Header }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
