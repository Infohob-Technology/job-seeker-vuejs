
<template>
  <div class="background-footer container-fluid padding-20px">
    <div
      class="footer-main display-flex justify-content-space-between align-item-center"
    >
      <div>
        <div>
          <img src="../../assets/Vector (1).png" />
        </div>
        <div class="">
          <span class="logo-font-footer"> Infohob </span>
        </div>
      </div>
      <div>
        <span class="ml-100px copy-right-text">© Copyright 2020 Infohob</span>
      </div>
      <div class="display-flex justify-content-space-between mr-50px">
        <div class="border-box-images">
          <img src="../../assets/Shape.png" />
        </div>
        <div class="border-box-images">
          <img src="../../assets/Shape (1).png" />
        </div>
        <div class="border-box-images background-color-instagram">
          <img src="../../assets/Shape (1).png" />
        </div>
        <div class="border-box-images">
          <img src="../../assets/Shape (2).png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.border-box-images {
  border: 1px solid #ffffff;
  padding: 11px;
  margin-right: 10px;
}
.justify-content-space-between {
  justify-content: space-between;
}
.footer-main {
  padding: 10px 10px;
}
.logo-font-footer {
  color: #ffffff;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
.padding-20px {
  padding: 5px 0px 5px 30px;
}
.background-footer {
  background: #354255;
}
.ml-100px {
  margin-left: 100px;
}
.mr-50px {
  margin-right: 50px;
}
.background-color-instagram {
  background-color: #0385f3;
}
.line {
  width: 53px;
  height: 0;
  border: 1px solid #c4c4c4;
  margin: 3px;
  display: inline-block;
}
.copy-right-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  text-align: center;

  color: #ffffff;
}
.align-item-center {
  align-items: center;
}
</style>