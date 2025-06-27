<template>
  <div class="card flex items-center">
    <!-- Display transaction details here -->
    <div class="flex-1">
      <p class="trans-title">{{ transaction.title }}</p>
      <p class="trans-date">{{ transaction.date }}</p>
      <p class="trans-amount">Rp {{ formattedAmount }}</p>
    </div>
    <button>
      <router-link :to="{ name: 'edit', params: { id: transaction.id } }" class="px-2 py-1 bg-blue-500 text-white rounded">
        Edit
      </router-link>
    </button>
    <button
        @click="$emit('delete', transaction.id)"
        class="ml-2 px-2 py-1 bg-red-500 text-white rounded"
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  props: {
    transaction: Object
  },
  computed: {
    formattedAmount() {
      return Number(this.transaction.amount).toLocaleString('id-ID');
    }
  }
}
</script>

<style scoped>
.card {
  padding: 1rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px rgba(44,62,80,0.06);
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(44,62,80,0.12);
}
.trans-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.2rem;
}
.trans-date {
  font-size: 0.95rem;
  color: #7b8a99;
  margin-bottom: 0.2rem;
}
.trans-amount {
  font-size: 1.05rem;
  font-weight: 500;
  color: #27ae60;
}
</style>