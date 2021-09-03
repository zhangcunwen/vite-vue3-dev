export default {
  state: {
    todos: [{ id: 1, text: 'VUE', done: true }]
  },
  mutations: {
    CHANGETODOS(state: IStore.ITodosState, data: Array<IStore.ITodos>) {
      state.todos = data
    }
  },
  actions: {
    ChangeTodos({ commit }: any, data: Array<IStore.ITodos>) {
      commit('CHANGETODOS', data)
    }
  },
  getters: {
    doneTodos: (state: IStore.ITodosState) => {
      return state.todos.filter((todo) => todo.done)
    }
  }
}
