export default {
  state() {
    return {
      collapse: false
    }
  },
  mutations: {
    COLLAPSE(state: IStore.ICommonState, val: boolean) {
      state.collapse = val
    }
  },
  actions: {
    Collapse({ commit }: any, val: boolean) {
      commit('COLLAPSE', val)
    }
  },
  getters: {
    isCollapse(state: IStore.ICommonState) {
      return state.collapse
    }
  }
}
