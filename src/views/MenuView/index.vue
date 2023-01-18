<script setup lang="ts">
import { onMounted } from 'vue';
import useStore from '@/store';

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

    </div>
  </Observer>
</template>
