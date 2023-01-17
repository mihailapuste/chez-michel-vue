<script setup lang="ts">
import { onMounted } from 'vue';
import useStore from '@/store';
import HoursComponent from './components/HoursComponent.vue';

const {
  scheduleStore: {
    displayHours,
    getScheduleDays,
  },
} = useStore();

onMounted(() => {
  getScheduleDays();
});

</script>

<template>
  <Observer>
    <div class="bg-scroll m-20">
      <HoursComponent :displayHours="displayHours" />
    </div>
  </Observer>
</template>
