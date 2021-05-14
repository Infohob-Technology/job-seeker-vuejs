<template>
  <div class="container ">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Project Details</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-6">
              <a-input id="project_title"
                       v-decorator="[
                          `ProjectTitle`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please a-input Project Title in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Project Title" type="text">
              </a-input>
            </div>
            <div class="col-6">
              <select id="employer_name"
                      v-decorator="[
                          `EmployerName`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please a-input Project Title in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Employer Name</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select id="client_name"
                      v-decorator="[
                          `ClientName`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Client Name in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Client Name</option>
              </select>
            </div>
            <div class="col-6">
              <select id="project_status"
                      v-decorator="[
                          `ProjectStatus`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Project Status in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Project Status</option>
              </select>
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
                                message: 'Please enter End Date in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="End Date" type="text">
              </a-input>
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
                                message: 'Please enter Start Date in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Start Date" type="text">
              </a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-6">
              <a-textarea id="education_details"
                          v-decorator="[
                          `EducationDetails`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Education Details in this field.',
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
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: 'project',

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this,
        {name: 'ProjectTitle EmployerName ClientName ProjectStatus EndDate StartDate EducationDetails'}),
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
