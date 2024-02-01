import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../views/MainLayout.vue'),
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: () => import('../views/main/MyDashboard.vue')
        },
        {
          path: '/shop',
          name: 'shop',
          component: () => import('../views/main/MyShop.vue')
        },
        {
          path: '/mynfts',
          name: 'mynfts',
          component: () => import('../views/main/MyNFTs.vue')
        },
        {
          path: '/mytimeline',
          name: 'mytimeline',
          component: () => import('../views/main/MyTimeline.vue')
        },
        {
          path: '/mysafe',
          name: 'mysafe',
          component: () => import('../views/main/MySafe.vue')
        },
        {
          path: '/vesting',
          name: 'vesting',
          component: () => import('../views/main/Vesting.vue')
        },
        {
          path: '/mytokens',
          name: 'mytokens',
          component: () => import('../views/main/MyProfile.vue')
        },
        {
          path: '/myskins',
          name: 'myskins',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/main/MySkins.vue')
        }
      ]
    },

    {
      path: '/login',
      component: () => import('../views/AuthLayout.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/auth/SignIn.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('../views/auth/CreateAccount.vue')
        },
        {
          path: '/forgotPassword',
          name: 'forgotPassword',
          component: () => import('../views/auth/ForgotPassword.vue')
        },
        {
          path: '/resetPassword',
          name: 'resetPassword',
          component: () => import('../views/auth/ResetPassword.vue')
        },
        {
          path: '/termsAndConditions',
          name: 'termsAndConditions',
          component: () => import('../components/specific/AcceptConditionsModal.vue')
        }
      ]
    }
  ]
})

export default router
