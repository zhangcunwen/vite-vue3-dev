<template>
  <div class="box"></div>
  <div class="box1">
    <el-button class="btn" type="primary" @click="clickCss">CSS</el-button>
  </div>
  <div class="box2"></div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Css',
  setup() {
    const router = useRouter()
    const cssData = reactive({
      clickCss() {
        router.push('/overview')
      }
    })

    return {
      ...toRefs(cssData)
    }
  }
})
</script>

<style lang="scss">
  .box,.box1,.box2 {
    height: 400px;
    background: #ccc;
  }
  .box1 {
    background: #aaa;
  }
  .box2 {
    background: #666;
  }
  .btn {
    position: sticky;
    top: 50px;
  }
</style>
