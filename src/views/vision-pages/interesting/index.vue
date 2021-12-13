<template>
  <div class="interest">
    <Carousel
      ref="carouselRef"
      :dataSource="cartoon"
      inditor-position="outside"
      direction="vertical"
    />
    <Slider
      :sliderData="sliderData"
      :activeKey="activeKey"
      @change="changeActiveKey"
    />
  </div>
</template>
<script setup>
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
import Carousel from './Carousel.vue'
import Slider from './Slider.vue'

const imageData = {
  king: [
    'src/assets/cartoon/king/1.jfif',
    'src/assets/cartoon/king/2.jfif',
    'src/assets/cartoon/king/3.jfif',
    'src/assets/cartoon/king/4.jfif',
    'src/assets/cartoon/king/5.jfif',
    'src/assets/cartoon/king/6.jfif',
    'src/assets/cartoon/king/7.jfif',
    'src/assets/cartoon/king/8.jfif',
    'src/assets/cartoon/king/9.jfif',
    'src/assets/cartoon/king/10.jfif',
    'src/assets/cartoon/king/11.jfif',
    'src/assets/cartoon/king/12.jfif'
  ],
  anime: [
    'src/assets/cartoon/anime/bg1.jfif',
    'src/assets/cartoon/anime/bg2.jpg',
    'src/assets/cartoon/anime/bg3.jfif',
    'src/assets/cartoon/anime/bg4.jpg',
    'src/assets/cartoon/anime/bg5.jpg',
    'src/assets/cartoon/anime/bg6.jfif',
    'src/assets/cartoon/anime/bg7.jpg',
    'src/assets/cartoon/anime/bg8.jpg',
    'src/assets/cartoon/anime/bg9.jpg',
    'src/assets/cartoon/anime/bg10.jpg',
    'src/assets/cartoon/anime/bg11.jpg',
    'src/assets/cartoon/anime/bg12.jfif'
  ],
  scenery: [
    'src/assets/cartoon/scenery/1.jfif',
    'src/assets/cartoon/scenery/2.jfif',
    'src/assets/cartoon/scenery/3.jpg',
    'src/assets/cartoon/scenery/4.jpg',
    'src/assets/cartoon/scenery/5.jpg',
    'src/assets/cartoon/scenery/6.jpg',
    'src/assets/cartoon/scenery/7.jpg',
    'src/assets/cartoon/scenery/8.jpg',
    'src/assets/cartoon/scenery/9.jpg',
    'src/assets/cartoon/scenery/10.jpg',
    'src/assets/cartoon/scenery/11.jpg',
    'src/assets/cartoon/scenery/12.jpg'
  ],
  cars: [
    'src/assets/cartoon/cars/1.jpg',
    'src/assets/cartoon/cars/2.jpg',
    'src/assets/cartoon/cars/3.jpg',
    'src/assets/cartoon/cars/4.jpg',
    'src/assets/cartoon/cars/5.jpg',
    'src/assets/cartoon/cars/6.jpg',
    'src/assets/cartoon/cars/7.jpg',
    'src/assets/cartoon/cars/8.jpg',
    'src/assets/cartoon/cars/9.jpg',
    'src/assets/cartoon/cars/10.jpg',
    'src/assets/cartoon/cars/11.jpg',
    'src/assets/cartoon/cars/12.jpg'
  ],
  pets: [
    'src/assets/cartoon/pets/1.jpg',
    'src/assets/cartoon/pets/2.jpg',
    'src/assets/cartoon/pets/3.jpg',
    'src/assets/cartoon/pets/4.jpg',
    'src/assets/cartoon/pets/5.jpg',
    'src/assets/cartoon/pets/6.jpg',
    'src/assets/cartoon/pets/7.jpg',
    'src/assets/cartoon/pets/8.jpg',
    'src/assets/cartoon/pets/9.jpg',
    'src/assets/cartoon/pets/10.jpg',
    'src/assets/cartoon/pets/11.jpg',
    'src/assets/cartoon/pets/12.jpg'
  ]
}
const sliderData = [
    {
      url: 'src/assets/cartoon/slider/anime.jpg',
      title: '动漫',
      key: 'anime'
    },
    {
      url: 'src/assets/cartoon/slider/king.jpg',
      title: '王者',
      key: 'king'
    },
    {
      url: 'src/assets/cartoon/slider/scenery.png',
      title: '风景',
      key: 'scenery'
    },
    {
      url: 'src/assets/cartoon/slider/car.png',
      title: '豪车',
      key: 'cars'
    },
    {
      url: 'src/assets/cartoon/slider/pet.png',
      title: '萌宠',
      key: 'pets'
    },
]
const carouselRef = ref(null)
let cartoon = ref([])
let activeKey = ref('')
const changeActiveKey = (key, slider) => {
  if (activeKey.value === key) return
  cartoon.value = imageData[key || 'anime']
  activeKey.value = key || 'anime'
  slider && carouselRef.value.goTo(0)
}

changeActiveKey('anime')

</script>
<style lang="scss">
.interest {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  // background: url('../../../assets/bg3.png') center center/100% 100%;
}
</style>
