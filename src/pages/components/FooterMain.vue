<template>
  <div class="background-footer">
    <div
      class="footer-main d-flex flex-column flex-sm-row justify-content-space-between align-item-center"
    >
      <div class="mb-2 mb-sm-0">
        <div>
          <img src="@/assets/logo-red.png"/>
        </div>
        <div class="">
          <span class="logo-font-footer"> Infohob </span>
        </div>
      </div>
      <div class="mb-2 mb-sm-0">
        <span class=" copy-right-text">© Copyright 2020 Infohob</span>
      </div>
      <div class="d-flex justify-content-space-between">
        <div class="border-box-images">
          <img src="@/assets/fb.png"/>
        </div>
        <div class="border-box-images">
          <img src="@/assets/insta.png"/>
        </div>
        <div class="border-box-images background-color-instagram">
          <img src="@/assets/pinterst.png"/>
        </div>
        <div class="border-box-images">
          <img src="@/assets/twitter.png"/>
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
  padding: 20px 115px;
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
  /* background: #354255; */
  background: #141414;
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

@media only screen and (max-width: 767px) {
  .padding-20px {
    padding: 5px 0px 5px 0px !important;
  }

  .border-box-images {
    padding: 5px;
    margin-right: 5px;
  }
}

@media only screen and (max-width: 350px) {
  .border-box-images {
    padding: 2px;
    margin-right: 3px;
  }
}

@media only screen and (max-width: 1024px) {
  .footer-main {
    padding: 10px 16px
  }
}
</style>
