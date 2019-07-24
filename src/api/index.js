import ajax from './ajax'
export const reqHomeData = () => ajax('/homeData')
export const reqCategory = () => ajax('/category')
export const reqCategoryList = () => ajax('/categoryList')

// 第三页
export const reqSearchInitialData = () => ajax('/api/xhr/search/init.json')
export const reqThingsNav = () => ajax('/api/topic/v1/find/getTabs.json')
export const reqThingsData = () => ajax('/api/topic/v1/find/recManual.json')
