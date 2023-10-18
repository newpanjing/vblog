<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
  VPHomeFeatures,
  VPButton
} from 'vitepress/theme'
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
    <h2>最新博文
      <Badge type="tip" :text="latest.length"/>
    </h2>
    <div class="items">
      <Article v-for="item in latest" :key="item.id" :title="item.title" :summary="item.summary"
               :id="item.id"></Article>
    </div>

    <a href="#">
      阅读更多
    </a>
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
</style>