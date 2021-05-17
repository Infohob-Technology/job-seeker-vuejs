<template>
  <div class="height-forgot-password-card">
    <div class="login-card pb-30">
      <div class="">
        <div>
          <span class="admin-login-screen">Forget Password</span>
        </div>
      </div>
      <div>
        <a-form :form="form" layout="inline" @submit="handleSubmit">
          <div
            v-for="k in form.getFieldValue('keys')"
            :key="k"
            :required="false"
            class="row m-0"
          >
            <div class="col-12">
              <div class="row">
                <div class="col-12 mt-30">
                  <div class="display-flex width-100 text-align-initial">
                    <a-form-item
                      style="width: 100%; height: 48px; margin-right: 0px"
                    >
                      <a-input
                        v-decorator="[
                          `email[${k}]`,
                          {
                            validateTrigger: ['change', 'blur'],
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                        class="searchbox-style width-100 mr-0"
                        placeholder=" Email address *"
                        style="width: 100%; height: 48px"
                      />
                    </a-form-item>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a-form-item
            v-bind="formItemLayoutWithOutLabel"
            class="display-flex mt-22"
          >
            <div class="row m-0 button-class">
              <div class="col-6">
                <a-button
                  class="go-back-button-style"
                  type="primary"
                  @click="handlePrevious"
                >
                  Reset
                </a-button>
              </div>
              <div class="col-6">
                <a-button
                  class="login-button-style"
                  html-type="submit"
                  type="primary"
                >
                  Reset Password
                </a-button>
              </div>
            </div>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

let id = 0;
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, {name: 'dynamic_form_item'});
    this.form.getFieldDecorator('keys', {
      initialValue: [
        {
          degree: '',
          college: '',
          start_date: '',
          end_date: '',
          education_detail: '',
        },
      ],
      preserve: true,
    });
  },
  methods: {
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
      this.nextStep();
      this.form.validateFields((err, values) => {
        if (!err) {
          // Received values of form: => values
        }
      });
    },
  },
};
</script>

<style scoped>
.login-card {
  width: 540px;
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(115, 115, 115, 0.2);
  border-radius: 10px;
  margin: 30vh 30px;
}

.forgot-password-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #505565;
}

.mtb-22 {
  margin-top: 22px;
  margin-bottom: 22px;
}

.height-forgot-password-card {
  height: calc(100vh - 150px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.admin-login-screen {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  /* identical to box height, or 150% */

  /* Text / 02 */

  color: #505565;
}

.ant-col {
  width: 100%;
}

.button-class {
  text-align: end;
}

.mt-22 {
  margin-top: 22px;
}

.text-align-center {
  text-align: center;
}

.text-align-initial {
  text-align: initial;
}

.text-align-end {
  text-align: end;
}

.ant-select-selection--single {
  height: 44px;
}

.date-of-birth-label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-top: 30px;
  text-align: initial;
  color: #505565;
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

.dropdwon-fonts {
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
  width: 100px;
}

.add-more-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #8b90a0;
}

.ant-calendar-picker-input {
  height: 48px;
}

.mt-30 {
  margin-top: 30px;
}

.ant-col {
  width: 100%;
}

.ant-form-item {
  width: 100%;
}

.display-flex {
  display: flex;
}

.mr-0 {
  margin-right: 0px;
}

.mr-20 {
  margin-right: 20px;
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
  /*; */
  width: 100%;
  border-radius: 4px;
  background: #ffffff;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}

.go-back-button-style {
  background: #fafafa;
  border-radius: 4px;
  width: 100%;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
  height: 48px;
  border: 1px solid #fafafa;
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

.login-button-style {
  background: #0385f3;
  border-radius: 4px;
  width: 134px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  height: 48px;
  font-size: 14px;
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  .login-card {
    width: auto;
    max-width: 540px;
  }
}
</style>
