<template>
    <h1 class="m-8 font-headline text-center text-5xl lg:text-6xl xl:text-7xl">{{ headline }}</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    headline: String,
  },
})

export default class HeadlineComponent extends Vue {
  headline!: string
}
</script>
