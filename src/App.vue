<script>

export default {
  data() {
    return {
      activeIndex: "/",
      elMenuRouter: true
    }
  },
  methods: {
    
  }
}
</script>

<template>
  <!-- router="true" 启用 vue-router 模式。 启用该模式会在激活导航时以 index 作为 path 进行路由跳转  -->
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" :router="elMenuRouter">

    <el-menu-item index="">
      <img style="width: 50px" src="./assets/Library.svg" alt="Element logo" />
    </el-menu-item>

    <el-menu-item index="/">主页</el-menu-item>

    <el-menu-item index="/search">搜索</el-menu-item>
    
    <el-sub-menu index="">
      <template #title>其他</template>
      <el-menu-item index="/userInfo">个人信息</el-menu-item>
      <el-menu-item index="/setting">设置</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
    </el-sub-menu>

  </el-menu>
  <RouterView />
</template>

<style scoped>
/* nth-child(1) 为在左侧的组件数 */
.el-menu--horizontal>.el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
