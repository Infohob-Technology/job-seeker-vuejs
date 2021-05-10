<template>
  <div class="mx-4  vh-100">
    <div class="row">
      <div class="col-12 card">
        <div class="card-body px-0 px-sm-3">

          <!--        <div class="row">-->
          <!--          <div class="col-12 py-2">-->
          <!--            <h3 class="text-primary">Experience</h3>-->
          <!--          </div>-->
          <!--        </div>-->

          <div class="row">
            <div class="col-12">
              <ul class="list_">
                <li class="pr-2">
                  <span class="text-black-50 font_a">Project Title</span><br>
                  <span class="font_b">ABC Private Limited</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Client Name</span><br>
                  <span class="font_b">Charlie Bergson</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Project Status</span><br>
                  <span class="font_b">Completed</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Duration</span><br>
                  <span class="font_b">1 Year 6 Months</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Start Date</span><br>
                  <span class="font_b">Jun - 2019</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Finished on</span><br>
                  <span class="font_b">Dec - 2020</span>
                </li>

              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12 pt-4 pb-2">
              <h6 class="text-black-50">Job Responsibility</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-12 pb-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet.
                Proin gravida dolor sit amet lacus <br>
                accumsan et viverra justo commodo.
                Proin sodales pulvinar sic tempor.
                Sociis natoque penatibus et magnis dis parturient.
              </p>
            </div>
          </div>

          <hr>

          <div class="row pt-2">
            <div class="col-md-12">
              <ul class="list_">
                <li class="pr-2">
                  <span class="text-black-50 font_a">Project Title</span><br>
                  <span class="font_b">ABC Private Limited</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Client Name</span><br>
                  <span class="font_b">Charlie Bergson</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Project Status</span><br>
                  <span class="font_b">Completed</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Duration</span><br>
                  <span class="font_b">1 Year 6 Months</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Start Date</span><br>
                  <span class="font_b">Jun - 2019</span>
                </li>
                <li class="">
                  <span class="text-black-50 font_a">Finished on</span><br>
                  <span class="font_b">Dec - 2020</span>
                </li>

              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12 pt-4 pb-2">
              <h6 class="text-black-50">Job Responsibility</h6>
            </div>
          </div>
          <div class="row">
            <div class="col-12 pb-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean euismod bibendum laoreet.
                Proin gravida dolor sit amet lacus <br>
                accumsan et viverra justo commodo.
                Proin sodales pulvinar sic tempor.
                Sociis natoque penatibus et magnis dis parturient.
              </p>
            </div>
          </div>
          <div class="button-class d-flex justify-content-end">
            <a-button class="go-back-button-style" type="primary"> Cancle</a-button>
            <a-button class="login-button-style" html-type="submit" type="primary">
              Approve Account
            </a-button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
};
</script>

<style scoped>
<
style scoped >
.card {
  width: 1400px;
}

.border_ {
  border-radius: 24px;
}

.list_ {
  list-style: none;
  /*display: inline;*/
  /*margin-left: -38px;*/
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.list_ li {
  display: inline-block;
}

.font_a {
  font-size: 12px;
}

.font_b {
  font-size: 14px;
  font-weight: bold;
}

.btn {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}

@media (max-width: 768px) {

  .list_ {
    flex-direction: column;
  }
}
</style>
