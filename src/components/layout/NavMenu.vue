<template>
  <el-menu
    class="nav-menu"
    :default-active="activeRouter"
    :collapse="isCollapse"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409eff"
  >
    <div class="logo" @click="goPretty">
      <img src="../../assets/logo/logo2.jfif" alt="">
      <span v-show="!isCollapse">Vue3</span>
    </div>
    <template v-for="(route, i) in routes" :key="i">
      <template v-if="!route.disable">
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
      activeRouter: router.currentRoute.value.path,
      goRouter(path) {
        router.push(path)
      },
      goPretty() {
        router.push('/')
      }
    })

    // onBeforeRouteUpdate((to) => {
    //   state.activeRouter = to.path
    // })

    return { ...toRefs(state) }
  }
})
</script>

<style lang="scss" scoped>
.nav-menu {
  border: none;
  .logo {
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
    span {
      margin-left: 8px;
    }
  }
}
</style>
