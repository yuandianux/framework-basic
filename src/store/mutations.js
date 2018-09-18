import * as types from './mutation-types'

const mutations = {
  [types.SET_MSG] (state, msg) {
    state.msg = msg
  },
  [types.SET_ISLOADING] (state, isLoading) {
    state.isLoading = isLoading
  }
}

export default mutations
