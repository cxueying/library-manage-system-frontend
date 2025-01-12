import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // auth
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },

    // book
    {
      path: '/book/details/:id',
      name: 'bookDetail',
      component: () => import("../views/book/BookDetailView.vue")
    },
    {
      path: '/book/add',
      name: 'bookAdd',
      component: () => import('../views/book/BookAddView.vue')
    },
    {
      path: '/book/edit',
      name: 'bookEdit',
      component: () => import('../views/book/BookEditView.vue')
    },
    {
      path: '/book/edit/:id',
      name: 'bookEditDetail',
      component: () => import('../views/book/BookEditDetailView.vue')
    },
    {
      path: '/book/search',
      name: 'bookSearch',
      component: () => import('../views/book/BookSearchView.vue')
    },
    {
      path: '/book/category',
      name: 'bookCategory',
      component: () => import('../views/book/BookCategoryView.vue')
    },

    // user
    {
      path: '/user/info/',
      name: 'userInfo',
      component: () => import('../views/user/UserInfoView.vue')
    },
    {
      path: '/user/lend',
      name: 'userLend',
      component: () => import('../views/user/UserLendView.vue')
    },

    // other
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/other/AboutView.vue')
    },
    {
      path: '/setting',
      name: 'setting',
      component: () => import('../views/other/SettingView.vue')
    },
  ],
})

export default router
