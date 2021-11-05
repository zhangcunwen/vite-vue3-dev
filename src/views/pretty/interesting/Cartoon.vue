<template>
  <div class="cartoon">
    <el-image
      v-for="(item, i) in cartoon"
      :key="i"
      :class="{ active: i === active }"
      :src="item"
      fit="contain"
    ></el-image>
    <div class="indicator">
      <span
        :class="['outer', { active: i === active }]"
        v-for="(item, i) in cartoon"
        :key="i"
        @click="clickIndicator(i)"
      >
        <span class="inner"></span>
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
      cartoonData.active = i
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
    transition: opacity 800ms linear;
  }
  .el-image.active {
    opacity: 1;
  }
  .indicator {
    position: absolute;
    left: 50%;
    bottom: 50px;
    display: flex;
    transform: translate(-50%, 0);
    z-index: 9999;
    .outer {
      width: 14px;
      height: 14px;
      margin: 0 4px;
      display: flex;
      border-radius: 50%;
      background: rgba(120, 120, 120, 0.6);
      cursor: pointer;
    }
    .inner {
      width: 8px;
      height: 8px;
      margin: auto;
      display: inline-block;
      border-radius: 50%;
      background: #fff;
    }
    .outer.active {
      background: rgba(255, 103, 0, 1);
      box-shadow: 0 0 4px #ff6700;
    }
  }
}
</style>
