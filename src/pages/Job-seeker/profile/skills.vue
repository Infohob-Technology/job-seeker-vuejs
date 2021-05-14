<template>
  <div class="container vh-100">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Select Key Skills</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <div class="row mt-2">
          <div class="col-md-6">
            <a-input
              id="search"
              v-decorator="[
                `Skill`,
                {
                rules: [
                {
                required: true,
                whitespace: true,
                message: 'Please Enter Skills in this field.',
                },
                       ],
                },
                      ]" class="form-control one" placeholder="Type in to Search or add new" type="text">
            </a-input>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-12">
            <a-select
              :default-value="['C', 'C++']"
              class="dropdown-select"
              mode="multiple"
              placeholder="Please select"
              style="width: 100%"
              @change="handleChange"
            >
              <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                {{ (i + 9).toString(36) + i }}
              </a-select-option>
            </a-select>
          </div>
        </div>
      </a-form-item>
      <hr>
      <div class="row float-right buttonss">
        <div class="col-sm-12">
          <button class="btn btn-light px-5" @click="$emit('prevStep')">Go Back</button>
          <button :disabled="hasErrors(form.getFieldsError())"
                  class="login-button-style btn btn-primary px-5"
                  html-type="submit"
                  type="primary">
            Proceed
          </button>
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
  name: 'Skills',
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: 'Skill'}),
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
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },

};
</script>

<style scoped>
h4 {
  font-size: 18px;
}

.container {
  font-family: Open Sans;
}

.buttonss {
  font-size: 14px;
}

.form-control {
  height: 48px;
}

.close_button {
  border-radius: 4px;
}

.one {
  border-radius: 4px;
}
</style>
