import Home from '../pages/Home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Personal from '../pages/personal/Personal.vue'
import Shop from '../pages/shop/Shop.vue'
import Shiwu from '../pages/shiwu/Shiwu.vue'
import Search from '../pages/Search/Search.vue'


export default [
  {
    path: '/home',
    component: Home,
    meta:{
      isShow:true
    }
  },
  {
    path: '/classify',
    component: Classify,
    meta:{
      isShow:true
    },
  },
  {
    path:'/search',
    component:Search
  },
  {
    path: '/personal',
    component: Personal,
    meta:{
      isShow:false
    }
  },
  {
    path: '/shiwu',
    component: Shiwu,
    meta:{
      isShow:true
    }
  },
  {
    path: '/shop',
    component: Shop,
    meta:{
      isShow:true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]
