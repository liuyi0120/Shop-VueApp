import ajax from './ajax'
/* 第一页 */
export const reqHomeData = () => ajax('/homeData')
export const reqCategory = () => ajax('/category')
export const reqCategoryList = () => ajax('/categoryList')

// 第三页
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')
export const reqThingsSearch = (keywordPrefix) => ajax('/api/xhr/search/searchAutoComplete.json?csrf_token=29c2d6669c619d172a33deb5c6c9a837',{keywordPrefix})

export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')
export const reqThingsData = () => ajax('/api/topic/v1/find/recManual.json')
