<template>

    <div class="footer">
        <p>父路由</p>
        <div>
            <!-- <router-link to="/footer/child1">子路由1</router-link>
            <router-link to="/footer/child2">子路由2</router-link> -->
            <router-link :to="{name: 'child1'}">子路由1</router-link>
            <router-link :to="{name: 'child2'}">子路由2</router-link>
        </div>
        
        <router-view></router-view>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

</script>

<style scoped>
    .footer {
        background-color: gainsboro;
        width: 400px;
        height: 400px;
        color: rgb(255, 255, 255);
    }
    a {
        margin-left: 15px;
    }
</style>
