import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/views/Authentication/SigninView.vue'
import SignupView from '@/views/Authentication/SignupView.vue'
import Savingsperfomance from '@/views/Savingsperfomance.vue'
import Home from '@/views/Dashboard/Home.vue'
import investmentform from '@/views/Forms/investmentform.vue'
import queryform from '@/views/Forms/queryform.vue'
import SettingsView from '@/views/Pages/SettingsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import TablesView from '@/views/TablesView.vue'
import clientprofile  from '@/views/UiElements/clientprofile.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home Dashboard'
    }
  },
  {
    path: '/Savingsperfomance',
    name: 'Savingsperfomance',
    component: Savingsperfomance,
    meta: {
      title: 'Savingsperfomance'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile'
    }
  },
  {
    path: '/forms/investmentform',
    name: 'investmentform',
    component: investmentform,
    meta: {
      title: 'investmentform'
    }
  },
  {
    path: '/forms/queryform',
    name: 'queryform',
    component: queryform,
    meta: {
      title: 'queryform'
    }
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesView,
    meta: {
      title: 'Tables'
    }
  },
  {
    path: '/pages/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      title: 'Settings'
    }
  },
  
  {
    path: '/ui-elements/clientprofile',
    name: 'clientprofileview',
    component: clientprofile,
    meta: {
      title: 'clientprofile'
    }
  },
  
  {
    path: '/auth/signin',
    name: 'signin',
    component: SigninView,
    meta: {
      title: 'Signin'
    }
  },
  {
    path: '/auth/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Sacco Management`
  next()
})

export default router
