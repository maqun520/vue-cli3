import Vue from 'vue'
import Router from 'vue-router'
// import Login from './login.routes.js'
Vue.use(Router)

const routerList = []

function importAll(r) {
    r.keys().forEach(route => {
        routerList.push(r(route).default)
    });
}

importAll(require.context('.', false, /\.routes\.js/))

export const router = new Router({
    routes: [
        // Login,
        ...routerList,
        {
            path: '/',
            name: 'index',
            component:  () => import('../views/index')
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component:  () => import('../views/login.vue')
        // }
    ]
})
