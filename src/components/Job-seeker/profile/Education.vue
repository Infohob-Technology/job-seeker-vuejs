<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
      <div class="row justify-content-center mt-3">
        <div class="col-12">
          <h4>Enter Education Details</h4>
        </div>
      </div>
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-6">
              <a-input

                id="degree"
                v-decorator="[
                          `degree`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Degree/Certification" type="text"></a-input>
            </div>
            <div class="col-6">
              <a-input id="college"
                       v-decorator="[
                          `college`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="College/University/Academy" type="text"></a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <a-date-picker class="w-100 date-picker" placeholder="End Date" @change="onChange"/>
            </div>
            <div class="col-6">
              <a-date-picker class="w-100 date-picker" placeholder="Start Date" @change="onChange"/>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-6">
              <a-textarea

                id="education_details" v-decorator="[
                          `educationDetail`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" name="text" placeholder="Education Details" rows="6"></a-textarea>
            </div>
          </div>
          <div class="row justify-content-center text-center my-4">
            <div class="col-12">
              <a-button :disabled="hasErrors(form.getFieldsError())"
                        class="login-button-style btn btn-light"
                        html-type="submit"
                        type="primary">
                Add More Education
              </a-button>
            </div>
          </div>
        </div>
      </a-form-item>
      <hr>
      <a-form-item>
        <div class="row float-right">
          <div class="col-12">
            <a-button class="btn btn-light mr-3 px-5" @click="$emit('prevStep')">
              Go Back
            </a-button>
            <a-button
              :disabled="hasErrors(form.getFieldsError())"
              class="login-button-style btn btn-primary px-5"
              html-type="submit"
              type="primary">
              Proceed
            </a-button>
          </div>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: 'education',

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: 'degree college endDate stratdate educationDetail'}),
    };
  },

  methods: {
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('userName') && getFieldError('userName');
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$emit('stepSuccess', values);
        }
      });
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },

};
</script>

<style scoped>
.form-control {
  height: 48px;
}


</style>
