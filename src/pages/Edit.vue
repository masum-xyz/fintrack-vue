<script>
export default {
  data() {
    return {
      transaction: {
        id: '',
        title: '',
        date: '',
        amount: ''
      }
    }
  },
  created() {
    const id = this.$route.params.id;
    const saved = localStorage.getItem('transactions');
    const transactions = saved ? JSON.parse(saved) : [];
    const found = transactions.find(t => t.id == id);
    if (found) {
      this.transaction = { ...found };
    }
  },
  methods: {
    updateTransaction() {
      const saved = localStorage.getItem('transactions');
      let transactions = saved ? JSON.parse(saved) : [];
      transactions = transactions.map(t =>
          t.id == this.transaction.id ? this.transaction : t
      );
      localStorage.setItem('transactions', JSON.stringify(transactions));
      this.$router.push({name: 'Dashboard'});
    },
    deleteTransaction() {
      const saved = localStorage.getItem('transactions');
      let transactions = saved ? JSON.parse(saved) : [];
      transactions = transactions.filter(t => t.id != this.transaction.id);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      this.$router.push({name: 'Dashboard'});
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Edit Transaction</h1>
    <form @submit.prevent="updateTransaction" class="space-y-4">
      <input v-model="transaction.title" placeholder="Title" class="block w-full border p-2" required/>
      <input v-model="transaction.date" type="date" class="block w-full border p-2" required/>
      <input v-model.number="transaction.amount" type="number" placeholder="Amount" class="block w-full border p-2"
             required/>
      <div class="flex gap-2">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">Update</button>
        <button type="button" @click="deleteTransaction" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
      </div>
    </form>
  </div>
</template>