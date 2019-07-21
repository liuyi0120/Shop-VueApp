import {CHANGE_STATE,CHANGE_STATEE} from './mutation-types'
export default{

    phoneLoginaction({commit}){
      commit(CHANGE_STATE)
    },
    emailLoginaction({commit}){
      commit(CHANGE_STATEE)
    }

}
