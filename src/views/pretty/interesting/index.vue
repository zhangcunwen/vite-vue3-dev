<template>
  <div class="interest">
    <Cartoon :cartoon="cartoon" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import Cartoon from './Cartoon.vue'

export default defineComponent({
  components: { Cartoon },
  setup() {
    const interData = reactive({
      // cartoon: Array(9)
      cartoon: [
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6fae8cbea12505f89b350c48d407441a.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2082a18632ef1f7aa06d90b39a8c06b.jpg?w=2452&h=920',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/918820682e4a490221cfd92b24c14b86.jpg?thumb=1&w=1226&h=460&f=webp&q=90',
        'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c568030fd3637ac46f753a46bc244c9f.jpg?thumb=1&w=1226&h=460&f=webp&q=90'
      ]
    })

    return { ...toRefs(interData) }
  }
})
</script>
<style lang="scss">
.interest {
}
</style>
