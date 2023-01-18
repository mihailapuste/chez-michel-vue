<template>
  <div class="relative flex space-x-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
      <NavItem v-for="item in items" :label="item.name" :path="item.path" :key="item.path" />
    <div class="flex-grow border-t border-gray-400"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavItem from './components/NavItem.vue';

@Options({
  components: {
    NavItem,
  },
})

export default class NavBar extends Vue {
  items: { name: string, path: string }[] = [
    { name: 'home', path: '/' },
    { name: 'menu', path: '/menu' },
    { name: 'reserve', path: '/reserve' },
  ];
}

</script>
