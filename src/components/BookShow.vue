<template>
    <!-- <h4>图书封面</h4> -->
    <RouterLink :to="link" >
        <div class="container">
            <img :src="imageSrc" alt="">
            <p>{{ name }}</p>
        </div>
    </RouterLink>
</template>

<script>
export default {
    name: 'BookShow',
    data() {
        return {
            link: "/book/details/" + this.id
        }
    },
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: inherit;
}
.container {
  width: 200px; /* 限制父 div 的宽度 */
  height: 300px; /* 限制父 div 的高度 */
  overflow: hidden; /* 如果内容超出 div，则隐藏 */
  display: flex; /* 如果需要对齐子元素，可以使用 flex 布局 */
  flex-direction: column; /* 垂直排列 */
  align-items: center; /* 水平居中 */
  justify-content: center; /* 垂直居中 */
  border: 1px solid #ccc; /* 边框方便观察大小 */
}

.container img {
  max-width: 100%; /* 限制 img 宽度为父 div 的宽度 */
  max-height: 90%; /* 限制 img 高度为父 div 的高度 */
  object-fit: contain; /* 使图片保持宽高比 */
}

.container p {
  font-size: 14px; /* 限制文字大小 */
  text-align: center; /* 文字居中 */
  margin: 10px 0; /* 添加上下间距 */
  word-break: break-word; /* 如果有长文本，允许换行 */
}
</style>