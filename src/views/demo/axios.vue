<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import api from '../../api/demo'

export default defineComponent({
  setup() {
    api
      .getInfos()
      .then((res: any) => {
        console.log('res: ', res)
      })
      .catch((err: any) => {
        console.log('err: ', err)
      })
  }
})
</script>
