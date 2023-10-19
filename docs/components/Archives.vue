<script setup>

import {data} from '../utils/generate.data';


import Article from "./Article.vue";


const latest = [];
//读取前50条
let max = 20;
if (max > data.length) {
  max = data.length - 1;
}
for (let i = 0; i < max; i++) {
  latest.push(data[i])
}

</script>

<template>

  <div class="container">
    <div class="head">
      <h2>最新博文
        <Badge type="tip" :text="latest.length"/>
      </h2>

      <a href="/page/1.html">👉🏻阅读更多</a>
    </div>
    <div class="items">
      <Article v-for="item in latest" :key="item.id" :title="item.title" :summary="item.summary"
               :id="item.id"></Article>
    </div>

    <div class="center">
      <a href="/page/1.html">
        👀 阅读更多
      </a>
    </div>
  </div>
</template>

<style scoped lang="less">
.container {
  //display: flex; flex-direction: column; margin: 0 auto;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.items {
  display: flex;
  flex-wrap: wrap;
}
.head{
  display: flex;
  justify-content: space-between;
}
.center{
  padding-top: 20px;
  text-align: center;
}
</style>