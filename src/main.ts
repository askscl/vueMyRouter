import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import LoadingBar from '@/components/LoadingBar/LoadingBar' //进度条



const app = createApp(App)
app.use(router).use(ElementPlus)

const whiteList = ['/','/reg'] // 白名单:不用登录的页面

router.beforeEach((to, from, next) => {
    document.title = to.meta.title as string || '默认标题'
    LoadingBar?.startLoading()
    // 判断用户是否已经登录
    if (whiteList.includes(to.path) || sessionStorage.getItem('token')) {
        // 如果已经登录，则直接放行
        next();
    } else {
        // 如果没有登录，则跳转到登录页面
        // next({path: '/reg'});
        next('/reg')
    }
})

router.afterEach((to, from, next) => {
    LoadingBar?.endLoading()
})

app.mount('#app')
