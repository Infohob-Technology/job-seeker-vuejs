<template>
  <div class="mt-60 text-align-initial">
    <div>
      <span class="fetured-jobs-title">Featured Jobs</span>
    </div>
    <div class="mt-50">
      <featured-jobs-cards image="ibm.png" :isNew="true"/>
      <featured-jobs-cards image="ibm.png" :isNew="false"/>
      <featured-jobs-cards image="ibm.png" :isNew="false"/>
      <featured-jobs-cards image="ibm.png" :isNew="false"/>
      <featured-jobs-cards image="ibm.png" :isNew="false"/>
      <featured-jobs-cards image="ibm.png" :isNew="false"/>
    </div>
  </div>
</template>

<script>
import FeaturedJobsCards from './FeaturedJobsCards.vue';

export default {
  components: {FeaturedJobsCards},
};
</script>

<style scoped>
.fetured-jobs-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #4e4e5a;
}

.mt-60 {
  margin-top: 60px;
}

.text-align-initial {
  text-align: initial;
}

.mt-50 {
  margin-top: 50px;
}
</style>
