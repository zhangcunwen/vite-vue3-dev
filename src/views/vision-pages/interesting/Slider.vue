<template>
  <div class="cartoon-slider">
    <!-- <div class="triangle"></div> -->
    <div class="filling">
      <div
        :class="['bar', {active: activeKey === item.key}]"
        v-for="(item, i) in sliderData"
        :key="i"
        @click="changeActive(item.key)"
      >
        <el-image
          :src="item.url"
          fill="contain"
        ></el-image>
        <p class="title">{{item.title}}</p>
      </div>
    </div>
    <!-- <div class="triangle"></div> -->
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: ['sliderData', 'activeKey'],
  setup(props, context) {
    const { emit } = context
    const sliderData = reactive({
      changeActive(key) {
        emit('change', key, true)
      }
    })

    return { ...toRefs(sliderData) }
  }
})
</script>
<style lang="scss">
.cartoon-slider {
  position: absolute;
  top: 50%;
  left: 0;
  width: 60px;
  // padding-bottom: 4px;
  transform: translateY(-50%);
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  background: #fff;
  .triangle {
    height: 56px;
    clip-path: polygon(0 0, 100% 100%, 0 100%);
    background: $base-color;
  }
  .triangle:last-child {
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }
  .filling {
    // border: 1px solid $base-color;
    .bar {
      height: 72px;
      padding-top: 6px;
      margin: 0 8px 4px;
      border-bottom: 1px solid #ccc;
      color: rgba(100, 100, 100, 0.8);
      cursor: pointer;
      .el-image {
        width: 40px;
        height: 40px;
        border-radius: 8px;
      }
      .title {
        font-size: 12px;
      }
    }
    .bar:last-child {
      // border: none;
    }
    .bar.active {
      color: $base-color;
      border-bottom: 4px solid $base-color;
    }
  }
}
</style>
