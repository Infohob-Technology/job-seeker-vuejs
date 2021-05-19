<template>
  <div class="mt-110 background-color-light">
    <div class="pt-60 text-center  mb-4">
      <span class="label-top-hiring-companie">Top Hiring Companies</span>
    </div>
    <div class="pb-50">
      <top-hiring-companies-cards/>
      <!-- <job-cards />
      <job-cards />
      <job-cards /> -->
    </div>
  </div>
</template>

<script>
import JobCards from '../../common-components/JobCards.vue';
import TopHiringCompaniesCards from './TopHiringCompaniesCards.vue';

export default {
  components: {JobCards, TopHiringCompaniesCards},
};
</script>

<style scoped>
.pading-top-20px-right-80px {
  padding-top: 20px;
  padding-right: 80px;
}

.posted-ago-date-text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
}

.border-browser-job {
  display: table-cell;
  vertical-align: middle;
  border: 1px solid #0385f3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 160px;
  height: 48px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #505565;
}

.mt-10px {
  margin-top: 10px;
}

.ml-10px {
  margin-left: 10px;
}

.pb-50 {
  padding-bottom: 50px;
}

.label-top-hiring-companie {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #0385f3;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 96%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}

.align-item-center {
  align-items: center;
}

.pt-60 {
  padding-top: 60px;
}

.mt-110 {
  margin-top: 110px;
}

.category-box {
  background: #fafafc;
  border-radius: 2px;
  padding: 10px;
  color: #8b90a0;
}

.justify-content-space-around {
  justify-content: space-around;
}

.job-title {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}


.background-color-light {
  background: #f5faff;
}

@media (max-width: 768px) {
  .mt-110 {
    margin-top: 40px;
  }

  .label-top-hiring-companie {
    font-size: 36px;
    line-height: 1.2;
  }
}
</style>
