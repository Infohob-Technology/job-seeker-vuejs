<template>
  <div class="padding-main-jobs-section">
    <div class="display-flex justify-content-space-between text-align-center">
      <div class="display-flex justify-content-space-between text-align-center">
        <div>
          <span class="total-no-featured-jobs"
          >1-10 of 12,000 “Developer” Jobs</span
          >
        </div>
        <div class="ml-15">
          <span class="modify-search-text">Modify Search</span>
        </div>
      </div>
      <div class="display-flex justify-content-space-between text-align-center">
        <div><span class="sort-by-relevant">Sort by :Relevant</span></div>
        <div class="ml-22">
          <img alt="" src="../../../assets/Vector (3).png"/>
        </div>
      </div>
    </div>
    <div class="mt-44">
      <middle-jobs-card :isFeatured="true" image="dell.png"/>
      <middle-jobs-card :isFeatured="true" image="dell.png"/>
      <middle-jobs-card :isFeatured="false" image="dell.png"/>
      <middle-jobs-card :isFeatured="false" image="dell.png"/>
      <middle-jobs-card :isFeatured="false" image="dell.png"/>
      <middle-jobs-card :isFeatured="false" image="dell.png"/>
      <middle-jobs-card :isFeatured="false" image="dell.png"/>
      <middle-jobs-card :isFeatured="true" image="dell.png"/>
      <middle-jobs-card :isFeatured="true" image="dell.png"/>
      <middle-jobs-card :isFeatured="true" image="dell.png"/>
    </div>
    <!-- <div class="mt-44">
      <div class="display-flex align-item-center">
        <div class="box-pagination">
          <span><i class="fas fa-caret-left"></i></span>
        </div>
        <div class="box-pagination"><span>1</span></div>
        <div class="box-pagination"><span>2</span></div>
        <div class="box-pagination"><span>3</span></div>
        <div class="box-pagination">
          <span><i class="fas fa-caret-right"></i></span>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import MiddleJobsCard from './MiddleJobsCard';

export default {
  components: {MiddleJobsCard},
};
</script>

<style scoped>
.box-pagination {
  background: #ffffff;
  /* UI / 05 */

  border: 1px solid #a1a4b1;
  border-radius: 2px;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.new-featured-box-main-jobs {
  text-align: center;
  padding: 0px 8px;
  top: -12px;
  right: 12px;
  width: 50px;
  width: 50px;
  height: 22px;
  background: #ff4c68;
  border-radius: 2px;
}

.color-new-featured-job-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #fafafa;
}

.ml-15 {
  margin-left: 15px;
}

.mt-44 {
  margin-top: 44px;
}

.sort-by-relevant {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4e4e5a;
}

.ml-22 {
  margin-left: 22px;
}

.padding-main-jobs-section {
  padding: 64px 5px 0 5px;
}

.total-no-featured-jobs {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #8b90a0;
}

.display-flex {
  display: flex;
}

.modify-search-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  color: #0084f4;
  text-decoration-line: underline;
}

.justify-content-space-between {
  justify-content: space-between;
}

.text-align-center {
  text-align: center;
}

@media (max-width: 991px) {
  .padding-main-jobs-section {
    padding: 12px 5px 0 5px
  }
}
</style>
