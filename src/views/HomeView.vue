<template>
  <h3>主页</h3>
  <div class="book-show">
    <BookShow v-for="item in books" :key="item.id" :id="item.id" :imageSrc="item.imageSrc" :name="item.name" />
  </div>
</template>

<script>
import api from '@/api';
import BookShow from '../components/BookShow.vue';

export default {
  name: "HomeView",
  data() {
    return {
      books: [
        {
          id: 111,
          name: "test",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc9303d6d.jpeg",
        },
        {
          id: 222,
          name: "test222",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc930a5af.jpeg",
        },
        {
          id: 333,
          name: "test333",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc93141a5.jpeg",
        },
        {
          id: 444,
          name: "test444",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc937de69.jpeg",
        },
        {
          id: 555,
          name: "test555",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc938c653.jpeg",
        },
        {
          id: 666,
          name: "test666",
          imageSrc: "https://img.rbl8nh185.nyat.app:42187/i/2025/01/11/6781cc93c3606.jpeg",
        }
      ],
      user: {}
    }
  },
  components: {
    BookShow
  },
  mounted() {
    api.getBooks().then(res => {
      console.log(res.data);
    });
    this.user = localStorage.getItem('user');
  }
}
</script>

<style scoped>
.book-show {
  display: flex;
  flex-direction: row; /* 子元素横向排列 */
  flex-wrap: wrap; /* 自动换行 */
  align-items: center; /* 居中对齐 */
  gap: 20px; /* 每个内容块之间的间距 */
  justify-content: center;
}
</style>