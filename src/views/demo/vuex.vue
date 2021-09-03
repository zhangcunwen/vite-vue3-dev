<template>
  <div>
    {{ count + '-' + double }}
    <el-button size="small" type="primary" @click="increment">increment</el-button>
  </div>
  <el-card shadow="hover" class="box-card">
    <template #header>
      <div class="card-header">
        <span>列表事项</span>
        <el-button class="button" type="text" @click="changeTodos">加载...</el-button>
      </div>
    </template>
    <div v-for="todo in doneTodos" :key="todo.id" class="text item">
      {{ todo.text }}
    </div>
  </el-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { ElLoading } from 'element-plus'
import store from '@/store'

export default {
  name: 'Vuex',
  computed: {
    // ...mapState(['count']), // store state 直接定义的状态
    ...mapState({ count: (state) => state.count.count }), // store modules 定义的状态
    ...mapGetters(['double', 'doneTodos'])
  },
  setup() {
    const increment = () => {
      store.commit({ type: 'INCREMENT', val: 1 })
    }

    const changeTodos = () => {
      const loadingInstance = ElLoading.service({
        fullscreen: true,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const list = [
        { id: 1, text: 'VUE', done: true },
        { id: 2, text: 'React', done: false },
        { id: 3, text: 'Node', done: true },
        { id: 4, text: 'Css', done: true }
      ]
      setTimeout(() => {
        store.dispatch('ChangeTodos', list)
        loadingInstance.close()
      }, 2000)
    }

    return {
      increment,
      changeTodos
    }
  }
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 10px;
}
</style>
