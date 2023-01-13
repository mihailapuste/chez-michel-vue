<template>
  <div class="bg-scroll m-20">

    <div class="relative flex space-x-5 items-center">
      <div class="flex-grow border-t border-gray-400"/>
      <h1 class="w-100 font-body font-extrabold text-3xl text-center">Hours</h1>
      <div class="flex-grow border-t border-gray-400"/>
    </div>

    <div class="m-5 grid grid-cols-4 gap-2 place-content-end">
      <div v-for="item in schedule" :key="item.day">
        <p class="capitalize font-body text-center text-xl">
          {{ item.day }}
        </p>
        <p class="capitalize font-body text-center font-bold text-xl">
          {{ item.hours }}
        </p>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeadlineComponent from '@/components/HeadlineComponent.vue';
import NavBar from '@/components/NavBar/index.vue';

@Options({
  components: {
    HeadlineComponent,
    NavBar,
  },
})

export default class HomeView extends Vue {
  schedule: {day: string, hours: string}[] = [
    {
      day: 'mon - tue',
      hours: 'closed',
    },
    {
      day: 'wed - thu',
      hours: '18:00 - 23:00',
    },
    {
      day: 'fri - sat',
      hours: '18:00 - 1:00',
    },
    {
      day: 'sunday',
      hours: '17:00 - 20:00',
    },
  ]
}
</script>
