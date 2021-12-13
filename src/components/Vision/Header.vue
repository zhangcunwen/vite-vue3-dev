<template>
  <div class="pretty-header">
    <div class="nav-item" @click="goRouter('/layout')">
      <el-image src="src/assets/logo/logo3.jfif" fill="contain"></el-image>
    </div>
    <div
      :class="['nav-item', {active: activeRouter === item.path}]"
      v-for="item in nav"
      :key="item.title"
      @click="goRouter(item.path)"
    >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const data = reactive({
      activeRouter: router.currentRoute.value.path,
      nav: [
        {
          path: '/vision/mall',
          title: 'Mall'
        },
        {
          path: '/vision/interest',
          title: 'Interest'
        },
        {
          path: '/vision/hello-vue',
          title: 'Vue'
        }
      ],
      goRouter(path) {
        router.push(path)
        data.activeRouter = path
      }
    })
    return { ...toRefs(data) }
  }
})
</script>

<style lang="scss">
.pretty-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: $header-height;
  display: flex;
  justify-content: center;
  line-height: $header-height;
  // color: #fff;
  // background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  .nav-item {
    margin: 0 12px;
    cursor: pointer;
    img {
      width: 26px;
      height: 26px;
      margin-top: 12px;
      border-radius: 2px;
    }
    span {
      font-weight: 600;
      background-image: linear-gradient(180deg, #fff 10%, $base-color);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }
  }
  .nav-item.active span {
    // color: $base-color;
    padding-bottom: 6px;
    border-bottom: 3px solid $base-color;
  }
}
</style>
