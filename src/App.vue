<template>
    <div>
        <Nav></Nav>
        <!-- 路由视图 -->
        <router-view #default="{ route, Component }">
            <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
                <component :is="Component"></component>
            </transition>
        </router-view>
    </div>
    
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import Nav from "./components/Nav.vue"
import "animate.css"

</script>

<style scoped>

</style>
