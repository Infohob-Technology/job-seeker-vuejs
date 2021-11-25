<template>
  <div class="jobs-cards">
    <div
      class="display-flex flex-column flex-sm-row pading-top-20px-right-80px align-item-center justify-content-space-around text-center ">
      <div>
        <img src="@/assets/ibm.png"/>
      </div>
      <div>
        <div class="mt-2 mt-sm-0 d-flex justify-content-sm-start justify-content-center"><span class="job-title">Front-end Developer</span>
        </div>
        <div class="display-flex mt-10px">
          <div class="category-box"><span>Web Development</span></div>
          <div class="category-box ml-10px">
            <span>Angular</span>
          </div>
        </div>
      </div>
    </div>
    <div class="ml-10px">
      <hr/>
    </div>
    <div
      class="pl-2 display-flex mt-20px flex-sm-row flex-column align-item-center justify-content-space-between"
    >
      <div class="mt-2 mt-sm-0">
        <span class="posted-ago-date-text"> Posted 2 days ago </span>
      </div>
      <div>
        <div class="mr-2 view-detail">View details <img src="@/assets/arrow-right (1).png" alt="logo"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.pading-top-20px-right-80px {
  padding-top: 20px;
  padding-right: 5px;
}

.mlr-10 {
  margin-left: 10px;
  margin-right: 10px;
}
.view-detail{
  font-style: SemiBold;
  font-size: 14px;
  Line-height: 16px;
  Letter-spacing: 0.5px;
  color:'#141414';
  cursor: pointer;
}
.posted-ago-date-text {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
}

.border-browser-job {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle;
  border: 1px solid #0385f3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 160px;
  height: 48px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #505565;
  transition: all .3s ease-in-out;
}

.border-browser-job:hover {
  background: #0385f3;
  color: #fff;
}

.mt-10px {
  margin-top: 10px;
}

.ml-10px {
  margin-left: 10px;
}

.mt-30px {
  margin-top: 30px;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 96%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}

.align-item-center {
  align-items: center;
}

.category-box {
  background: #fafafc;
  border-radius: 2px;
  padding: 10px;
  color: #8b90a0;
  font-size: 14px;
}

.justify-content-space-around {
  justify-content: space-around;
}

.job-title {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}

.display-flex {
  display: flex;
}

.mt-60px {
  margin-top: 60px;
}

.job-container {
  margin: 0px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.jobs-cards {
  margin: 10px;
  flex: 1 1 250px;
  border: 1px solid #f0f1f3;
  transition: all 0.3s ease-in-out;
  border-radius: 10px;
  padding-bottom: 20px;
}

.jobs-cards:hover {
  box-shadow: 0 4px 10px 2px #e2effb;
}

.justify-content-center {
  justify-content: center;
}

.border-ligth-grey {
  border: 1px solid grey;
  padding: 10px;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 30px;
  border: 2px solid #e5e5e5;
}

/* Toggle text */
p {
  font-weight: bold;
}

/* Checkbox cheked effect */
.checkbox:checked + .toggle::after {
  left: 192px;
}

/* Checkbox cheked toggle label bg color */
.checkbox:checked + .toggle {
  background-color: #ffffff;
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .job-title {
    font-size: 12px;
  }

  .category-box {
    font-size: 10px;
    padding: 4px;
  }

  .border-browser-job {
    width: 80px;
    height: 35px;
    font-size: 10px;
  }
}


</style>
