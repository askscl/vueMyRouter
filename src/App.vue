<template>
    <div>
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

</script>

<style scoped>

</style>
