<script setup lang="ts">
import { ref } from 'vue'



const brandData = ref([
  {
    
    name: 'Regina Maina',
    visitors: 54,
    revenues: '200k',
    sales: 1000,
    conversion: 4.8
  },
  {
    
    name: 'Ngugi wa Thiongo',
    visitors: 150,
    revenues: '400.5k',
    sales: 300,
    conversion: 4.3
  },
  {
    
    name: 'Grace Adhiambo',
    visitors: 20,
    revenues: '30000',
    sales: 400,
    conversion: 3.7
  },
  {
    
    name: 'Fred Matiangi',
    visitors: 500,
    revenues: '24000',
    sales: 100,
    conversion: 2.5
  },
  {
    
    name: 'James Karis',
    visitors: 200,
    revenues: '60000',
    sales: 390,
    conversion: 4.2
  }
])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">RECORDS SAVINGS TRANSACTION</h4>

    <div class="flex flex-col">
      <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">CUSTOMER</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Deposit Transactions</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Withdrawal Transactions</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Transfer Transactions</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Interest Transactions</h5>
        </div>
      </div>

      <div
        v-for="(brand, key) in brandData"
        :key="key"
        :class="`grid grid-cols-3 sm:grid-cols-5 ${
          key === brandData.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'
        }`"
      >
        <div class="flex items-center gap-3 p-2.5 xl:p-5">
          <div class="flex-shrink-0">
            
          </div>
          <p class="hidden text-black dark:text-white sm:block">{{ brand.name }}</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-black dark:text-white">{{ brand.visitors }}K</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">{{ brand.revenues }}</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">{{ brand.sales }}</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">{{ brand.conversion }}%</p>
        </div>
      </div>
    </div>
  </div>
</template>
