<template>
  <div></div>
</template>
<script>
import { defineComponent } from 'vue'
import api from '@/api/mall.js'

export default defineComponent({
  setup() {
    api
      .getInfos()
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>
