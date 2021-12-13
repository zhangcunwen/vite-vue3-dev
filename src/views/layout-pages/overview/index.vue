<template>
  <div>
    <el-button type="primary" @click="clickOverview">Overview</el-button>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Overview',
  setup() {
    const router = useRouter()

    const overviewData = reactive({
      clickOverview() {
        router.push('/css')
      }
    })

    return {
      ...toRefs(overviewData)
    }
  }
})
</script>
