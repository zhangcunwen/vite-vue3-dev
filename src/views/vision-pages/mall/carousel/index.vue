<template>
  <el-carousel class="carousel-container" :interval="4000" v-if="carousels.length" height="500px">
    <el-carousel-item v-for="(item, i) in carousels" :key="i + ''">
      <el-image style="width: 100%; height: 100%" :src="item.carouselUrl" fit="fill"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['carousels'],
  setup() {}
})
</script>

<style lang="scss">
.carousel-container {
  margin-top: $header-height;
}
</style>
