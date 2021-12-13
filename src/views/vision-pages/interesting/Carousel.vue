<template>
  <div class="carousel" :style="{width: width}">
    <div style="height:100%" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
      <el-image
        v-for="(item, i) in dataSource"
        :key="item"
        :class="['slide', { active: i === active }]"
        :src="item"
        fit="fill"
      ></el-image>
    </div>
    <div :class="['indicator', inditorPosition, direction]">
      <span
        :class="['point', { active: i === active }]"
        v-for="(item, i) in dataSource"
        :key="item"
        @click="goTo(i)"
      >
      </span>
    </div>
    <div v-if="arrow" class="arrow pre" @click="goTo(-1, true)">
      <el-icon><arrow-left-bold /></el-icon>
    </div>
    <div v-if="arrow" class="arrow next" @click="goTo(1, true)">
      <el-icon><arrow-right-bold /></el-icon>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, onUnmounted } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons'

export default defineComponent({
  props: {
    width: {
      type: String,
      default: '90%'
    },
    dataSource: {
      type: Array,
      default: () => []
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    inditorPosition: {
      type: String,
      default: ''
    },
    interval: {
      type: Number,
      default: 5000
    },
    direction: {
      type: String,
      default: ''
    },
    arrow: {
      type: Boolean,
      default: true
    },
    pauseOnHover: {
      type: Boolean,
      default: true
    }
  },
  components: {
    ArrowLeftBold, ArrowRightBold
  },
  setup(props) {
    const { dataSource, autoplay, interval, pauseOnHover } = props
    let timer = null
    const cartoonData = reactive({
      active: 0
    })

    const loopPlay = () => {
      timer = setInterval(() => {
        const { active } = cartoonData
        if (active < dataSource.length - 1) {
          cartoonData.active += 1
        } else {
          cartoonData.active = 0
        }
      }, interval)
    }
    const goTo = (i, arrow) => {
      timer && clearInterval(timer)
      timer = null
      let index = 0
      const len = dataSource.length - 1
      if (arrow) {
        index = cartoonData.active + i
        if (index < 0) {
          index = len
        } else if (index > len) {
          index = 0
        }
      } else {
        index = i
      }
      cartoonData.active = index
      autoplay && loopPlay()
    }
    autoplay && loopPlay()

    const mouseEnter = () => {
      pauseOnHover && timer && clearInterval(timer)
      timer = null
    }
    const mouseLeave = () => {
      autoplay && loopPlay()
    }

    onUnmounted(() => {
      timer && clearInterval(timer)
      timer = null
    })

    return { ...toRefs(cartoonData), goTo, mouseEnter, mouseLeave }
  }
})
</script>
<style lang="scss">
.carousel {
  position: relative;
  height: 100%;
  .slide {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 1s linear;
  }
  .slide.active {
    opacity: 1;
  }
  .indicator {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
    z-index: 9;
    .point {
      width: 14px;
      height: 14px;
      margin: 0 8px;
      display: inline-block;
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
  .indicator.outside {
    bottom: -30px;
  }
  .indicator.vertical {
    left: auto;
    bottom: auto;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    .point {
      margin: 8px 0;
      display: block;
    }
  }
  .indicator.vertical.outside {
    right: -30px;
  }
  .arrow {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    height: 70px;
    width: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(100, 100, 100, 0.3);
    border-radius: 2px;
    cursor: pointer;
    .el-icon {
      font-size: 22px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
  .arrow.pre {
    left: 0;
  }
  .arrow.next {
    right: 0;
  }
  .arrow:hover {
    background: rgba(100, 100, 100, 0.9);
    .el-icon {
      color: #fff;
    }
  }
}
</style>
