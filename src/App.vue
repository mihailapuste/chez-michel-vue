<template>
  <HeadlineComponent headline="Chez Michel"/>
  <NavBar/>

  <router-view/>
</template>

<script setup lang="ts">
import { Options } from 'vue-class-component';
import HeadlineComponent from '@/components/HeadlineComponent.vue';
import NavBar from '@/components/NavBar/index.vue';

Options({
  components: {
    HeadlineComponent,
    NavBar,
  },
});

</script>
