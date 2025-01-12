<template>
  <div class="user-info-container">
    <div class="info-card">
      <div class="card-header">
        <h3>个人信息</h3>
        <button class="edit-btn" @click="toggleEdit" :class="{ 'editing': isEditing }">
          {{ isEditing ? '取消编辑' : '修改信息' }}
        </button>
      </div>

      <div class="avatar-section">
        <img :src="userInfo.avatar || defaultAvatar" alt="用户头像" class="avatar">
      </div>

      <form class="user-form" @submit.prevent="saveUserInfo">
        <div class="form-group">
          <label>用户名</label>
          <input type="text" v-model="userInfo.username" disabled>
        </div>

        <div class="form-group">
          <label>真实姓名</label>
          <input type="text" v-model="userInfo.realName" :disabled="!isEditing">
        </div>

        <div class="form-group">
          <label>邮箱</label>
          <input type="email" v-model="userInfo.email" :disabled="!isEditing">
        </div>

        <div class="form-group">
          <label>手机号码</label>
          <input type="tel" v-model="userInfo.phone" :disabled="!isEditing">
        </div>

        <div class="form-group">
          <label>借阅证号</label>
          <input type="text" v-model="userInfo.cardNumber" disabled>
        </div>

        <div class="form-group" v-if="isEditing">
          <div class="button-container">
            <button type="submit" class="submit-btn">保存修改</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import api from '@/api'
const defaultAvatar = 'https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc9303d6d.jpeg'

const user = JSON.parse(localStorage.getItem('user'));

const isEditing = ref(false)
// const userInfo = ref({
//   username: '',
//   realName: '',
//   email: '',
//   phone: '',
//   cardNumber: '',
//   avatar: ''
// })

const toggleEdit = () => {
  isEditing.value = !isEditing.value
}

const fetchUserInfo = async () => {
  try {

    await api.getUserInfo(user.id).then(res => {
      userInfo.value = res.data
    });
    userInfo.value = response.data
  } catch (error) {
    console.error('获取用户信息失败:', error)
    ElMessage.error('获取用户信息失败')
  }
}

const saveUserInfo = async () => {
  try {
    // await updateUserInfo(userInfo.value)
    await api.updateUser(id, userInfo.value)
    ElMessage.success('保存成功！')
    isEditing.value = false
  } catch (error) {
    console.error('保存用户信息失败:', error)
    ElMessage.error('保存失败，请重试')
  }
}

onMounted(() => {
  fetchUserInfo()
})
</script>

<style scoped>
.user-info-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.info-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 20px;
}

.card-header h3 {
  margin: 0;
  color: #333;
  font-size: 20px;
}

.avatar-section {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}

.user-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: #4a90e2;
}

.form-group input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.submit-btn {
  background-color: #4a90e2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #357abd;
}

@media (max-width: 600px) {
  .user-info-container {
    padding: 10px;
  }

  .info-card {
    padding: 15px;
  }
}

.edit-btn {
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  background-color: transparent;
  border: 1px solid #4a90e2;
  color: #4a90e2;
}

.edit-btn:hover {
  background-color: #4a90e2;
  color: white;
}

.edit-btn.editing {
  background-color: #ff4d4f;
  border-color: #ff4d4f;
  color: white;
}

.edit-btn.editing:hover {
  background-color: #ff7875;
  border-color: #ff7875;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>