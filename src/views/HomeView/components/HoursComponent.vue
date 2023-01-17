<script lang="ts" setup>
import { defineProps } from 'vue';
import { IDisplayHours } from '@/store/scheduleStore';

defineProps<{ displayHours: IDisplayHours[] }>();
</script>

<template>
  <Observer>
    <div class="relative flex space-x-5 items-center">
      <div class="flex-grow border-t border-gray-400"/>
      <h1 class="w-100 font-body font-extrabold text-3xl text-center">Hours</h1>
      <div class="flex-grow border-t border-gray-400"/>
    </div>

    <div class="m-5 grid grid-cols-4 gap-2 place-content-end">
      <div v-for="item in displayHours" :key="item.hours">
        <p class="capitalize font-body text-center text-xl">
          {{ item.days }}
        </p>
        <p class="capitalize font-body text-center font-bold text-xl">
          {{ item.hours }}
        </p>
      </div>
    </div>
</Observer>
</template>
