<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Personal Information</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-6">
              <a-input id="name"
                       v-decorator="[
                          `Name`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Name in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Name" type="text"></a-input>
            </div>
            <div class="col-6">
              <select id="email_address"
                      v-decorator="[
                          `EmailAddress`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Email Address in this field.',
                              },
                            ],
                          },
                        ]" class="form-control" type="text">
                <option value="0">Email Address</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select id="city"
                      v-decorator="[
                          `City`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input City this field.',
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
                                message: 'Please input Country this field.',
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
              <a-input id="mobile_number"
                       v-decorator="[
                          `MobileNumber`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Mobile Number this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Mobile Number" type="text"></a-input>
            </div>
            <div class="col-6">
              <a-input id="linked_in"
                       v-decorator="[
                          `LinkedIn`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input LinkedIN Profile this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="Linked-In Profile URL" type="text"></a-input>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h6>Date of Birth</h6>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-4">
              <select id="day"
                      v-decorator="[
                          `day`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control">
                <option value="0">Day</option>
              </select>
            </div>
            <div class="col-4">
              <select id="month"
                      v-decorator="[
                          `month`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control">
                <option value="0">Month</option>
              </select>
            </div>
            <div class="col-4">
              <select id="year"
                      v-decorator="[
                          `year`,
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
                <option value="0">Year</option>
              </select>
            </div>
          </div>
          <div class="row py-2">
            <div class="col-12">
              <h6>N. Y. S. C. Number</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <a-input id="nysc"
                       v-decorator="[
                          `NYSC`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input N. Y. S. C Number this field.',
                              },
                            ],
                          },
                        ]" class="form-control" placeholder="A00 - 0 - 0 - 0 - 0 - 0 - 0 - 0"
                       type="text"></a-input>
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
            Complete Profile
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
  name: 'myProfile',

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
  },

};
</script>

<style scoped>
.form-control {
  height: 48px;
}

.btn {
  height: 48px
}
</style>
