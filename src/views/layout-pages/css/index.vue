<template>
  <el-row :gutter="10">
    <el-col
      v-for="item in dataSource"
      :key="item.url"
      :span="6"
      :style="{marginBottom: '10px'}"
    >
      <el-card
        :body-style="{ padding: '0px', cursor: 'pointer' }"
        shadow="hover"
        @click="goRouter(item.path)"
      >
        <div class="fix-ratio">
          <el-image :src="item.url" fit="contain"></el-image>
        </div>
        <div style="padding: 10px">{{item.title}}</div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Css',
  setup() {
    const router = useRouter()
    const dataSource = [
      {
        url: 'src/assets/cartoon/king/4.jfif',
        title: '粘性定位',
        path: '/layout/css/sticky'
      },
      {
        url: 'src/assets/cartoon/king/1.jfif',
        title: '旋转动画'
      },
      {
        url: 'src/assets/cartoon/king/2.jfif',
        title: '粘性定位'
      },
      {
        url: 'src/assets/cartoon/king/3.jfif',
        title: '粘性定位'
      },
      {
        url: 'src/assets/cartoon/king/5.jfif',
        title: '粘性定位'
      }
    ]
    const goRouter = (path) => {
      router.push(path || '/layout/css')
    }

    return { goRouter, dataSource }
  }
})
</script>

<style lang="scss">
.fix-ratio {
  position: relative;
  padding-top: 75%;
  .el-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
