<template>
  <div>
    <el-button type="primary" @click="clickCss">CSS</el-button>
  </div>
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
