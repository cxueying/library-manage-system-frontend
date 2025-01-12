<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>介绍：这是一个图书管理系统，项目该项目基于 <a href="https://github.com/zhanghuanhao/LibrarySystem">LibrarySystem</a> 进行二次开发</p>
    <p>后端：Spring + Spring MVC + MyBatis</p>
    <p>数据库：Mysql5.7</p>
    <p>前端：vue3</p>
    <p>开发人员：<a href="https://github.com/DengNianxin">DengNianxin</a>、<a href="https://github.com/1799453605">1799453605</a>、<a href="https://github.com/cxueying">cxueying</a></p>
    <p>文档：<a href="https://github.com/Maplelikemiss">Maplelikemiss</a>、<a href="https://github.com/wangchengpengo">wangchengpengo</a></p>
    <p>项目地址：<a href="https://github.com/DengNianxin/BookManageMentSystem">Github</a></p>
  </div>
</template>

<script>
export default {
  name: "AboutView",
}
</script>

<style scoped>
.about{
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about h1, p{
  text-align: center;
  word-break: break-world;
}
a {
  text-decoration: none;
}
</style>