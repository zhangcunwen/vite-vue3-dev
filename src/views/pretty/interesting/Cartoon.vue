<template>
  <div class="cartoon">
    <el-image
      v-for="(item, i) in cartoon"
      :key="item"
      :class="{ active: i === active }"
      :src="`src/assets/cartoon/${item}`"
      fit="fill"
    ></el-image>
    <!-- <el-image
      v-for="(item, i) in cartoon"
      :key="item"
      :class="{ active: i === active }"
      src="src/assets/bg2.png"
      fit="contain"
    ></el-image> -->
    <div class="indicator">
      <span
        :class="['point', { active: i === active }]"
        v-for="(item, i) in cartoon"
        :key="item"
        @click="clickIndicator(i)"
      >
      </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: ['cartoon'],
  setup(props) {
    let timer = null
    const cartoonData = reactive({
      active: 0
    })

    const interval = () => {
      timer = setInterval(() => {
        if (cartoonData.active < props.cartoon.length - 1) {
          cartoonData.active += 1
        } else {
          cartoonData.active = 0
        }
      }, 4000)
    }
    const clickIndicator = (i) => {
      clearInterval(timer)
      timer = null
      cartoonData.active = i || 0
      interval()
    }
    interval()

    return { ...toRefs(cartoonData), clickIndicator }
  }
})
</script>
<style lang="scss">
.cartoon {
  position: relative;
  height: 100vh;
  width: 100vw;
  .el-image {
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transition: opacity 1.2s linear;
  }
  .el-image.active {
    opacity: 1;
  }
  .indicator {
    position: absolute;
    top: 50%;
    right: 30px;
    // display: flex;
    transform: translateY(-50%);
    z-index: 9999;
    .point {
      width: 14px;
      height: 14px;
      margin: 8px 0;
      display: block;
      border: 3px solid rgba(120, 120, 120, 0.8);
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
    }
    .point.active {
      border: 3px solid rgba(255, 103, 0, 1);
      // box-shadow: 0 0 4px $base-color;
    }
  }
}
</style>
