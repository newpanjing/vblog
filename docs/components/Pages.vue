<script setup>
import {computed} from 'vue'

const props = defineProps(['params'])

import {data} from '../utils/generate.data';
import Article from "./Article.vue";

//根据当前的页数来获取数据
const pageData = [];

let page = props.params.pkg;
let total=props.params.total;

//根据当前的页数来截取data数组
let pageSize = 10;
let start = (page - 1) * pageSize;
let end = page * pageSize;
if (end > data.length) {
  end = data.length - 1;
}
for (let i = start; i < end; i++) {
  pageData.push(data[i])
}


const prev = computed(() => {
  let p = page;
  if (p > 2) {
    p--;
  }
  return `/page/${p}.html`;
});

const next = computed(() => {

  let p = page;
  if (p < Math.ceil(data.length / pageSize)) {
    p++;
  }
  return `/page/${p}.html`;
});
</script>

<template>
  <div class="container">
    <div class="items">
      <Article v-for="item in pageData" :key="item.id" :data="item"></Article>
    </div>
  </div>
  <div class="container">
    <div class="links">
      <span>第{{ page }}/{{total}}页</span>
      <a :href="prev">上一页</a>
      <a :href="`/page/${i}.html`" :class="{active:i==page}" v-for="i in total" v-text="i"></a>
      <a :href="next">下一页</a>
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

.head {
  display: flex;
  justify-content: space-between;
}

.center {
  padding-top: 20px;
  text-align: center;
}
.links{
  display: flex;
  justify-content: center;
  //元素间距
  gap: 10px;
  .active{
    color: var(--docsearch-logo-color);
  }
}
</style>