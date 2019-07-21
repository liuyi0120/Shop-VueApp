import Home from '../pages/Home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Personal from '../pages/personal/Personal.vue'
import Shop from '../pages/shop/Shop.vue'
import Shitu from '../pages/shitu/Shitu.vue'


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
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta:{
      isShow:false
    }
  },
  {
    path: '/shitu',
    component: Shitu,
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
    redirect: '/classify'
  }
]
