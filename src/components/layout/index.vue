<template>
  <el-container class="layout">
    <!-- <el-aside width="180px">
      <div class="logo">Vite-Vue3</div>
    </el-aside> -->
    <NavMenu />
    <el-container class="container">
      <el-header><Header /></el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue'
import NavMenu from './NavMenu.vue'
import Header from './Header.vue'

export default defineComponent({
  name: 'Layout',
  components: { NavMenu, Header }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
