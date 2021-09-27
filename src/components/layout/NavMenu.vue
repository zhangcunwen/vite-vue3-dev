<template>
  <el-menu
    class="nav-menu"
    :default-active="activeRouter"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409eff"
  >
    <div v-show="!isCollapse" class="logo">Vite-Vue3</div>
    <div v-show="isCollapse" class="logo">vue3</div>
    <template v-for="(route, i) in routes" :key="i">
      <el-sub-menu v-if="route.children" :index="route.path">
        <template #title>
          <i :class="route.icon"></i>
          <span>{{ route.name }}</span>
        </template>
        <el-menu-item
          v-for="(router, c) in route.children"
          :key="c"
          :index="router.path"
          @click="goRouter(router.path)"
        >
          <i :class="router.icon"></i>
          <template #title>{{ router.name }}</template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else @click="goRouter(route.path)" :index="route.path">
        <i :class="route.icon"></i>
        <template #title>{{ route.name }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { mapGetters } from 'vuex'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'

export default defineComponent({
  name: 'NavMenu',
  computed: {
    ...mapGetters(['isCollapse', 'routes'])
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      activeRouter: '/overview',
      goRouter(path) {
        router.push(path)
      }
    })
    onBeforeRouteUpdate((to) => {
      state.activeRouter = to.path
    })

    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
.nav-menu {
  border: none;
}
</style>
