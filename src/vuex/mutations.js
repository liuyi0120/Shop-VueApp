import {
  CHANGE_STATE,
  CHANGE_STATEE,
  RESICE_HOMEDATA,
  RESICE_CATEGORY,
  RESICE_CATEGORYLIST,
  RESICE_THINGSNAV,
  RESICE_THINGSDATA
} from './mutation-types'
export default{
  [CHANGE_STATE] ( state){
    state.isLogin = 1
  },
  [CHANGE_STATEE] ( state){
    state.isLogin = 2
  },
  [RESICE_HOMEDATA] (state,homeData) {
    state.homeData = homeData

  },
  [RESICE_CATEGORY] (state,category) {
    state.category = category

  },
  [RESICE_CATEGORYLIST] (state,categoryList) {
    state.categoryList = categoryList

  }
}
