<template>
  <el-space>
    <span>num：{{ num }}</span>
    <el-button @click="changeNum" size="small" type="primary">点击+1</el-button>
  </el-space>
  <el-divider></el-divider>
  <el-space>
    <span>val：{{ val }}</span>
    <el-button @click="changeVal" size="small" type="primary">点击+2</el-button>
  </el-space>
  <el-divider></el-divider>
  <el-space>
    <span>city：{{ data.city }}</span>
    <el-button @click="changeCity" size="small" type="primary">切换城市</el-button>
  </el-space>
  <el-divider></el-divider>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, watch, watchEffect, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Watch',
  setup() {
    // reactive 定义数据
    const state = reactive({
      num: 0,
      changeNum() {
        state.num += 1
      }
    })
    // 侦听 reactive 定义的数据
    watch(
      () => state.num,
      (curNum, preNum) => {
        console.log('新num：', curNum, '旧num：', preNum)
      }
    )

    // ref 定义数据
    const val = ref(0)
    const changeVal = () => {
      val.value += 2
    }
    // 侦听 ref 定义的数据
    watch(val, (newVal, oldVal) => {
      console.log('新val：', newVal, '旧val：', oldVal)
    })

    // 侦听多个数据
    watch([() => state.num, val], ([curNum, newVal], [preNum, oldVal]) => {
      console.log('新-num:', curNum, '旧-num:', preNum, '新-val:', newVal, '旧-val:', oldVal)
    })

    const deep = reactive({
      data: {
        city: '北京'
      },
      changeCity() {
        deep.data.city = deep.data.city === '上海' ? '北京' : '上海'
      }
    })
    // 侦听复杂数据，首次执行
    const stopWatch = watch(
      () => deep.data,
      (newData, oldData) => {
        console.log('新-city:', newData, '旧-city:', oldData)
      },
      { deep: true, immediate: true }
    )

    // watchEffect 不需要手动传入依赖
    // watchEffect 会先执行一次用来自动收集依赖
    // watchEffect 无法获取到变化前的值， 只能获取变化后的值
    watchEffect(() => {
      console.log('num:', state.num, 'val:', val.value, 'deep:', deep.data)
    })

    onUnmounted(() => {
      // 停止侦听，调用 watch 的返回函数来停止侦听
      stopWatch()
    })

    return {
      ...toRefs(state),
      val,
      changeVal,
      ...toRefs(deep)
    }
  }
})
</script>
