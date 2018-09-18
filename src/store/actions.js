import * as types from './mutation-types'
export default {
  setMsg ({ commit }, msg) {
    commit(types.SET_MSG, msg)
  },
  setIsLoading ({ commit }, isLoading) {
    commit(types.SET_ISLOADING, isLoading)
  }
}
