<template>
    <div class="register-container">
        <div class="register-form">
            <div class="form-item">
                <input v-model="username" type="text" placeholder="用户名">
            </div>
            <div class="form-item">
                <input v-model="password" type="password" placeholder="密码">
            </div>
            <div class="form-item">
                <input v-model="confirmPassword" type="password" placeholder="确认密码">
            </div>
            <button @click="register" :disabled="isLoading">
                {{ isLoading ? '注册中...' : '注册' }}
            </button>
            <button @click="goToLogin" class="login-btn">
                返回
            </button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useUserStore } from '@/store/userStore';

export default {
    setup() {
        const userStore = useUserStore();
        const username = ref('');
        const password = ref('');
        const confirmPassword = ref('');
        const errorMessage = ref('');
        const isLoading = ref(false);

        const register = async () => {
            if (!username.value || !password.value || !confirmPassword.value) {
                errorMessage.value = '请填写所有字段';
                return;
            }

            if (password.value !== confirmPassword.value) {
                errorMessage.value = '两次输入的密码不一致';
                return;
            }

            try {
                isLoading.value = true;
                errorMessage.value = '';
                
                // 这里添加实际的注册API调用
                // 模拟注册成功
                const user = { id: Date.now(), username: username.value, identity: 'guest' };
                userStore.login(user); // 注册成功后直接登录
                window.location.href = '/';

                const response = await api.register({
                    username: username.value,
                    password: password.value
                });

                // // 假设后端返回格式为 { code: 200, data: { user: {...} } }
                // if (response.data.code === 200) {
                //     const user = response.data.data.user;
                //     userStore.login(user);
                //     window.location.href = '/';
                // } else {
                //     errorMessage.value = response.data.message || '注册失败';
                // }
            } catch (error) {
                errorMessage.value = '注册失败，请稍后重试';

                // if (error.response) {
                //     errorMessage.value = error.response.data.message || '注册失败';
                //     if (error.response.status === 409) {
                //         errorMessage.value = '用户名已存在';
                //     }
                // } else {
                //     errorMessage.value = '注册失败，请检查网络连接';
                // }
                
                console.error('注册错误:', error);
            } finally {
                isLoading.value = false;
            }
        };

        const goToLogin = () => {
            window.location.href = '/login';
        };

        return {
            username,
            password,
            confirmPassword,
            register,
            errorMessage,
            isLoading,
            goToLogin,
        };
    },
};
</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.register-form {
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

.login-btn {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    color: #49bbe9;
    border: 1px solid #49bbe9;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.login-btn:hover {
    background-color: #f0f9fd;
}

.error-message {
    color: red;
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
}
</style> 