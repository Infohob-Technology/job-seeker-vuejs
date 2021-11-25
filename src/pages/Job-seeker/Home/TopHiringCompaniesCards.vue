<template>

  <div class="compainy-container">
    <div class="jobs-cards">
      <div
        class=" align-item-center justify-content-space-around text-center"
      >
        <div class="text-align-left padding-right-20px">
          <img src="@/assets/bookmark.png"/>
        </div>
        <div>
          <img
            class="image-tablet-height"
            src="@/assets/google-icon.png"
            width="50px"
          />
        </div>
        <div class="pb-15">
          <span class="companies-name-logo"> Google Inc. </span>
        </div>
      </div>
    </div>

    <div class="jobs-cards">
      <div
        class="align-item-center justify-content-space-around text-center"
      >
        <div class="text-align-left padding-right-20px">
          <img src="@/assets/bookmark.png"/>
        </div>
        <div>
          <img
            class="image-tablet-height"
            src="@/assets/ibm.png"
          />
        </div>
        <div class="pb-15">
          <span class="companies-name-logo"> AT&T Inc. </span>
        </div>
      </div>
    </div>

    <div class="jobs-cards">
      <div
        class=" align-item-center justify-content-space-around text-center"
      >
        <div class="text-align-left padding-right-20px">
          <img src="@/assets/bookmark.png"/>
        </div>
        <div>
          <img src="@/assets/dell.png"/>
        </div>
        <div class="pb-15">
          <span class="companies-name-logo"> Dell </span>
        </div>
      </div>
    </div>

    <div class="jobs-cards">
      <div
        class=" align-item-center justify-content-space-around text-center"
      >
        <div class="text-align-left padding-right-20px">
          <img src="@/assets/bookmark.png"/>
        </div>
        <div>
          <img
            class="image-tablet-height"
            src="@/assets/Rectangle 11 (2).png"
            
          />
        </div>
        <div class="pb-15">
          <span class="companies-name-logo"> Google Inc. </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.text-align-left {
  text-align: end;
}

.pading-top-20px-right-80px {
  padding-top: 20px;
}

.padding-right-20px {
  padding-right: 20px;
}

.align-item-center {
  align-items: center;
}

.justify-content-space-around {
  justify-content: space-around;
}

.companies-name-logo {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #505565;
}

.compainy-container {
  margin: 0px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.jobs-cards {
  margin: 10px;
  flex: 1 1 250px;
  background-color: #ffffff;
  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  box-shadow: 0px 4px 60px rgba(53, 66, 85, 0.04);
  border-radius: 10px;
  padding: 22px;
}

@media only screen and (max-width: 530px) {
  .compainy-container {
    margin: 0px 30px;
  }
}

@media only screen and (max-width: 480px) {
  .compainy-container {
    margin: 0px 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tablet-margin-10 {
    margin-top: 10px;
  }

  .companies-name-logo {
    font-size: 22px;
  }

  .image-tablet-height {
    height: 90px;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1025px) {
  .tablet-margin-10 {
    margin-top: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .compainy-container {
    margin: 0px
  }
}
</style>
