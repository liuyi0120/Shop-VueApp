import {
  CHANGE_STATE,
  CHANGE_STATEE,
  RESICE_HOMEDATA,
  RESICE_CATEGORY,
  RESICE_CATEGORYLIST,
  RESICE_THINGSNAV,
  RESICE_THINGSDATA
} from './mutation-types'
import { reqHomeData, reqCategory, reqCategoryList } from '../api/index'
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
}
