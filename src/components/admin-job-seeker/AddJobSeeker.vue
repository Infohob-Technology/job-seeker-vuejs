<template>
  <a-modal v-model="visible" :closable="false" :footer="null" class=" modal-cv" @cancel="closeMe" @ok="handleOk">
    <div class="row">
      <div class="col-12">
        <h5>Add New Job Seeker</h5>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-12">
        <a-input
          class="input mb-2"
          placeholder="Job Seeker Name *"
        ></a-input>
        <a-input
          class="input mb-2"
          placeholder="Email Address *"
        ></a-input>
      </div>
    </div>


    <div class="row ">
      <div class="col-6">
        <button class="btn btn-light btn-block" @click="closeMe">
          Cancel
        </button>
      </div>
      <div class="col-6">

        <button class="btn btn-primary btn-block" @click="handleOk">
          Apply
        </button>

      </div>
    </div>
  </a-modal>

</template>

<script>
export default {
  name: 'AddJobSeeker',
  props: ['visible'],
  methods: {
    handleOk() {
      this.$emit('closeMe');
    },
    closeMe() {
      this.$emit('closeMe');
    },
  },
};
</script>

<style scoped>

.modal-cv h5 {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #505565;
  margin-bottom: 0;

}

.modal-cv h3 {
  margin-bottom: 20px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #505565;
}

.input {
  height: 48px
}

</style>
