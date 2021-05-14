<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Experience Details</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-md-6">
              <a-input
                id="employer"
                v-decorator="[
                          `EmployerName`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Employer Name" type="text"></a-input>
            </div>
            <div class="col-6">
              <select
                id="job_title"
                v-decorator="[
                          `JobTitle`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Employer Name in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Job Title</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select
                id="city"
                v-decorator="[
                          `City`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">City</option>
              </select>
            </div>
            <div class="col-6">
              <select id="country"
                      v-decorator="[
                          `Country`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Country</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select id="work_type"
                      v-decorator="[
                          `WorkType`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Work Type</option>
              </select>
            </div>
            <div class="col-6">
              <a-input id="salary"
                       v-decorator="[
                          `Salary`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Salary" type="text"></a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <a-input id="end_date"
                       v-decorator="[
                          `EndDate`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="End Date" type="text"></a-input>
            </div>
            <div class="col-6">
              <a-input id="start_date"
                       v-decorator="[
                          `StartDate`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Start Date" type="text">

              </a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-6">
              <a-textarea id="education_details" v-decorator="[
                          `EducationDetails`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" cols="" name="text" placeholder="Education Details"
                          rows="6"></a-textarea>
            </div>
          </div>
          <div class="row justify-content-center text-center my-4">
            <div class="col-12">
              <a-button class="btn btn-light">
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
            <a-button class="btn btn-light mr-3 px-5" @click="$emit('prevStep')">Go Back</a-button>
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
  name: 'experience',

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this,
        {name: 'EmployerName JobTitle City Country WorkType Salary EndDate StartDate EducationDetails'}),
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
  },
};
</script>

<style scoped>
.form-control {
  height: 48px
}
</style>
