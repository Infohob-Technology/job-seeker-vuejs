<template>
  <!--  <div class="main-div">-->
  <div class="container-fluid">
    <Hero/>
    <recent-jobs/>
    <top-hiring-companies/>
    <talent-opportunity/>
  </div>

  <!--  </div>-->
</template>

<script>

import Hero from './Hero.vue';
import RecentJobs from './RecentJobs.vue';
import TalentOpportunity from './TalentOpportunity.vue';
import TopHiringCompanies from './TopHiringCompanies.vue';

export default {
  components: {
    Hero,
    RecentJobs,
    TopHiringCompanies,
    TalentOpportunity,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Header2x.jpg')})`,
        backgroundSize: 'contain',
        height: 'inherit',
        backgroundRepeatY: 'no-repeat',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  /*height: 640px;*/
}

</style>
