<template>
    <div>
        链接：
        <router-link to="/user1">/user1</router-link>
        <router-link to="/user2">/user2</router-link>
        <hr />
        <div>
            <router-view></router-view>
            <router-view name="bbb"></router-view>
            <router-view name="ccc"></router-view>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

</script>

<style scoped>
a {
    margin-left: 30px
}
</style>
