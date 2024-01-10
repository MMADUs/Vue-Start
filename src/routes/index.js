import { createRouter, createWebHistory } from "vue-router";
import Home from '../view/Home.vue'
import About from '../view/About.vue'
import PostDetail from '../view/post.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component :Home
    },
    {
        path: '/about',
        name : About,
        component : About
    },
    {
        path: '/post/:id',
        name: 'post-detail',
        component: PostDetail,
        props: true
    }
]

const router = createRouter ({
    history: createWebHistory('/'),
    routes
})

export default router