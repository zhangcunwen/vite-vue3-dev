<template>
  <div class="mall">
    <Carousel :carousels="carousels" />
    <div class="goods-box">
      <Goods :goodsList="hotGoodses" :error="hotError" />
      <Goods :goodsList="newGoodses" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import Carousel from './carousel/index.vue'
import Goods from './goods/index.vue'
import api from '@/api/mall.js'

export default defineComponent({
  components: { Carousel, Goods },
  setup() {
    const mallData = reactive({
      carousels: [],
      hotGoodses: [],
      newGoodses: [],
      hotError:
        '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ab07e0fcbec3beb8b0f409db8bee8da4.jpg?thumb=1&w=200&h=200&f=webp&q=90'
    })

    const getMallData = () => {
      api
        .getInfos()
        .then((res) => {
          const { carousels, hotGoodses, newGoodses } = res.data
          mallData.carousels = carousels
          mallData.hotGoodses = hotGoodses
          mallData.newGoodses = newGoodses
        })
        .catch((err) => {
          console.log('err: ', err)
        })
    }
    getMallData()

    return { ...toRefs(mallData) }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
