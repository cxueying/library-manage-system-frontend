<template>
    <button @click="login">登录</button>
</template>

<script>
import { useUserStore } from '@/store/userStore'; // 引入 Pinia 的 useUserStore

export default {
    setup() {
        const userStore = useUserStore(); // 引入 Pinia 的 userStore

        const login = () => {
            const user = { id: 1, username: 'admin', identity: 'admin' }; // 模拟登录成功的用户数据
            userStore.login(user); // 调用 store 的 login 方法
            window.alert('登录成功！');
            window.location.href = '/'; // 跳转到首页
        };

        return {
            login,
        };
    },
};
</script>