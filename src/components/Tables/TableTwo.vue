<script setup lang="ts">
import { ref } from 'vue'

import ProductOne from '@/assets/images/product/Emergency fund.jpg'
import ProductTwo from '@/assets/images/product/groupsaving.jpg'
import ProductThree from '@/assets/images/product/longterm.jpg'
import ProductFour from '@/assets/images/product/shortterm.jpg'

const products = ref([
  {
    id: 1,
    name: 'Emergency Fund',
    category: '4 %',
    price: 10000,
    sold: 2,
    profit: 40500,
    imageSrc: ProductOne
  },
  {
    id: 2,
    name: 'Group Savings',
    category: '12 %',
    price: 15000,
    sold: 4,
    profit: 140500,
    imageSrc: ProductTwo
  },
  {
    id: 3,
    name: 'LongTerm Savings ',
    category: '8 %',
    price: 40000,
    sold: 4,
    profit: 240700,
    imageSrc: ProductThree
  },
  {
    id: 4,
    name: 'ShortTerm Savings',
    category: '22 %',
    price: 20000,
    sold: 2,
    profit: 200000 ,
    imageSrc: ProductFour
  }
])
</script>

<template>
  <div
    class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
  >
    <div class="py-6 px-4 md:px-6 xl:px-7.5">
      <h4 class="text-xl font-bold text-black dark:text-white">INVESTMENT ACCOUNTS</h4>
    </div>

    <!-- Table Header -->
    <div
      class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
    >
      <div class="col-span-3 flex items-center">
        <p class="font-medium">Investment</p>
      </div>
      <div class="col-span-2 hidden items-center sm:flex">
        <p class="font-medium">Interest rate</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="font-medium">Minimum Deposit</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="font-medium">Minimum saving period</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="font-medium">Profit</p>
      </div>
    </div>

    <!-- Table Rows -->
    <div
      v-for="product in products"
      :key="product.id"
      class="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
    >
      <div class="col-span-3 flex items-center">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div class="h-12.5 w-15 rounded-md">
            <img :src="product.imageSrc" :alt="`Product: ${product.name}`" />
          </div>
          <p class="text-sm font-medium text-black dark:text-white">{{ product.name }}</p>
        </div>
      </div>
      <div class="col-span-2 hidden items-center sm:flex">
        <p class="text-sm font-medium text-black dark:text-white">{{ product.category }}</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="text-sm font-medium text-black dark:text-white">Ksh{{ product.price }}</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="text-sm font-medium text-black dark:text-white">{{ product.sold }}</p>
      </div>
      <div class="col-span-1 flex items-center">
        <p class="text-sm font-medium text-meta-3">{{ product.profit }}</p>
      </div>
    </div>
  </div>
</template>
