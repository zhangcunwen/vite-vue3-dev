<template>
  <el-menu
    default-active="0-4"
    class="nav-menu"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div class="logo">Vite-Vue3</div>
    <template v-for="(route, i) in routes" :key={i}>
      <el-sub-menu v-show="route.children" :index="i+''">
        <template #title>
          <i :class="route.icon"></i>
          <span>{{route.name}}</span>
        </template>
        <el-menu-item
          v-for="(router, c) in route.children"
          :key={c}
          :index="i + '-' + c"
          @click="goRouter(router.path)"
        >
          <i :class="router.icon"></i>
          <template #title>{{router.name}}</template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-show="!route.children" @click="goRouter(route.path)" :index="i+''">
        <i :class="route.icon"></i>
        <template #title>{{route.name}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'NavMenu',
  computed: {
    ...mapGetters(['isCollapse', 'routes'])
  },
  setup() {
    const router = useRouter()
    const goRouter = (path) => {
      console.log(path)
      router.push(path)
    }
    const handleOpen = () => {

    }
    const handleClose = () => {

    }

    return {
      goRouter,
      handleOpen,
      handleClose
    }
  }
})
</script>
<style lang="scss" scoped>
.nav-menu {
  // width: 180px;
  border: none;
  .el-sub-menu__title {
    padding: 0 10px 0 20px;
  }
}
</style>
