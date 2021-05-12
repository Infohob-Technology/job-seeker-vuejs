<template>
  <div class="mt-100 fixed-footer">
    <div class="header">
      <div class="header-right">
        <a class="active" href="#home">About us</a>
        <a href="#jobs">Terms & Conditions</a>
        <a href="#my-application">Privacy Policy</a>
        <a href="#my-account">Blog</a>
        <a href="#my-account">Reviews</a>
        <a href="#my-account">Careers</a>
        <a href="#my-account">Contact us</a>
      </div>
    </div>
    <div class="background-footer container-fluid padding-20px">
      <div
        class="footer-main display-flex justify-content-space-between align-item-center"
      >
        <div>
          <div>
            <img src="../../../assets/Vector (1).png"/>
          </div>
          <div class="">
            <span class="logo-font-footer"> Infohob </span>
          </div>
        </div>
        <div>
          <span class="ml-100px copy-right-text">© Copyright 2020 Infohob</span>
        </div>
        <div class="display-flex justify-content-space-between mr-50px">
          <div class="border-box-images">
            <img src="../../../assets/Shape.png"/>
          </div>
          <div class="border-box-images">
            <img src="../../../assets/Shape (1).png"/>
          </div>
          <div class="border-box-images background-color-instagram">
            <img src="../../../assets/Shape (1).png"/>
          </div>
          <div class="border-box-images">
            <img src="../../../assets/Shape (2).png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterMain from './../FooterMain.vue';

export default {
  components: {FooterMain},
};
</script>

<style scoped>
.text-align-iniital {
  text-align: initial;
}

.border-bottom {
  border-bottom: 1px solid #ffffff;
}

.mt-24 {
  margin-top: 24px;
}

.fixed-footer {
  /* position: fixed; */
  left: 0;
  bottom: 0;
  width: 100%;
}

.display-flex {
  display: flex;
}

.finds-job-footer-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  color: #5aaadf;
}

.post-finds-jobs-in {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Text / Inverse */

  color: #ffffff;
}

.background-grey {
  background: #354255;
}

.pt-48px {
  padding: 48px 0;
}

.ml-40px {
  margin-left: 40px;
}

.justify-content-space-between {
  justify-content: space-between;
}

.justify-content-space-around {
  justify-content: space-around;
}

.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 30px;
  height: 80px;
  background: #232c3a;
}

.header a {
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 5px 25px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
}

.border-box-images {
  border: 1px solid #ffffff;
  padding: 11px;
  margin-right: 10px;
}

.justify-content-space-between {
  justify-content: space-between;
}

.footer-main {
  padding: 10px 10px;
}

.logo-font-footer {
  color: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}

.padding-20px {
  padding: 5px 0px 5px 30px;
}

.background-footer {
  background: #354255;
}

.ml-100px {
  margin-left: 100px;
}

.mr-50px {
  margin-right: 50px;
}

.background-color-instagram {
  background-color: #0385f3;
}

.line {
  width: 53px;
  height: 0;
  border: 1px solid #c4c4c4;
  margin: 3px;
  display: inline-block;
}

.copy-right-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;

  color: #ffffff;
}

.align-item-center {
  align-items: center;
}
</style>
