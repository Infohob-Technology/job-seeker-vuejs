<template>
  <div class="main-div">
    <!--    <div class="bg-image">-->
    <div class="container-fluid">
      <left-side-back/>
      <recent-jobs/>
      <top-hiring-companies/>
      <talent-opportunity/>
    </div>
    <footer-card/>
  </div>
  <!--  </div>-->
</template>

<script>
import FooterCard from './Job-seeker/FooterCard.vue';
import LeftSideBack from './Job-seeker/LeftSide-Back.vue';
import RecentJobs from './Job-seeker/RecentJobs.vue';
import TalentOpportunity from './Job-seeker/TalentOpportunity.vue';
import TopHiringCompanies from './Job-seeker/TopHiringCompanies.vue';

export default {
  components: {
    LeftSideBack,
    RecentJobs,
    TopHiringCompanies,
    TalentOpportunity,
    FooterCard,
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
  height: 640px;
}

</style>
