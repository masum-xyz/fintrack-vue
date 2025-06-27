<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Add Transaction</h1>
    <form @submit.prevent="submitForm" class="space-y-4">
      <input v-model="title" type="text" placeholder="Title" class="input" required />
      <input v-model="date" type="date" class="input" required />
      <input v-model.number="amount" type="number" placeholder="Amount" class="input" required />
      <button type="submit" class="btn">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
      date: '',
      amount: null
    }
  },
  methods: {
    submitForm() {
      // Get existing transactions from localStorage or empty array
      const transactions = JSON.parse(localStorage.getItem('transactions') || '[]');
      // Create new transaction object
      const newTransaction = {
        id: Date.now(),
        title: this.title,
        date: this.date,
        amount: this.amount
      };
      // Add new transaction to the list
      transactions.push(newTransaction);
      // Save back to localStorage
      localStorage.setItem('transactions', JSON.stringify(transactions));
      // Clear form
      this.title = '';
      this.date = '';
      this.amount = null;
      // Optionally, redirect or show a success message
      alert('Transaction added!');
    }
  }
}
</script>

<style scoped>
.input { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 6px; }
.btn { background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; }
</style>