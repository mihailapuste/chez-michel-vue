<template>
  <HeadlineComponent headline="Chez Michel"/>
  <NavBar/>

  <router-view/>
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

export default class App extends Vue {}
</script>
