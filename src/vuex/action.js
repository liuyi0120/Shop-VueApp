import {
  CHANGE_STATE,
  CHANGE_STATEE,
  RESICE_HOMEDATA,
  RESICE_CATEGORY,
  RESICE_CATEGORYLIST,
  RECEIVE_THINGSNAV,
  RECEIVE_THINGSDATA
} from './mutation-types'
import { reqHomeData, reqCategory, reqCategoryList,reqThingsNav,reqThingsData } from '../api/index'
export default {

  phoneLoginaction({ commit }) {
    commit(CHANGE_STATE)
  },
  emailLoginaction({ commit }) {
    commit(CHANGE_STATEE)
  },
  async gethomeData({ commit }) {
    const result = await reqHomeData()
    if (result.code === 0) {
      commit(RESICE_HOMEDATA, result.data)
    }
  },
  async getcategory({ commit }) {
    const result = await reqCategory()
    if (result.code === 0) {
      commit(RESICE_CATEGORY, result.data)
    }
  },
  async getcategoryList({ commit }) {
    const result = await reqCategoryList()
    if (result.code === 0) {
      commit(RESICE_CATEGORYLIST, result.data)
    }
  },

    async getThingsNav ({commit}) {
      const result = await reqThingsNav()
      if (result.code*1 === 200) {
        commit(RECEIVE_THINGSNAV,result.data)
      }
    },
  async reqThingsData({commit}) {
    const result = await reqThingsData()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSDATA,result.data)
    }
  }
}
