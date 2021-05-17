<template>
  <div class="width-100 mb-100">
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8 col-offset-2 profile-summary-text">
        <div class="row m-0">
          <div class="col-12">Enter Projects Details</div>
        </div>
      </div>
    </div>
    <a-form :form="form" layout="inline" @submit="handleSubmit">
      <div
        v-for="k in form.getFieldValue('keys')"
        :key="k"
        :required="false"
        class="row m-0"
      >
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row">
            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item>
                  <a-input
                    v-decorator="[
                      `project_title[${k}]`,
                      {
                        validateTrigger: ['change', 'blur'],
                        rules: [
                          {
                            required: true,
                            whitespace: true,
                            message:
                              'Please input passenger\'s name or delete this field.',
                          },
                        ],
                      },
                    ]"
                    class="searchbox-style width-100 mr-0"
                    placeholder="Project Title"
                    style="width: 100%; height: 48px"
                  />
                </a-form-item>
              </div>
            </div>
            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item
                  class="searchbox-style width-100"
                  style="width: 100%; height: 48px"
                >
                  <a-select
                    class="dropdwon-fonts"
                    placeholder="Employee Name"
                    style="width: 100%; height: 48px"
                  >
                    <a-select-option value="1">Option 1</a-select-option>
                    <a-select-option value="2">Option 2</a-select-option>
                    <a-select-option value="3">Option 3</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>

            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item
                  class="searchbox-style width-100"
                  style="width: 100%; height: 48px"
                >
                  <a-select
                    class="dropdwon-fonts"
                    placeholder="Client Name"
                    style="width: 100%; height: 48px"
                  >
                    <a-select-option value="1">Option 1</a-select-option>
                    <a-select-option value="2">Option 2</a-select-option>
                    <a-select-option value="3">Option 3</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>

            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item
                  class="searchbox-style width-100"
                  style="width: 100%; height: 48px"
                >
                  <a-select
                    class="dropdwon-fonts"
                    placeholder="Project Status"
                    style="width: 100%; height: 48px"
                  >
                    <a-select-option value="1">Option 1</a-select-option>
                    <a-select-option value="2">Option 2</a-select-option>
                    <a-select-option value="3">Option 3</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>

            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item>
                  <a-date-picker
                    v-decorator="[
                      `end_date[${k}]`,
                      {
                        validateTrigger: ['change', 'blur'],
                      },
                    ]"
                    class="searchbox-style width-100"
                    placeholder="End date"
                    style="width: 100%; height: 48px"
                  />
                </a-form-item>
              </div>
            </div>

            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item>
                  <a-date-picker
                    v-decorator="[`start_date[${k}]`, {}]"
                    class="searchbox-style width-100"
                    placeholder="Start date"
                    style="width: 100%; height: 48px"
                  />
                </a-form-item>
              </div>
            </div>

            <div class="col-6 mt-30">
              <div class="display-flex width-100 text-align-initial">
                <a-form-item>
                  <a-textarea
                    v-decorator="[
                      `project_details[${k}]`,
                      {
                        validateTrigger: ['change', 'blur'],
                        rules: [
                          {
                            required: true,
                            whitespace: true,
                            message:
                              'Please input Project Details name this field.',
                          },
                        ],
                      },
                    ]"
                    :rows="6"
                    class="searchbox-style width-100"
                    placeholder="Project Details"
                    style="width: 100%"
                  />
                </a-form-item>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row m-0">
        <div class="col-2"></div>
        <div class="col-8">
          <hr/>
        </div>
      </div>
      <div class="row m-0">
        <div class="col-12">
          <div
            class="display-flex width-100 text-align-center text-align-initial"
          >
            <a-form-item
              v-bind="formItemLayoutWithOutLabel"
              class="text-align-center"
            >
              <a-button type="dashed add-more-text" @click="add">
                <a-icon type="plus"/>
                Add more Education
              </a-button>
            </a-form-item>
          </div>
        </div>
      </div>

      <div class="row m-0">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="row m-0 button-class">
            <div class="mt-45px col-6"></div>
            <div class="col-6 mt-45px">
              <a-form-item v-bind="formItemLayoutWithOutLabel" class="">
                <a-button
                  class="go-back-button-style mr-20"
                  type="primary"
                  @click="handlePrevious"
                >
                  Go Back
                </a-button>
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
        <div class="col-12 mt-30">
          <div class="text-align-end"></div>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

let id = 0;
export default {
  props: ['nextStep', 'previousStep'],
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/Header2x.jpg')})`,
        backgroundSize: 'cover',
        height: 'inherit',
      },
      hasErrors,
      //   form: this.$form.createForm(this, { name: "horizontal_login" }),
      formItemLayout: {
        labelCol: {
          //   xs: { span: 24 },
          //   sm: { span: 4 },
        },
        wrapperCol: {
          //   xs: { span: 24 },
          //   sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          //   xs: { span: 24, offset: 0 },
          //   sm: { span: 20, offset: 4 },
        },
      },
    };
  },
  //   mounted() {
  //     this.$nextTick(() => {
  //       // To disabled submit button at the beginning.
  //       this.form.validateFields();
  //     });
  //   },
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
    // Only show error after a field is touched.
    handlePrevious() {
      this.previousStep();
    },
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
    add() {
      const {form} = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },
    remove(k) {
      const {form} = this;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter((key) => key !== k),
      });
    },
  },
};
</script>

<style>
.button-class {
  text-align: end;
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

.dropdwon-fonts {
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
  width: 100px;
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
  width: 160px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
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
