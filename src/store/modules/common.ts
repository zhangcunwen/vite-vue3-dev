import { RouteRecordRaw } from 'vue-router'
export default {
  state() {
    return {
      collapse: false,
      routes: []
    }
  },
  mutations: {
    COLLAPSE(state: IStore.ICommonState, val: boolean) {
      state.collapse = val
    },
    ROUTES(state: IStore.ICommonState, routes: Array<RouteRecordRaw>) {
      state.routes = routes
    }
  },
  actions: {
    Collapse({ commit }: any, val: boolean) {
      commit('COLLAPSE', val)
    },
    Routes({ commit }: any, routes: Array<RouteRecordRaw>) {
      commit('ROUTES', routes)
    }
  },
  getters: {
    isCollapse(state: IStore.ICommonState) {
      return state.collapse
    },
    routes(state: IStore.ICommonState) {
      return state.routes
    }
  }
}
