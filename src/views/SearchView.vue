<template>
  <div class="search-container">
    <!-- 搜索框部分 -->
    <div class="search-header">
      <div class="search-input-container">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="请输入搜索内容"
          class="search-input"
          @keyup.enter="handleSearch"
        >
        <button @click="handleSearch" class="search-button">
          搜索
        </button>
      </div>
    </div>

    <!-- 搜索结果展示部分 -->
    <div class="search-results" v-if="searchResults.length">
      <BookShow
        v-for="book in searchResults"
        :key="book.id"
        :image-src="book.imageSrc"
        :name="book.name"
        :id="book.id"
      />
    </div>

    <!-- 无搜索结果时显示 -->
    <div v-else-if="hasSearched" class="no-results">
      <p>暂无搜索结果</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookShow from '../components/BookShow.vue'

const searchQuery = ref('')
const searchResults = ref([])
const hasSearched = ref(false)

const handleSearch = async () => {
  if (!searchQuery.value.trim()) return
  
  hasSearched.value = true
  // 这里添加实际的搜索逻辑
  searchResults.value = [
    { 
      id: 111,
      name: '111',
      imageSrc: 'https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc9303d6d.jpeg'
    },
    { 
      id: 222,
      name: '222',
      imageSrc: 'https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc930a5af.jpeg'
    }
  ]
}
</script>

<style scoped>
.search-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-header {
  margin-bottom: 30px;
}

.search-input-container {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  font-size: 16px;
}

.search-button {
  padding: 10px 20px;
  background-color: #49bbe9;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 16px;
}

.search-button:hover {
  background-color: #45a049;
}

.search-results {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.no-results {
  margin-top: 40px;
  text-align: center;
  color: #666;
  font-size: 16px;
}
</style> 