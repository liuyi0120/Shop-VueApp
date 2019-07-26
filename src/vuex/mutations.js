import {
  CHANGE_STATE,
  CHANGE_STATEE,
  RESICE_HOMEDATA,
  RESICE_CATEGORY,
  RESICE_CATEGORYLIST,
  RECEIVE_THINGSNAV,
  RECEIVE_THINGSDATA,
  RECEIVE_SEARCHDATA
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

  },
  [RECEIVE_THINGSNAV] (state,data) {
    state.thingsNav = data
  },
  [RECEIVE_THINGSDATA] (state,data) {
    state.thingsData = data
  },
  [RECEIVE_SEARCHDATA] (state,data) {
    state.searchData = data
  }
}
  