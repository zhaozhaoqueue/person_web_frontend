import {createRouter, createWebHistory} from 'vue-router'

import Technical from '@/pages/Techincal/index.vue'
import Memories from '@/pages/Memories/index.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/technical'
        },
        {
            name: 'technical',
            path: '/technical',
            component: Technical
        },
        {
            name: 'memories',
            path: '/memories',
            component: Memories
        }
    ]
})

export default router
