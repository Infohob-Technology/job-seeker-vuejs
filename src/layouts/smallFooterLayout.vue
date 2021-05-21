<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../pages/components/Header.vue';
import Footer from '@/pages/components/Footer.vue';

export default {
  name: 'SmallFooterLayout',
  components: {Header, Footer},
};

</script>

<style>

</style>
