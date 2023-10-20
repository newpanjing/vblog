<script setup>
import {VPButton} from "vitepress/theme";
import PDialog from "./PDialog.vue";
import {ref} from "vue";

const reward = () => {
  console.log("打赏")
  visible.value=true;
}

const visible = ref(false)
</script>

<template>
  <div class="alert">
    如果您觉得还不错，可以点击打赏按钮支持我
  </div>
  <div class="action">
    <VPButton @click="reward()" text="打赏"/>
  </div>
  <p-dialog :visible="visible" @close="visible=false">
    <h1 class="title">🤝请我喝一杯咖啡吧☕️</h1>
    <div class="img-box">
      <img src="/wechat.png" alt="wechat"/>
      <img src="/alipay.jpeg" alt="alipay"/>
    </div>
  </p-dialog>
</template>

<style scoped lang="less">
.alert {
  color: #252b3a;
  background-color: #cffcee;
  border-radius: 5px;
  padding: 3px;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}

.title{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.action {
  padding: 20px;
  display: flex;
  justify-content: center;
}
.img-box{
  display: flex;
  justify-content: center;
  gap: 10px;
  img{
    max-width: 500px;
    max-height: 500px;
  }
}

</style>