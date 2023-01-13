<template>
  <Observer>
  <div class="bg-scroll m-20">

    <div class="relative flex space-x-5 items-center">
      <div class="flex-grow border-t border-gray-400"/>
      <h1 class="w-100 font-body font-extrabold text-3xl text-center">Hours</h1>
      <div class="flex-grow border-t border-gray-400"/>
    </div>

    <div class="m-5 grid grid-cols-4 gap-2 place-content-end">
      <div v-for="item in scheduleDays" :key="item.day">
        <p class="capitalize font-body text-center text-xl">
          {{ item.day }}
        </p>
        <p class="capitalize font-body text-center font-bold text-xl">
          {{ item.hours }}
        </p>
      </div>
    </div>
  </div>
</Observer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeadlineComponent from '@/components/HeadlineComponent.vue';
import NavBar from '@/components/NavBar/index.vue';
import store from '@/store';

const {
  scheduleStore: {
    scheduleDays,
  },
} = store;

@Options({
  components: {
    HeadlineComponent,
    NavBar,
  },
})

export default class HomeView extends Vue {
  scheduleDays = scheduleDays
}
</script>
