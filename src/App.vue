<template>
  <div id="app" class="container">
    <app-header />
    <router-view />
  </div>
</template>
 <script>
import Header from "./views/HeaderView.vue";
export default {
  components: {
    appHeader: Header,
  },
};
</script>
 
<style>
.container {
  max-width: 1200px;
  margin: auto;
}
</style>
