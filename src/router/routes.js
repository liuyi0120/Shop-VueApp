import Home from '../pages/Home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Personal from '../pages/personal/Personal.vue'
import Shop from '../pages/shop/Shop.vue'
import Shitu from '../pages/shitu/Shitu.vue'


export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/shitu',
    component: Shitu
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/',
    redirect: '/classify'
  }
]
