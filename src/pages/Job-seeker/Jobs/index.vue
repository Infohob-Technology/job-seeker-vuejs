<template>
  <div>
    <div class="main-height">
      <div class="row m-0">
        <div class="col-lg-3 p-0">
          <h6 class="mt-3 show-filter" @click="filters=!filters">
            Show Filters
          </h6>
          <LeftSideMenu :show-filters="filters"/>
        </div>
        <div class="col-lg-6">
          <middle-jobs-section/>
        </div>
        <div class="col-lg-3">
          <right-side-featured-jobs/>
        </div>
        <div v-if="filters" class="overlay" @click="filters=!filters"></div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../common-components/Header.vue';
import LeftSideMenu from './LeftSideFilterMenu';
import RightSideFeaturedJobs from './RightSideFeaturedJobs.vue';
import MiddleJobsSection from './MiddleJobsSection.vue';

export default {
  name: 'JobsIndex',
  components: {

    Header,
    LeftSideMenu,
    RightSideFeaturedJobs,
    MiddleJobsSection,
  },
  data() {
    return {
      current: 0,
      filters: false,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>

<style scoped>
.ant-steps-item-finish
> .ant-steps-item-container
> .ant-steps-item-tail::after {
  background-color: red !important;
}

.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: #ffffff;
}

.p-0 {
  padding: 0;
}

.steps-content {
  /* margin-top: 16px; */
  /* border: 1px dashed #e9e9e9; */
  border-radius: 6px;
  /* background-color: #fafafa; */
  min-height: 200px;
  display: flex;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

.display-flex {
  display: flex;
}

.main-height {
  min-height: calc(100vh - 110px);
}

.show-filter {
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

@media (max-width: 991px) {
  .show-filter {
    display: block;
    cursor: pointer;
    width: 150px;
    margin-left: auto;
    margin-top: 40px;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-align: right;
    padding-right: 20px;
    color: #4E4E5A;
  }

}
</style>
