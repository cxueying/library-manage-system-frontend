<template>
    <h3 class="page-title">借阅历史</h3>
    <div class="lend-history">
        <table v-if="lendHistory.length">
            <thead>
                <tr>
                    <th>书名</th>
                    <th>借阅时间</th>
                    <th>归还时间</th>
                    <th>状态</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in lendHistory" :key="record.id">
                    <td>
                        <router-link :to="`/book/${record.bookId}`">
                            {{ record.bookName }}
                        </router-link>
                    </td>
                    <td>{{ record.lendDate }}</td>
                    <td>{{ record.returnDate || '未归还' }}</td>
                    <td>{{ record.status }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else>暂无借阅记录</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useBookStore } from '@/store/bookStore';

export default {
    setup() {
        const userStore = useUserStore();
        const bookStore = useBookStore();
        const lendHistory = ref([]);

        onMounted(() => {
            // 这里模拟获取借阅历史数据
            // 实际应用中应该从后端API获取
            lendHistory.value = [
                {
                    id: 1,
                    bookId: 1,
                    bookName: '三体',
                    lendDate: '2024-03-20',
                    returnDate: null,
                    status: '借阅中'
                },
            ];
        });

        return {
            lendHistory
        };
    }
}
</script>

<style scoped>
.lend-history {
    margin: 20px;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}
a {
    color: #0066cc;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
.page-title {
    color: #2c3e50;
    font-size: 1.8em;
    margin: 20px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #3498db;
    text-align: center;
}
</style>