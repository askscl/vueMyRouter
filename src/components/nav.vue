<template>

    <div>
        <h2>路由学习</h2>
        <!-- 菜单导航栏 -->
        <div>
            <button @click="pre()">后退</button>
            <button @click="next()">前进</button>
            <!-- <router-link to="/">登录</router-link>
            <router-link to="/reg">注册</router-link> -->
            <button @click="loginOut">退出</button>
            <!-- 采用replace进行页面的跳转会同样也会创建渲染新的Vue组件，但是在history中其不会重复保存记录，而是替换原有的vue组件； -->
            <!-- replace：替换而不是加入一个新的历史记录。 -->
            <router-link replace :to="{ name: 'login' }">登录</router-link>
            <router-link  :to="{ name: 'reg' }">注册</router-link>
        </div>
        <div>
            <router-link  :to="{ name: 'list' }">列表页</router-link>
            <router-link  :to="{ name: 'footer' }">嵌套路由</router-link>
            <router-link  :to="{ name: 'named' }">命名路由</router-link>
            <router-link  to="/demo1">demo1</router-link>
            <router-link  to="/demo2">demo2</router-link>

            <!-- 会刷新页面，不建议使用 -->
            <!-- <a href="/">登录</a>
            <a href="/reg">注册</a> -->
        </div>
        <div v-if="false">
            <button @click="toPage('/')">登录</button>
            <button @click="toPage('/reg')">注册</button>
            <button @click="toPage2('login')">登录</button>
            <button @click="toPage2('reg')">注册</button>
        </div>
        <hr />
    </div>

</template>



<script setup lang="ts">
import { useRouter } from "vue-router"
const router = useRouter()



const toPage = (path: string) => {
    // 字符串
    // router.push(path)
    // router.replace(path)
    // 对象式-path
    router.push({ path: path, query: { id: 1 } })
}

const toPage2 = (name: string) => {
    // 对象式--命名路由
    router.push({ name: name, params: { id: 1 } })
}

//前进与后退=========================================================================
const pre = () => {
    router.back()
}

const next = () => {
    router.go(1)
}


const loginOut = () => {
    // 路由删除
    router.removeRoute('demo1')
    router.removeRoute('demo2')
    console.log(router.getRoutes());

    sessionStorage.removeItem('token')
    router.push({ name: 'login' })

}
</script>

<style scoped>
a {
    margin-left: 15px;
}
</style>
