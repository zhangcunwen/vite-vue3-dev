export default {
  state() {
    return {
      count: 1
    }
  },
  mutations: {
    INCREMENT(state: IStore.ICountState, payload: IStore.ICountPayload) {
      state.count += payload.val
    }
  },
  actions: {
    Increment({ commit }: any) {
      commit('INCREMENT')
    }
  },
  getters: {
    double(state: IStore.ICountState) {
      return 2 * state.count
    }
  }
}
