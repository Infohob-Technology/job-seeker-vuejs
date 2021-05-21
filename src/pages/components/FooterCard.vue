<template>
  <div class="mt-100">
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
    <div
      class="border-bottom pt-48px background-grey footer-container"
    >
      <div class="row justify-content-between">
        <div class="col-md-6">
          <div class="footer-section">
            <div class="text-align-iniital">
              <span class="finds-job-footer-text">Find Jobs in</span>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Business Analyst </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Java Developer </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Sr. Sales Executive </span></router-link>

                </div>
                <div class="footer-text mt-24">

                  <router-link to="/"><span class="post-finds-jobs-in"> Product Manager </span></router-link>

                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Sr. Sales Manager </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Fashion Designer </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Sr. Admin </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/">      <span class="post-finds-jobs-in">
              Sr. Marketing Executive
              </span></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="footer-section">

            <div class="row justify-content-md-end">
              <div class="col-8">
                <div class="text-align-iniital">
                  <span class="finds-job-footer-text">Find Jobs in</span>
                </div>
              </div>
            </div>
            <div class="row justify-content-end">

              <div class="col-md-4">
                <div class="footer-text mt-24">

                  <router-link to="/"><span class="post-finds-jobs-in"> Nairobi </span></router-link>

                </div>
                <div class="footer-text mt-24">

                  <router-link to="/"><span class="post-finds-jobs-in"> Lagos </span></router-link>


                </div>
                <div class="footer-text mt-24">

                  <router-link to="/"><span class="post-finds-jobs-in"> Cape Town </span></router-link>


                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Accra </span></router-link>

                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-text mt-24">

                  <router-link to="/"><span class="post-finds-jobs-in"> Kampala </span></router-link>

                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Maputo </span></router-link>
                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class="post-finds-jobs-in"> Casablanca </span></router-link>

                </div>
                <div class="footer-text mt-24">
                  <router-link to="/"><span class=" post-finds-jobs-in"> Port Elizabeth </span></router-link>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>


    </div>
    <footer-main/>
  </div>
</template>

<script>
import FooterMain from './FooterMain.vue';
import JobCards from './JobCards.vue';

export default {
  components: {JobCards, FooterMain},
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

.mt-5 {
  margin-top: 10px !important;
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
  padding: 10px 100px;
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

.footer-container {
  padding: 30px 80px;
}

.footer-section {
  margin: 10px 40px;
}

.footer-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.city {
  flex: 1 1 auto;
}

@media only screen and (max-width: 1024px) {
  .header {
    background: #354255;
    height: unset;
    padding: 30px 16px 0 16px;
  }

  .header-right {
    display: flex;
    flex-direction: column;

  }

  .header-right a {
    text-align: left;
    padding-left: 0;
  }

  .footer-text {
    display: block;
  }

  .footer-text.mt-24 {
    margin-top: 12px;
  }

  .footer-text > div {
    display: block;
    margin-top: 12px;
  }

  .footer-section {
    margin: 16px 0;
  }

  .footer-container {
    padding: 30px 16px;
  }
}

@media only screen and (max-width: 767px) {


}
</style>
