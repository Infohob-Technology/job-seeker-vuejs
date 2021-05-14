<template>
  <div class="width-100 mb-100">
    <a-form :form="form" layout="inline" @submit="handleSubmit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="profile-summary-text">Profile Summary</div>
          <div class="display-flex width-100 text-align-initial">
            <a-form-item
              :help="userNameError() || ''"
              :validate-status="userNameError() ? 'error' : ''"
              class="width-100 mr-0"
            >
              <a-textarea
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
                :rows="4"
                class="searchbox-style width-100"
                placeholder="Enter profile summary here"
                style="width: 100%"
              >
              </a-textarea>
            </a-form-item>
          </div>

          <hr/>

          <div class="text-align-end">
            <a-form-item class="mr-0">
              <a-button
                class="search-button-style"
                html-type="submit"
                type="primary"
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
  props: ['nextStep'],
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
      this.nextStep();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log("Received values of form: ", values);
          this.$emit('stepSuccess', {summary: values.summary});
          alert('emit');
        }

      });
    },
  },
};
</script>

<style>
.text-align-initial {
  text-align: initial;
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
