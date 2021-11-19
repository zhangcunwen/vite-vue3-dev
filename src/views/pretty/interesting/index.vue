<template>
  <div class="interest">
    <Cartoon :cartoon="cartoon" ref="cartoonRef" />
    <CartoonSlider :sliderData="sliderData" :activeKey="activeKey" @changeActiveKey="changeActiveKey" />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs, ref } from 'vue'
import Cartoon from './Cartoon.vue'
import CartoonSlider from './CartoonSlider.vue'

export default defineComponent({
  components: { Cartoon, CartoonSlider },
  setup() {
    const imageData = {
      king: [
        '/king/1.jfif',
        '/king/2.jfif',
        '/king/3.jfif',
        '/king/4.jfif',
        '/king/5.jfif',
        '/king/6.jfif',
        '/king/7.jfif',
        '/king/8.jfif',
        '/king/9.jfif',
        '/king/10.jfif',
        '/king/11.jfif',
        '/king/12.jfif'
      ],
      anime: [
        '/anime/bg1.jfif',
        '/anime/bg2.jpg',
        '/anime/bg3.jfif',
        '/anime/bg4.jpg',
        '/anime/bg5.jpg',
        '/anime/bg6.jfif',
        '/anime/bg7.jpg',
        '/anime/bg8.jpg',
        '/anime/bg9.jpg',
        '/anime/bg10.jpg',
        '/anime/bg11.jpg',
        '/anime/bg12.jfif'
      ],
      scenery: [
        'scenery/1.jpg',
        'scenery/2.jpg',
        'scenery/3.jpg',
        'scenery/4.jpg',
        'scenery/5.jpg',
        'scenery/6.jpg',
        'scenery/7.jpg',
        'scenery/8.jpg',
        'scenery/9.jpg',
        'scenery/10.jpg',
        'scenery/11.jpg',
        'scenery/12.jpg'
      ],
      cars: [
        'cars/1.jpg',
        'cars/2.jpg',
        'cars/3.jpg',
        'cars/4.jpg',
        'cars/5.jpg',
        'cars/6.jpg',
        'cars/7.jpg',
        'cars/8.jpg',
        'cars/9.jpg',
        'cars/10.jpg',
        'cars/11.jpg',
        'cars/12.jpg'
      ],
      pets: [
        'pets/1.jpg',
        'pets/2.jpg',
        'pets/3.jpg',
        'pets/4.jpg',
        'pets/5.jpg',
        'pets/6.jpg',
        'pets/7.jpg',
        'pets/8.jpg',
        'pets/9.jpg',
        'pets/10.jpg',
        'pets/11.jpg',
        'pets/12.jpg'
      ]
    }
    const cartoonRef = ref(null)
    const interData = reactive({
      cartoon: {},
      activeKey: 'anime',
      sliderData: [
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
      ],
      changeActiveKey(key, slider) {
        interData.cartoon = imageData[key || 'anime']
        interData.activeKey = key || 'anime'
        slider && cartoonRef.value.clickIndicator(0)
      }
    })

    interData.changeActiveKey('anime')

    return { cartoonRef, ...toRefs(interData) }
  }
})
</script>
<style lang="scss">
.interest {
  position: relative;
  background: url('../../../assets/bg3.png') center center/100% 100%;
}
</style>
