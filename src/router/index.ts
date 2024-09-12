import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw} from "vue-router"
//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory

declare module 'vue-router'{
    interface RouteMeta{
        title?: string,
        transition?: string
    }
}

//路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "login",
        component: () => import("@/components/login.vue"),
        meta: {
            title: "登录",
            transition: "animate__fadeIn"
        }
    },
    {
        path: "/reg",
        name: "reg",
        component: () => import("@/components/reg.vue")
    },
    {
        path: "/nav",
        name: "nva",
        component: () => import("@/components/nav.vue")
    },
    {
        path: "/list",
        name: "list",
        component: () => import("@/components/list.vue"),
        meta: {
            title: "列表",
            transition: "animate__lightSpeedInRight"
        }
    },
    {
        path: "/detail/:id",
        name: "detail",
        component: () => import("@/components/detail.vue")
    },
    // 嵌套路由
    {
        path: "/footer",
        redirect: "/footer/child1",
        name: "footer",
        component: () => import("@/components/Footer/Footer.vue"),
        children: [
            {
                path: "child1",
                name: "child1",
                component: () => import("@/components/Footer/components/Child1.vue")
            },
            {
                path: "child2",
                name: "child2",
                component: () => import("@/components/Footer/components/Child2.vue")
            }
        ]
    },
    // 命名路由
    {
        path: "/named",
        name: "named",
        // redirect: '/user1',
        // redirect: {
        //     path: '/user1'
        // },
        redirect: to => {
            console.log(to)
            return {
                path: '/user1',
                query: {
                    name: 'lisa'
                }
            }
        },
        // 路径别名
        // alias: "/x1",
        // alias: ["/x1",'/x2','/s1'],
        component: () => import("@/components/NameSpace/Root.vue"),
        children: [
            {
                path:'/user1',
                components: {
                    default: () => import("@/components/NameSpace/components/A.vue")
                }
            },
            {
                path:'/user2',
                components: {
                    bbb: () => import("@/components/NameSpace/components/B.vue"),
                    ccc: () => import("@/components/NameSpace/components/C.vue")
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    // 滚动条记忆控制
    scrollBehavior: (to, from, savePosition) => {
        // 自动控制滚动条
        if(savePosition) {
            return savePosition
        } else {
            return {
                top: 0
            }
        }
        // 手动控制
        /* return {
            top: 500
        } */
        // console.log(savePosition?.top)
        // 异步控制
        /* return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    top: 100
                })
            }, 2000)
        }) */
    },
    routes
})

export default router