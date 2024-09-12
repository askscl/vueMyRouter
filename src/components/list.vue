<template>
    <div class="logPage">
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in data">
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                        <button @click="toDetail(item)">详情</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { data } from "@/api/list.json"
import { useRouter } from "vue-router"
const router = useRouter()


interface Item {
    id: number;
    name: string;
    age: number;
    gender: string;
    phone: string;
    address: string;
}
const toDetail = (item: Item): void => {
    // 方式一：
    /* router.push({
        path: "/detail",
        query: item
    }) */

    // 方式二：在4.x中已弃用
    /* router.push({
        name: "detail",
        params: item
    }) */

    // 方式三：动态路由传参
    router.push({
        name: "detail",
        params: {
            id: item.id
        }
    })
}
</script>

<style scoped>
    .logPage {
        background-color: green;
        width: 400px;
        height: 400px;
        color: aliceblue;
    }
</style>
