import * as types from './mutation-types'

const mutations = {
  [types.SET_MSG] (state, msg) {
    state.msg = msg
  }
}

export default mutations
