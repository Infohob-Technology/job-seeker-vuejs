<template>
  <div class="container vh-100">
    <div class="row mt-4">
      <div class="col-12">
        <h4>Upload Documents</h4>
      </div>
    </div>
    <div class="jumbotron">
      <div class="row mb-2">
        <div class="col-12 text-center">
          <img class="h-40 w-auto" src="./upload.png"/>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12 text-center">
          <h5 class="drop_document">Drop your Documents here, or <a href="#">browse</a></h5>
        </div>
      </div>
      <div class="row py-2">
        <div class="col-12 text-center">
          <h6 class="support">SUPPORT: PDF, JPGS, DOCS</h6>
        </div>
      </div>
    </div>
    <hr>
    <div class="row float-right">
      <div class="col-12">
        <button class="btn btn-light px-5" @click="$emit('prevStep')">Go Back</button>
        <button class="btn btn-primary px-5" @click="uploadFile">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Documents',
  methods: {
    uploadFile() {
      this.$emit('stepSuccess', {fileUrl: 'file url'});
    },
  },
};
</script>

<style scoped>
.drop_document {
  font-family: Open Sans;
  font-style: normal;
  font-size: 16px;
}

.support {
  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
}

.container {
  font-family: Open Sans;
  font-style: normal;
}
</style>
