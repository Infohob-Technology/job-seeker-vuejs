<template>
  <div class="row hero-section">
    <div class="left-side-search-box col-lg-8 child1">
      <div class="title-font">
        <span> Aenean euismod bibendum laoreet </span>
      </div>
      <div class="second-title">
        <span>
          Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
          accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
        </span>
      </div>
      <div class="search-box-all mt-30">
        <div class="searchbox-child-main">
          <a-form :form="form" layout="inline" @submit="handleSubmit">
            <div class="search-btn-group">
              <div class="search-btn2">
                <a-form-item
                  :help="userNameError() || ''"
                  :validate-status="userNameError() ? 'error' : ''"
                >
                  <a-input
                    v-decorator="[
                      'userName',
                      {
                        rules: [
                          {
                            required: true,
                            message: 'Please input your username!',
                          },
                        ],
                      },
                    ]"
                    autocomplete="off"
                    class="searchbox-style"
                    placeholder="Job title or keywords"
                  >
                    <a-icon
                      slot="prefix"
                      style="color: rgba(0, 0, 0, 0.25)"
                      type="search"
                    />
                  </a-input>
                </a-form-item>
              </div>

              <div class="search-btn1">
                <a-form-item
                  :help="userNameError() || ''"
                  :validate-status="userNameError() ? 'error' : ''"
                >
                  <a-select
                    class="dropdwon-fonts"
                    default-value="Job Category"

                    @change="handleChange"
                  >
                    <a-select-option value="jack"> Jack</a-select-option>
                    <a-select-option value="lucy"> Lucy</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
              <div class="search-btn1">
                <a-form-item

                  :help="userNameError() || ''"
                  :validate-status="userNameError() ? 'error' : ''"
                >
                  <a-select
                    class="dropdwon-fonts"
                    default-value="Location"
                    @change="handleChange"
                  >
                    <a-select-option value="jack"> Jack</a-select-option>
                    <a-select-option value="lucy"> Lucy</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
              <div class="search-btn1">
                <a-form-item>
                  <a-button
                    :disabled="hasErrors(form.getFieldsError())"
                    class="search-button-style"
                    html-type="submit"
                    type="primary"
                  >
                    Search
                  </a-button>
                </a-form-item>
              </div>
            </div>
          </a-form>
          <!-- <div>input type 1</div>
            <div>input type 2</div>
            <div>input type 3</div>
            <div>button</div> -->
        </div>
      </div>
      <div class="display-flex  tablet-mt flex-wrap align-item-center">
        <div class="display-flex search-activity flex-wrap ml-20 align-item-center">
          <div class="mt-30 past-searches">
            <span class="past-searches-text">Past Searches</span>
          </div>
          <div class="past-searches-result ml-10px mt-30">
            <span
            >Business analyst -
              <span class="result-in-green">(07 new)</span></span
            >
          </div>
          <div class="past-searches-result ml-10px mt-30">
            <span
            >Product Manager -
              <span class="result-in-green">(07 new)</span></span
            >
          </div>
          <div class="past-searches-result ml-10px mt-30">
            <span
            >Sales executive -
              <span class="result-in-green">(07 new)</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- display-non-tablet -->
    <div class="profile-box-parent col-lg-4 child2">
      <div class="ml-auto profile-box">
        <div class="display-flex align-item-center">
          <div>
            <img src="@/assets/user.png"/>
          </div>
          <div>
            <div class="profile-name">Jaydon Lipshutz</div>
            <div class="profile-job-title">UI / UX Designer</div>
          </div>
        </div>
        <hr/>
        <div class="display-flex justify-content-between align-item-center">
          <div>
            <span class="profile-completeness-text">Profile completeness</span>
          </div>
          <div>
            <span class="profile-completeness-ratio">Medium - (60%)</span>
          </div>
        </div>
        <div>
          <input min="0" readonly type="range"/>
        </div>
        <div class="display-flex update-profile-green-box">
          <div>
            <i
              aria-hidden="true"
              class="fa fa-exclamation-circle color-green"
            ></i>
          </div>
          <div>
            <span class="update-profile-font">Update profile</span>
          </div>
          <div>
            <span class="incase-getting-hired-font"
            >Increase changes of getting hired</span
            >
          </div>
        </div>
        <div class="display-flex mt-20">
          <div>
            <span class="acitivy-response-font">Activity & Responses</span>
          </div>
        </div>
        <div class="activity-box-wrapper">
          <div class="box-div-actvity">
            <div class="">
              <span class="no-of-opening">20</span>
            </div>
            <div class="">
              <span class="shortlisted-you-font">Shortlisted You</span>
            </div>
          </div>
          <div class="box-div-actvity ml-10px">
            <div class="">
              <span class="no-of-opening">20</span>
            </div>
            <div class="">
              <span class="shortlisted-you-font">Shortlisted You</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: 'Hero',
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Header2x.jpg')})`,
        backgroundSize: 'cover',
        height: 'inherit',
      },
      hasErrors,
      form: this.$form.createForm(this, {name: 'horizontal_login'}),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    passwordError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('password') && getFieldError('password');
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleChange(e) {
      console.log(e);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mt-40 {
  margin-top: 40px;
}

.ml-30 {
  margin-left: 30px;
}

.result-in-green {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  /* display: flex; */
  align-items: center;

  color: #4affae;
}

.past-searches-result {
  background: rgba(35, 44, 58, 0.3);
  height: 38px;
  padding: 8px 32px;
  color: #ffffff;
  border-radius: 50px;
}

.past-searches-text {
  font-family: 'Open sans', sans-serif;
  letter-spacing: 1px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
}

.flex-wrap {
  flex-wrap: wrap;
}

.search-button-style {
  background: #ff4c68;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'Open Sans', sans-serif;
  color: #ffffff;
  border: 0;
  width: 91%;
  margin: 0px 10px;
  height: 48px;
}

.dropdwon-fonts {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
  padding-left: 10px;
  border-left: 1px solid #D3D4D8;

}

.searchbox-style {
  border-radius: 4px;

  background: #ffffff;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  font-size: 14px;
}

.mt-30 {
  margin-top: 30px;
}

.searchbox-child-main {
  background: rgba(35, 44, 58, 0.3);
  padding: 10px 10px;
}

.search-box-all {
  padding: 10px 10px;
  border: 1px solid #f0f1f3;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  max-width: 840px;
}

.no-of-opening {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #505565;
}

.shortlisted-you-font {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #505565;
}

.update-profile-font {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #505565;
}

.activity-box-wrapper {
  display: flex;
  column-gap: 8px;
  margin-top: 10px;
  justify-content: stretch;
}

.box-div-actvity {
  border: 1px solid #f0f1f3;
  padding: 2px 12px;
  width: 50%;
  text-align: initial;
  border-radius: 2px;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.acitivy-response-font {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #505565;
}

.ml-10px {
  margin-left: 10px;
}

.mt-10 {
  margin-top: 10px;
}

.mt-20 {
  margin-top: 20px;
}

.incase-getting-hired-font {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
}

.main-div {
  height: 640px;
}

.display-flex {
  display: flex;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}

.update-profile-green-box {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0px;

  /* position: absolute; */
  /* width: 400px; */
  height: 114px;
  left: 20px;
  top: 211px;

  background: #eafff6;
  border-radius: 8px;
}

.profile-box-parent {
  /*margin-top: 72px;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.justify-content-between {
  justify-content: space-between;
}

.profile-box {
  /*max-height: 440px;*/
  border: 1px solid #f0f1f3;
  max-width: 440px;
  width: 100%;
  border-radius: 8px;
  padding: 32px 20px 32px 20px;
  background-color: #ffffff;
}

.left-side-search-box {
  text-align: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.second-title {
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
  max-width: 760px;
}

.color-green {
  color: #01e37e;
}

.title-font {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 100%;
  color: #ffffff;
  margin-bottom: 8px;
}

.align-item-center {
  align-items: center;
}

.profile-name {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #273238;
}

.profile-completeness-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #505565;
}

.profile-completeness-ratio {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffae10;
}

.profile-job-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #0385f3;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"] {
    overflow: hidden;
    width: 100%;
    -webkit-appearance: none;
    background-color: #f0f1f3;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    height: 6px;
    -webkit-appearance: none;
    color: #13bba4;
    margin-top: -1px;
  }

  input[type="range"]::-webkit-slider-thumb {
    width: 10px;
    -webkit-appearance: none;
    height: 10px;
    cursor: ew-resize;
    /* background: #434343; */
    box-shadow: -80px 0 0 80px #01e37e;
  }
}

/** FF*/
input[type="range"]::-moz-range-progress {
  background-color: #01e37e;
}

input[type="range"]::-moz-range-track {
  background-color: #f0f1f3;
}

/* IE*/
input[type="range"]::-ms-fill-lower {
  background-color: #01e37e;
}

input[type="range"]::-ms-fill-upper {
  background-color: #f0f1f3;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tablet-mt {
    margin-top: 30px;
  }

  .search-button-style {
    width: initial;
    font-size: 11px;
  }

  .display-non-tablet {
    display: none;
  }

  .title-font {
    font-size: 25px;
  }

  .second-title {
    font-size: 18px;
  }

  .profile-name {
    font-size: 15px;
  }

  .profile-job-title {
    font-size: 12px;
  }

  .update-profile-green-box {
    height: 70px;
    padding: 4px 0px;
  }

  .update-profile-font {
    font-size: 12px;
  }

  .acitivy-response-font {
    font-size: 10px;
  }

  .no-of-opening {
    font-size: 12px;
  }

  .incase-getting-hired-font {
    font-size: 12px;
  }

  .profile-completeness-ratio {
    font-size: 12px;
  }

  .profile-completeness-text {
    font-size: 12px;
  }

  .profile-box {
    /*width: 280px;*/
    /*height: 390px;*/
  }

  .left-side-search-box {
    width: 100%;
    padding: 30px 0px;
    display: block;
  }

  .past-searches-result {
    padding: 8px 15px;
  }

  .profile-box-parent {
    /*margin-top: 25px;*/
  }
}

@media only screen and (min-width: 992px) and (max-width: 1025px) {
  .tablet-mt {
    margin-top: 20px;
  }

  .search-button-style {
    width: initial;
    font-size: 11px;
  }

  .left-side-search-box {
    width: 80px;
  }

  .title-font {
    font-size: 25px;
  }

  .second-title {
    font-size: 18px;
  }

  .profile-name {
    font-size: 15px;
  }

  .profile-job-title {
    font-size: 12px;
  }

  .update-profile-green-box {
    height: 70px;
    padding: 4px 0px;
  }

  .update-profile-font {
    font-size: 12px;
  }

  .acitivy-response-font {
    font-size: 10px;
  }

  .no-of-opening {
    font-size: 12px;
  }

  .incase-getting-hired-font {
    font-size: 12px;
  }

  .profile-completeness-ratio {
    font-size: 12px;
  }

  .profile-completeness-text {
    font-size: 12px;
  }

  .profile-box {
    width: 280px;
    /*height: 390px;*/
  }

  .left-side-search-box {
    width: 640px;
  }

  .profile-box-parent {
    /*margin-top: 25px;*/
  }
}

.hero-section {

  background-image: url(/static/img/Header2x.f0f86d2.jpg);
  background-size: cover;
  background-repeat-y: no-repeat;
  padding: 60px 80px;
  /*display:flex;*/
  /*!* flex-wrap: wrap; *!*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}

.hero-section .child1 {
  /*flex:0 1 824px!important;*/
  /*margin-right:56px;*/
}

.hero-section .child2 {
  /*flex:0 1 440px!important;*/
  /*margin:72px 0px;*/
}

.search-btn-group {
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
}

.search-btn1 {
  flex: 1 1 100px;


}

.search-btn2 {
  flex: 2 2 200px;

}

.ant-form-inline .ant-form-item {
  display: inline-block;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}

@media only screen and (max-width: 510px) {

  .title-font span {
    font-size: 36px;
  }

  .second-title {
    font-size: 17px;
  }

  .left-side-search-box {
    padding: 30px 30px;
  }
}

@media only screen and (max-width: 400px) {
  .past-searches-result {
    height: 25px;
    padding: 1px 25px;
  }

  .left-side-search-box {
    padding: 30px 30px;
  }
}

@media only screen and (max-width: 350px) {
  .left-side-search-box {
    padding: 30px 10px;
  }
}

@media only screen and (max-width: 767px) {
  .hero-section {
    padding: 40px 10px;
    background-size: cover;
    height: unset;
  }

  .search-box-all {
    max-width: 600px;
  }

  .profile-box-parent {
    justify-content: flex-end;
  }

  .search-activity {
    display: unset;
  }

  .past-searches-result {
    margin-top: 0;
    padding: 4px 10px;
    height: unset;
    background: none;
    margin-left: 0;
  }

  .profile-box-parent {
    padding: 0 30px;
    padding-bottom: 30px;
  }

  .profile-box {
    width: 100%;
  }

  .past-searches {
    margin-top: 0;
    padding: 10px;
    background: none;
    display: block;
  }

  .search-btn1,
  .search-btn2 {
    /*flex: none;*/
    /*margin-bottom: 4px;*/
  }

  .search-button-style {
    /*width: 100%;*/
    /*margin: 0;*/
  }
}

@media only screen and (max-width: 991px) {
  .hero-section {

  }

  .profile-box {
    margin: 0 auto;
    margin-top: 30px;
  }

  .search-btn-group {
    display: flex;
    flex-direction: column;
    flex: none;
    /*padding: 10px;*/
  }

  .search-btn1,
  .search-btn2 {
    flex: none;
    margin-bottom: 4px;
  }

  .search-button-style {
    width: 100%;
    margin: 0;
  }

  .dropdwon-fonts {
    padding-left: 0;
    border: none;
  }
}


</style>
