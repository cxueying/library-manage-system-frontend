import { defineStore } from 'pinia';

export const useBookStore = defineStore('book', {
  state: () => ({
    books: JSON.parse(localStorage.getItem('books')) || [],
    currentBook: null,
  }),
  actions: {
    // 设置当前查看的书籍
    setCurrentBook(book) {
      this.currentBook = book;
    },
    // 添加书籍
    addBook(book) {
      this.books.push(book);
      localStorage.setItem('books', JSON.stringify(this.books));
    },
    // 获取指定ID的书籍
    getBookById(id) {
      return this.books.find(book => book.id === id);
    },
  },
}); 