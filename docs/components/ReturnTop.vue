<script setup>
import {onMounted, ref} from "vue";

const visible = ref(false)
onMounted(() => {
  window.addEventListener("scroll", (e) => {
    visible.value = window.scrollY > 10;
  })
})

const returnTop=()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
</script>

<template>
  <Transition name="bounce">
    <div v-if="visible" class="return-top" @click="returnTop()">
      <img src="/top.png" alt="top"/>
    </div>
  </Transition>
</template>

<style scoped lang="less">
.return-top {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: var(--vp-c-bg-soft);
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img{
    width: 20px;
    height: 20px;
  }
}

.bounce-enter-active {
  animation: bounce-in 400ms;
}
.bounce-leave-active {
  animation: bounce-out 300ms;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.0);
  }
}
</style>