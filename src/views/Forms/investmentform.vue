<script setup lang="ts">
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultCard from '@/components/Forms/DefaultCard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'


const pageTitle = ref('Investment Page')
</script>
<template>
  <DefaultLayout>
    <BreadcrumbDefault :pageTitle="pageTitle" />
    <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
      <div class="flex flex-col gap-9">
        <DefaultCard cardTitle="Investment navigation">
          <div class="flex flex-col gap-5.5 p-6.5">
            <div>
              <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                
              </label>
              <input
                type="text"
                placeholder="Investment product you wish to apply for"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            </div>
        </DefaultCard>
        <DefaultCard cardTitle="Manage Savings Products">
          <div class="flex flex-col gap-5.5 p-6.5">
            <div>
              <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                Savings Account Name
              </label>
              <input
                type="text"
                placeholder="Enter Savings Account Name"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div>
              <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                Initial Deposit Amount
              </label>
              <input
                type="number"
                placeholder="Enter Initial Deposit"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>
            <div>
              <label class="mb-3 block text-sm font-medium text-black dark:text-white">
                Interest Rate (Optional)
              </label>
              <input
                type="number"
                placeholder="Enter Interest Rate"
                class="w-full rounded-lg border-[1.5px] text-black border-stroke bg-transparent py-3 px-5 font-normal outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:text-white dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
              <button
                class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Send Message
              </button>
            </div>
            </div>
        </DefaultCard>
        </div>

      <div class="flex flex-col gap-9">
        
        </div>
    </div>
    </DefaultLayout>
</template>

