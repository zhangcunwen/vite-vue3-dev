<template>
  <div class="previewer">
    <div class="pre-container" v-for="item in dataSource" :key="item">
      <div class="box">
        <div class="img-box">
          <el-image
            :src="item"
            fit="fill"
            @click="(e) => triggerPreview(e, true, item)">
          </el-image>
        </div>
      </div>
    </div>
    <div
      :class="['mask', {'show': show}]"
      @click="(e) => triggerPreview(e, false, '')"
    >
      <img :src="activeUrl" :class="['preview-img', {'show': show}]" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  setup() {
    const show = ref(false)
    const activeUrl = ref('')
    const base_url = 'src/assets/cartoon'
    const dataSource = [
      base_url + '/king/1.jfif',
      base_url + '/king/2.jfif',
      base_url + '/king/3.jfif',
      base_url + '/king/4.jfif',
      base_url + '/king/5.jfif',
      base_url + '/king/12.jfif',

      base_url + '/anime/bg1.jfif',
      base_url + '/anime/bg2.jpg',
      base_url + '/anime/bg3.jfif',
      base_url + '/anime/bg4.jpg',
      base_url + '/anime/bg5.jpg',
      base_url + '/anime/bg12.jfif',

      base_url + '/scenery/1.jfif',
      base_url + '/scenery/2.jfif',
      base_url + '/scenery/3.jpg',
      base_url + '/scenery/4.jpg',
      base_url + '/scenery/5.jpg',
      base_url + '/scenery/12.jpg',

      base_url + '/cars/1.jpg',
      base_url + '/cars/2.jpg',
      base_url + '/cars/3.jpg',
      base_url + '/cars/11.jpg',
      base_url + '/cars/12.jpg',

      base_url + '/pets/1.jpg',
      base_url + '/pets/2.jpg',
      base_url + '/pets/3.jpg',
      base_url + '/pets/4.jpg',
      base_url + '/pets/12.jpg'
    ]

    const triggerPreview = (e, val, url) => {
      e.stopPropagation()
      show.value = val
      activeUrl.value = url
    }

    return { dataSource, show, activeUrl, triggerPreview }
  }
})
</script>

<style lang="scss">
.previewer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .pre-container {
    width: 25%;
    .box {
      position: relative;
      width: calc(100% - 12px);
      padding-top: 53%;
      margin: 6px auto;
      overflow: hidden;
      background: #ddd;
    }
    .img-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  .mask.show {
    z-index: 8;
    background: rgba(100, 100, 100, 0.5);
  }
  .preview-img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) ratateZ(0deg);
    width: 0;
    transition: all 0.6s ease;
    z-index: 9;
  }
  .preview-img.show {
    width: 50%;
    height: auto;
    max-height: 90%;
    transform: translate(-50%, -50%) rotateZ(360deg);
    // z-index: 9;
  }
}
</style>
