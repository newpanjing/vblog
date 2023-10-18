<script setup>
const props = defineProps(["title", "summary", "id"])
</script>

<template>
  <div class="wrap">
    <div class="box">
      <h2 class="title">
        <a :href="`/archives/${id}`" v-text="title"></a>
      </h2>
      <div class="summary" v-text="summary"></div>
    </div>
  </div>
</template>

<style scoped lang="less">

@media screen and (max-width: 768px){
  .wrap{
    width: 100%!important;
  }
}

.dark{
  .title{
    color: white;
  }
}
.wrap{
  width: 50%;
  padding: 10px;
}
.box {
  display: flex;
  flex-direction: column;
  padding: 24px;

  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;

  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s, background-color 0.25s;

  h2 {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden; /* 隐藏容器中超出部分的内容 */
    text-overflow: ellipsis; /* 超出容器范围的文本显示省略号 */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .summary {
    flex-grow: 1;
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
    height: 80px;
    display: -webkit-box; /* 将容器以弹性盒子形式布局 */
    -webkit-line-clamp: 2; /* 限制文本显示为两行 */
    -webkit-box-orient: vertical; /* 将弹性盒子的主轴方向设置为垂直方向 */
    overflow: hidden; /* 隐藏容器中超出部分的内容 */
    text-overflow: ellipsis; /* 超出容器范围的文本显示省略号 */

  }
}
</style>