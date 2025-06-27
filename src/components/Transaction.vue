<template>
  <div class="card flex items-center">
    <!-- Display transaction details here -->
    <div class="flex-1">
      <div>{{ transaction.title }}</div>
      <div>{{ transaction.date }}</div>
      <div>{{ transaction.amount }}</div>
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
}
</style>