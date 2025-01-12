<template>
  <!-- 导航栏 -->
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    :router="elMenuRouter"
  >
    <!-- Logo -->
    <el-menu-item index="">
      <img style="width: 50px" src="./assets/Library.svg" alt="Element logo" />
    </el-menu-item>

    <!-- 首页 -->
    <el-menu-item index="/">主页</el-menu-item>

    <!-- 搜索 -->
    <el-menu-item index="/book/search">搜索</el-menu-item>

    <!-- 分类 -->
    <el-menu-item index="/book/category">分类</el-menu-item>

    <!-- 图书管理，仅管理员可见 -->
    <el-sub-menu index="/book" v-if="user.identity === 'admin'">
      <template #title>图书管理</template>
      <el-menu-item index="/book/add">添加图书</el-menu-item>
      <el-menu-item index="/book/edit">编辑图书</el-menu-item>
    </el-sub-menu>

    <!-- 登录按钮，未登录时显示 -->
    <el-menu-item index="/login" v-if="!logined">登录</el-menu-item>

    <!-- 用户信息，已登录时显示 -->
    <el-sub-menu index="/user" v-else>
      <template #title>{{ user.username }}</template>
      <el-menu-item index="/user/info">个人信息</el-menu-item>
      <el-menu-item index="/user/lend">借阅</el-menu-item>
      <el-sub-menu index="/other">
        <template #title>其他</template>
        <el-menu-item index="/setting">设置</el-menu-item>
        <el-menu-item index="/about">关于</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/" @click="handleLogout">退出</el-menu-item>
    </el-sub-menu>
  </el-menu>

  <!-- 路由内容 -->
  <RouterView />
</template>

<script>
import { useUserStore } from './store/userStore'; // 引入 Pinia 的 userStore

export default {
  data() {
    return {
      activeIndex: '/',
      elMenuRouter: true,
    };
  },
  setup() {
    const userStore = useUserStore(); // 使用 Pinia 的状态管理

    const handleLogout = () => {
      userStore.logout(); // 调用 Pinia 的退出方法
      window.location.href = '/'; // 强制刷新页面以确保状态更新
    };


    return {
      user: userStore.user, // 响应式绑定用户信息
      logined: userStore.logined, // 响应式绑定登录状态
      handleLogout,
    };
  },
};
</script>

<style scoped>
/* nth-child(1) 为在左侧的组件数 */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
</style>
