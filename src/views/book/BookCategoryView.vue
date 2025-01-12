<template>
  <div class="category-container">
    <!-- 分类标题部分 -->
    <div class="category-header">
      <h2 class="category-title">图书分类</h2>
      <div class="category-buttons">
        <button 
          v-for="category in categories" 
          :key="category.id"
          @click="handleCategoryClick(category.id)"
          :class="['category-button', { active: currentCategory === category.id }]"
        >
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- 图书展示部分 -->
    <div class="book-results" v-if="books.length">
      <BookShow
        v-for="book in books"
        :key="book.id"
        :image-src="book.imageSrc"
        :name="book.name"
        :id="book.id"
      />
    </div>

    <!-- 无图书时显示 -->
    <div v-else class="no-results">
      <p>该分类暂无图书</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookShow from '@/components/BookShow.vue'

const currentCategory = ref(1)
const books = ref([])
const categories = ref([
  { id: 1, name: '文学' },
  { id: 2, name: '科技' },
  { id: 3, name: '历史' },
  { id: 4, name: '艺术' },
])

const handleCategoryClick = async (categoryId) => {
  currentCategory.value = categoryId
  // 这里添加实际的分类查询逻辑
  books.value = [
    { 
      id: 111,
      name: '测试书籍1',
      imageSrc: 'https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc9303d6d.jpeg'
    },
    { 
      id: 222,
      name: '测试书籍2',
      imageSrc: 'https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc930a5af.jpeg'
    }
  ]
}

// 初始加载第一个分类的图书
handleCategoryClick(1)
</script>

<style scoped>
.category-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.category-header {
  margin-bottom: 40px;
  text-align: center;
  padding: 20px 0;
  border-bottom: 2px solid #eee;
}

.category-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.category-button {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.category-button:hover {
  background-color: #e0e0e0;
}

.category-button.active {
  background-color: #49bbe9;
  color: white;
}

.book-results {
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

.category-title {
  font-size: 32px;
  color: #333;
  margin: 0 0 20px 0;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: #49bbe9;
  border-radius: 2px;
}
</style>