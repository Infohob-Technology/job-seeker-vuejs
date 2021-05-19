<template>
  <div>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from '../pages/common-components/Header.vue';
import Footer from '@/pages/common-components/Footer.vue';

export default {
  name: 'SmallFooterLayout',
  components: {Header, Footer},
};

</script>

<style>

</style>
