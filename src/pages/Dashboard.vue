<script>
import Transaction from '../components/Transaction.vue'

export default {
  components: { Transaction },
  data() {
    return {
      transactions: []
    }
  },
  created() {
    const saved = localStorage.getItem('transactions');
    this.transactions = saved ? JSON.parse(saved) : [];
  },
  methods: {
    deleteTransaction(id) {
      this.transactions = this.transactions.filter(item => item.id !== id);
      localStorage.setItem('transactions', JSON.stringify(this.transactions));
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-xl font-bold mb-4">Transaction List</h1>
    <Transaction
        v-for="item in transactions"
        :key="item.id"
        :transaction="item"
        @delete="deleteTransaction"
    />
  </div>
</template>