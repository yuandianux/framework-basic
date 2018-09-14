import * as types from './mutation-types'
export default {
  setMsg ({ commit }, num) {
    commit(types.SET_MSG, num)
  }
}
