<template>
  <div class="pretty">
    <RootHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RootHeader from './PrettyHeader.vue'

export default defineComponent({
  name: 'Pretty',
  components: { RootHeader }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
