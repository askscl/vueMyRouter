<template>

    <div>
        我是新路由1<button @click="pre()">后退</button>
    </div>

</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()
const pre = () => {
    router.back()
}
</script>

<style scoped>

</style>
