<template>
  <div class="width-100 mb-100">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="profile-summary-text">Select Key Skills</div>
          <div class="display-flex width-100 text-align-initial">
            <a-form-item class="width-100 mr-0">
              <div class="dropbox">
                <a-upload-dragger
                  name="files"
                  class="searchbox-style width-100"
                  style="width: 100%"
                  action="/upload.do"
                >
                  <p class="ant-upload-drag-icon">
                    <a-icon type="inbox" class="color-drop-box" />
                  </p>
                  <p class="ant-upload-text upload-text-doc">
                    Drop your Documents here , or browse
                  </p>
                  <p class="ant-upload-hint support-doc-text">
                    Support: PDF, JPGS, DOcs.
                  </p>
                </a-upload-dragger>
              </div>
            </a-form-item>
          </div>
          <hr />

          <div class="text-align-end">
            <a-form-item class="mr-0">
              <a-button
                type="primary"
                @click="handlePrevious"
                class="go-back-button-style mr-20"
              >
                Go Back
              </a-button>
              <a-button
                type="primary"
                html-type="submit"
                class="search-button-style"
              >
                Proceed
              </a-button>
            </a-form-item>
          </div>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  props: ["nextStep", "previousStep"],
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "horizontal_login" }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    handlePrevious() {
      this.previousStep();
    },
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.nextStep();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style>
.color-drop-box {
  color: #8b90a0 !important;
}
.text-align-initial {
  text-align: initial;
}
.mr-20 {
  margin-right: 20px;
}
.go-back-button-style {
  background: #fafafa;
  border-radius: 4px;
  width: 160px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
  border: 1px solid #fafafa;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 100%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}
.support-doc-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #8b90a0;
}
.upload-text-doc {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #505565;
}
.text-align-end {
  text-align: end;
}
.ant-col {
  width: 100%;
}
.display-flex {
  display: flex;
}
.mr-0 {
  margin-right: 0px;
}
.width-100 {
  width: 100%;
}
.mt-45px {
  margin-top: 45px;
}
.mb-100 {
  margin-bottom: 50px;
}
.searchbox-style {
  /* width: 700px; */
  /* height: 48px; */
  border-radius: 4px;
  background: #ffffff;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.profile-summary-text {
  text-align: initial;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #505565;
  margin-bottom: 30px;
}
.search-button-style {
  background: #0385f3;
  border-radius: 4px;
  width: 160px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}
</style>