<template>
  <div>
    <Header/>
    <router-view/>
    <FooterCard/>
  </div>
</template>

<script>
import FooterCard from '../pages/components/FooterCard';
import Header from '../pages/components/Header.vue';

export default {
  name: 'App',
  components: {Header, FooterCard},
};

</script>

<style>

</style>
