import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    // 默认的用户状态（从 localStorage 初始化）
    user: JSON.parse(localStorage.getItem('user')) || { id: 0, username: 'guest', identity: 'guest' },
    logined: !!localStorage.getItem('logined'), // 根据 localStorage 判断是否已登录
  }),
  actions: {
    // 登录时更新状态
    login(user) {
      this.user = user;
      this.logined = true;
      localStorage.setItem('user', JSON.stringify(user)); // 保存用户信息到 localStorage
      localStorage.setItem('logined', true); // 保存登录状态
    },
    // 退出登录时清除状态
    logout() {
      this.user = { id: 0, username: 'guest', identity: 'guest' }; // 重置用户为默认状态
      this.logined = false;
      localStorage.removeItem('user'); // 删除 localStorage 中的用户信息
      localStorage.removeItem('logined'); // 删除登录状态
    },
  },
});