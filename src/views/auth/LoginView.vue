<template>
    <div class="login-container">
        <div class="login-form">
            <div class="form-item">
                <input v-model="username" type="text" placeholder="用户名">
            </div>
            <div class="form-item">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            <button @click="login" :disabled="isLoading">
                {{ isLoading ? '登录中...' : '登录' }}
            </button>
            <button @click="goToRegister" class="register-btn">
                注册
            </button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useUserStore } from '@/store/userStore';

export default {
    setup() {
        const userStore = useUserStore();
        const username = ref('');
        const password = ref('');
        const errorMessage = ref('');
        const isLoading = ref(false);

        const login = async () => {
            if (!username.value || !password.value) {
                errorMessage.value = '请输入用户名和密码';
                return;
            }

            try {
                isLoading.value = true;
                errorMessage.value = '';
                
                // 模拟API调用
                if (username.value === 'admin' && password.value === 'admin') {
                    const user = { id: 1, username: username.value, identity: 'admin' };
                    userStore.login(user);
                    window.location.href = '/';
                } else {
                    errorMessage.value = '用户名或密码错误';
                }
            } catch (error) {
                errorMessage.value = '登录失败，请稍后重试';
                console.error('登录错误:', error);
            } finally {
                isLoading.value = false;
            }
        };

        const goToRegister = () => {
            window.location.href = '/register';
        };

        return {
            username,
            password,
            login,
            errorMessage,
            isLoading,
            goToRegister,
        };
    },
};
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.login-form {
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

.form-item {
    margin-bottom: 15px;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #49bbe9;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}

.register-btn {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    color: #49bbe9;
    border: 1px solid #49bbe9;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.register-btn:hover {
    background-color: #f0f9fd;
}
</style>