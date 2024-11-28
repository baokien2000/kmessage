// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { getMe, refreshToken } from '@/services/auth'
import { useMe } from '@/stores/me'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    let token = Cookies.get('access-token')
    const meStore = useMe()
    console.log('access-token', token)
    if (!token) {
        const res = await refreshToken()
        if (res?.data.accessToken) {
            token = res.data.accessToken
        }
    }
    console.log('token', token)
    if (to.meta.requiresAuth && !token) {
        // Redirect to login if the route requires authentication and no token is present
        next({ name: 'Login' })
        return
    }
    if (!token) {
        next()
        return
    }
    const me = await getMe(token)
    meStore.setMe(me.data)
    if (to.name === 'Login' && token) {
        // Redirect to Home if the user is already logged i n
        next({ name: 'Home' })
    } else {
        // check if to home page
        next()
    }
})

export default router
