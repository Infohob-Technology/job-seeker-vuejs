<template>

    <a-modal v-model="visible" :footer="null" @cancel="closeMe" @ok="handleOk">
      <div class="row my-2">
        <div class="col-12 text-center">
          <img height="64" src="tick mark.png" width="65"/>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 text-center">
          <p>You have successfully applied for <br>
            "Business Analyst Position" at Google India Private Limited
          </p>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 text-center">
          <button class="btn btn-primary px-5" type="button">Go to Your Applications</button>
        </div>
      </div>
    </a-modal>

</template>

<script>
export default {
  name: 'model',
  props: [
    'visible',
  ],
  data() {
    return {};
  },
  methods: {
    handleOk(e) {
      this.$emit('closeMe');
    },
    closeMe(e) {
      this.$emit('closeMe');
    },
  },
};
</script>

<style scoped>
.button_ {
  /*background-color: #73d13d;*/
  /*color: white;*/
}
</style>
