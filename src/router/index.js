import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home.vue'
import Application from '@/views/application/Application.vue'
import BusinessLine from '@/views/business/BusinessLine.vue'

Vue.use(Router)

export default new Router({
    routes : [
        {path: '/', redirect: '/home'},
        {
            path: '/home', 
            component: Home,
            children: [
                {
                    path: 'application',
                    component: Application
                },
                {
                    path: "business",
                    component: BusinessLine
                }
            ]
        },
        
    ],
    mode: 'history'
})