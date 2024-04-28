<template>
    <div class="savings-products">
      <h2>Savings Products</h2>
      <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div class="flex flex-col gap-9">
          <SavingsProductCard
            v-for="product in savingsProducts"
            :key="product.id"
            :product="product"
          />
        </div>
        <div class="flex flex-col gap-9">
          <CustomerList :customers="customers" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SavingsProductCard from "@/components/SavingsProductCard.vue";
  import CustomerList from "@/components/CustomerList.vue";
  
  export default {
    name: "SavingsProducts",
    components: {
      SavingsProductCard,
      CustomerList,
    },
    data() {
      return {
        savingsProducts: [
          {
            id: 1,
            name: "Savings Account",
            interestRate: 0.05,
            minimumBalance: 500,
            customers: [
              {
                id: 1,
                name: "John Doe",
                email: "john.doe@example.com",
                balance: 1000,
              },
              {
                id: 2,
                name: "Jane Smith",
                email: "jane.smith@example.com",
                balance: 2000,
              },
            ],
          },
          {
            id: 2,
            name: "Certificate of Deposit",
            interestRate: 0.07,
            term: 12,
            customers: [
              {
                id: 3,
                name: "Bob Johnson",
                email: "bob.johnson@example.com",
                balance: 5000,
              },
            ],
          },
        ],
        customers: [
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            savingsProduct: "Savings Account",
            balance: 1000,
          },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com",savingsProduct: "Savings Account",
            balance: 2000,
          },
          {
            id: 3,
            name: "Bob Johnson",
            email: "bob.johnson@example.com",
            savingsProduct: "Certificate of Deposit",
            balance: 5000,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .savings-products {
    border: 1px solid #ccc;
    padding: 1rem;
    margin-bottom: 1rem;
  }
  </style>