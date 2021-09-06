<template>
  <div class="header">
    <i v-if="isCollapse" @click="changeCollpase(false)" class="el-icon-s-unfold"></i>
    <el-icon v-else @click="changeCollpase(true)"><fold /></el-icon>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { Fold } from '@element-plus/icons'
import store from '@/store'

export default defineComponent({
  name: 'Header',
  components: { Fold },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  setup() {
    const changeCollpase = (val) => {
      store.dispatch('Collapse', val)
    }

    return { changeCollpase }
  }
})
</script>

<style lang="scss">
.header {
  i {
    font-size: 22px;
    cursor: pointer;
  }
}
</style>
