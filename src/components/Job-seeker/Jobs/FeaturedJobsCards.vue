<template>
  <div class="featured-job-box mt-32 position-relative">
    <div v-if="isNew" class="position-absolute new-featured-box">
      <div><span class="color-new-featured-job-text">New</span></div>
    </div>
    <div class="display-flex justify-content-space-between align-item-center">
      <div>
        <img :src="require('@/assets/' + image + '')" alt=""/>
      </div>
      <div class="mr-25">
        <span class="featured-jobs-right-title"> Front-end Developer </span>
      </div>
    </div>
    <div
      class="display-flex justify-content-space-between align-item-center mt-30"
    >
      <div class="display-flex justify-content-space-between align-item-center">
        <div>
          <i
            aria-hidden="true"
            class="fa fa-map-marker color-map-featured-jobs"
          ></i>
        </div>
        <div class="ml-10">
          <span class="location-featured-jobs">Abuja , Nigeria</span>
        </div>
      </div>
      <div class="display-flex justify-content-space-between align-item-center">
        <div>
          <i aria-hidden="true" class="fa fa-usd color-map-featured-jobs"></i>
        </div>
        <div class="ml-10">
          <span class="location-featured-jobs">2000 - 6000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isNew', 'image'],
};
</script>

<style scoped>
.part-time-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #fafafa;
}

.part-time-label-box {
  background: #0084f4;
  border-radius: 2px;
  width: 88px;
  height: 24px;
  align-items: center;
}

.ml-10 {
  margin-left: 10px;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.new-featured-box {
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

.featured-job-box {
  background: #ffffff;
  /* UI / 03 */

  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 17px 21px 17px 21px;
}

.color-map-featured-jobs {
  color: #a1a4b1;
}

.mt-32 {
  margin-top: 32px;
}

.display-flex {
  display: flex;
}

.align-item-center {
  align-items: center;
}

.mt-30 {
  margin-top: 30px;
}

.justify-content-space-between {
  justify-content: space-between;
}

.mr-25 {
  margin-right: 25px;
}

.featured-jobs-right-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
}

.location-featured-jobs {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
</style>
