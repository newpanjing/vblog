<script setup>
import {VPButton} from "vitepress/theme";
</script>

<template>
  <div class="box">
    <img src="/404.png" alt="404">
    <h1>404 Not found</h1>
    <VPButton text="返回首页" href="/" />
  </div>
</template>

<style scoped lang="less">
.box {
  img{
    max-height: 200px;
    max-width: 200px;
  }
  height: 80vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-weight: bold;
  }
}
</style>