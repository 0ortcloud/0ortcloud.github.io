<template>
  <MyHeader/>
  <div class="headerSpace"></div>
  <main>
    <router-view></router-view>
  </main>
  
  <MyFooter/>
</template>

<script>
  import MyHeader from './parts/Header.vue';
  import MyFooter from './parts/Footer.vue';
  export default {
  components: { MyHeader, MyFooter }
}
</script>

<style>
.headerSpace {
  height: 5rem;
}
@media (min-width: 1024px) {
  
}
</style>
