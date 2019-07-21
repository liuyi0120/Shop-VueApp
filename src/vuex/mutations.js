import {CHANGE_STATE,CHANGE_STATEE} from './mutation-types'
export default{
  [CHANGE_STATE] ( state){
    state.isLogin = 1
  },
  [CHANGE_STATEE] ( state){
    state.isLogin = 2
  }

}
