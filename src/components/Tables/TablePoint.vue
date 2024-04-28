<script setup lang="ts">
import { ref } from 'vue'



const brandData = ref([
  {
    
    name: 'Regina Maina',
    Savings: 30000,
    revenues: '200,000',
    sales: 0,
    conversion: 900
  },
  {
    
    name: 'Ngugi wa Thiongo',
    Savings: 150000 ,
    revenues: '20,000',
    sales: 3000,
    conversion: 15000
  },
  {
    
    name: 'Grace Adhiambo',
    Savings: 20000,
    revenues: '2,000,000',
    sales: 400000,
    conversion: 190000
  },
  {
    
    name: 'Fred Matiangi',
    Savings: 50000,
    revenues: '240000',
    sales: 1000,
    conversion: 20000
  },
  {
    
    name: 'James Karis',
    Savings: 20000,
    revenues: '60000',
    sales: 1500,
    conversion: 8000
  }
])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1"
  >
    <h4 class="mb-6 text-xl font-semibold text-black dark:text-white">RECORDS SAVINGS PERFOMANCE</h4>

    <div class="flex flex-col">
      <div class="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
        <div class="p-2.5 xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base text-red">CUSTOMER</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Emergency Fund</h5>
        </div>
        <div class="p-2.5 text-center xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Group Savings</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Long-Term Goals</h5>
        </div>
        <div class="hidden p-2.5 text-center sm:block xl:p-5">
          <h5 class="text-sm font-medium uppercase xsm:text-base">Short-Term Goals</h5>
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
          <p class="text-black dark:text-white">{{ brand.Savings }}KSH</p>
        </div>

        <div class="flex items-center justify-center p-2.5 xl:p-5">
          <p class="text-meta-3">{{ brand.revenues }}KSH</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-black dark:text-white">{{ brand.sales }}KSH</p>
        </div>

        <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
          <p class="text-meta-5">{{ brand.conversion }}KSH</p>
        </div>
      </div>
    </div>
  </div>
</template>
