<template>
  <div class="goods">
    <div class="brick" v-for="(good, i) in goodsList" :key="i">
      <el-image :src="good.goodsCoverImg" fit="contain">
        <template v-if="error" #error>
          <el-image :src="error"></el-image>
        </template>
      </el-image>
      <h4 class="title">{{ good.goodsName }}</h4>
      <p class="intro">{{ good.goodsIntro }}</p>
      <p class="price">{{ good.sellingPrice }}</p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['goodsList', 'error']
})
</script>
<style lang="scss">
@import './index.scss';
</style>
