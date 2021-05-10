<template>
  <div class="container justify-content-center vh-100">
    <div class="mt-3">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <div class="form-group">
            <label class="profile" for="profile-summery">Profile Summery</label>
            <a-textarea
              id="profile-summery"
              v-decorator="[
                          `summary`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" class="form-control" name="text" placeholder="Enter Profile Summery here"
              rows="6"></a-textarea>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button :disabled="hasErrors(form.getFieldsError())"
                    class="login-button-style float-right"
                    html-type="submit"
                    type="primary">Proceed
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  el: 'ProfileSummary',

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: 'summary'}),
    };
  },

  methods: {
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched('summary') && getFieldError('summary');
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.$emit('stepSuccess', {summary: values.summary});
        }
      });
    },
  },
};
</script>

<style scoped>
.form-control {
  border-radius: 4px;
}

.btn {
  border-radius: 4px;
}

.profile {
  font-size: 18px;
}
</style>
