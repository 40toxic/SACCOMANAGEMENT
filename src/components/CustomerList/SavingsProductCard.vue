<template>
    <div class="savings-product-card">
      <h3>{{ product.name }}</h3>
      <p>Interest Rate: {{ product.interestRate }}</p>
      <p>Minimum Balance: {{ product.minimumBalance }}</p>
      <p>Number of Customers: {{ product.customers.length }}</p>
      <router-link :to="`/savings-products/${product.id}`">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "SavingsProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .savings-product-card {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  </style>