<script setup lang="ts">
import DataStatsOne from '@/components/DataStats/DataStatsOne.vue'
import ChartOne from '@/components/Charts/ChartOne.vue'
import ChartThree from '@/components/Charts/ChartThree.vue'
import ChartTwo from '@/components/Charts/ChartTwo.vue'
import ChatCard from '@/components/ChatCard.vue'
import TableOne from '@/components/Tables/TableOne.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import ChartPoint2 from '@/components/Charts/ChartPoint2.vue'
</script>

<template>
  <DefaultLayout>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <DataStatsOne />
    </div>

    <div class="mt-4 grid grid-cols-12 gap-10 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <!-- ====== Chart One Start -->
      <ChartOne />
      <!-- ====== Chart One End -->

      <!-- ====== Chart Two Start -->
      <ChartTwo />
      <!-- ====== Chart Two End -->

      <!-- ====== Chart Three Start -->
      <ChartThree />
      <!-- ====== Chart Three End -->

      <!-- ====== Point2 Start -->
      <div class="col-span-4 xl:col-span-7">
        <ChartPoint2 />
      </div>
      
      <!-- ====== point2 End -->

      <!-- ====== Table One Start -->
      <div class="col-span-12 xl:col-span-8">
        <TableOne />
      </div>
      <!-- ====== Table One End -->

      <!-- ====== Chat Card Start -->
      <ChatCard />
      <!-- ====== Chat Card End -->
    </div>
  </DefaultLayout>
</template>
