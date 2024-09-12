<template>
    <div ref="wraps" class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"

let wraps = ref<HTMLElement>()
let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)

const startLoading = () => {
    let dom = bar.value as HTMLElement;
    let wrapsDom = wraps.value as HTMLElement;
    wrapsDom.style.display = 'block'
    speed.value = 1
    timer.value = window.requestAnimationFrame(function focusNode() {
        if (speed.value < 90) {
            speed.value += 1
            dom.style.width = speed.value + '%'
            timer.value = window.requestAnimationFrame(focusNode)
        } else {
            speed.value = 1
            window.cancelAnimationFrame(timer.value)
        }
    })


}

const endLoading = () => {
    let dom = bar.value as HTMLElement;
    let wrapsDom = wraps.value as HTMLElement;

    window.requestAnimationFrame(() => {
            speed.value = 100
            dom.style.width = speed.value + '%'
    })
    setTimeout(() => {
        wrapsDom.style.display = 'none'
    }, 500);
    
    
}

// onMounted(() => {
//     startLoading();
//     endLoading();
// })


defineExpose({
    startLoading,
    endLoading
})
</script>

<style lang="scss">
.wraps {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    overflow: hidden;
    z-index: 9999;

    .bar {
        width: 0;
        height: 100%;
        background-color: #409eff;
    }
}

</style>
