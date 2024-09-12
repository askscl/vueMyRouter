<template>
    <div class="detailPage">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="userDetail">
                    <td>{{ userDetail.id }}</td>
                    <td>{{ userDetail.name }}</td>
                    <td>{{ userDetail.gender }}</td>
                    <td>{{ userDetail.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRoute } from "vue-router"
import {data} from "@/api/list.json"

const route = useRoute()
// const userDetail = route.query
// const userDetail = route.params

const paramsObj = route.params
const userDetail = data.find(v => v.id === Number(paramsObj.id))



</script>

<style scoped>
    .detailPage {
        background-color: rgb(147, 10, 233);
        width: 400px;
        height: 400px;
        color: aliceblue;
    }
</style>
