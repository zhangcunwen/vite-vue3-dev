<template>
  <div class="pretty-header">
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
          path: '/layout',
          title: 'Layout'
        },
        {
          path: '/mall',
          title: 'Mall'
        },
        {
          path: '/interest',
          title: 'Interest'
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
  height: 60px;
  display: flex;
  justify-content: center;
  line-height: 60px;
  color: #fff;
  z-index: 99999;
  .nav-item {
    margin: 0 12px;
    cursor: pointer;
  }
  .nav-item.active span {
    color: $base-color;
    padding-bottom: 8px;
    border-bottom: 4px solid $base-color;
  }
}
</style>
