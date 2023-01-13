<template>
  <router-link active-class="font-bold" :to="path">
    <button class="
      capitalize
      font-body
      xs:text-md
      sm:text-lg
      md:text-xl
      text-2xl
      hover:underline
      decoration-gray-400
      decoration-from-font
      underline-offset-8
      ">

        {{label}}
    </button>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
    path: String,
  },
})

export default class NavItem extends Vue {
  label!: string;

  path!: string;
}
</script>
