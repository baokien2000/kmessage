// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'
import LoginView from '@/views/LoginView.vue'
import { getMe, refreshToken } from '@/services/auth'
import { useMe } from '@/stores/me'
import NewView from '@/views/NewView.vue'
import MessageView from '@/views/MessageView.vue'
import MessageEmptyView from '@/views/MessageEmptyView.vue'

const routes = [
    {
        path: '/',
        name: 'Message',
        redirect: '/messages'
    },
    {
        path: '/new',
        name: 'New',
        component: NewView,
        meta: { requiresAuth: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    { path: '/messages/:id', component: MessageView, meta: { requiresAuth: true } },
    { path: '/messages', component: MessageEmptyView, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    let token = Cookies.get('access-token')
    const meStore = useMe()
    if (!token) {
        const res = await refreshToken()
        if (res?.data.accessToken) {
            token = res.data.accessToken
        }
    }
    if (to.name === 'Login' && token) {
        // Redirect to Home if the user is already logged i n
        next({ name: 'Message' })
        return
    }
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
    next()
})

export default router
