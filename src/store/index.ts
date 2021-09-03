import { createStore } from 'vuex'
import todos from './modules/todos'
import count from './modules/count'
import common from './modules/common'

// Create a new store instance.
export default createStore({
  state: {},
  modules: { todos, count, common }
})
