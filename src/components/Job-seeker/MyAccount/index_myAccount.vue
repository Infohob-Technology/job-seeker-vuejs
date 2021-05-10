<template>
  <div class=" ">
    <div class="row py-4">
      <div class="col-sm-6">
        <h2>My Account</h2>
      </div>
      <div class="col-sm-6">
        <button class="btn btn-primary float-right" type="button">
          Update Profile
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 card">
        <div class="card-body px-0 px-sm-3">
          <div class="row">
            <div class="col-lg-2">
              <div class="mb-4 mb-lg-0">
                <img alt="Profile Image" class="mx-auto d-block " src="@/assets/user.png"/>
              </div>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <span class="name_head">Jaydon Lipshutz</span>
              <span><a href="#">UI/UX Designer</a></span>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <div class="text-black-50">
                <span>Experience</span>
              </div>
              <div>
                <span class="years">5 Years</span>
              </div>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <div>
                <span class="text-black-50">Email Address</span>
              </div>
              <div>
                <span class="years">user@gmail.com</span>
              </div>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <div>
                <span class="text-black-50">Contact Information</span>
              </div>
              <div>
                <span class="years">+9988776655</span>
              </div>
            </div>
            <div class="col-md-2 d-flex flex-column justify-content-center">
              <div>
                <span class="text-black-50">Address</span>
              </div>
              <div>
                <span class="years">Ibadan & Oyo State</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index_myAccount',
};
</script>

<style scoped>
.name_head {
  font-weight: bold;
  font-size: 20px;
}

.years {
  font-size: 13px;
  font-weight: bold;
}

h2 {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #505565;
}

img {
  height: 120px;
  width: 120px;
  object-fit: cover;
}

.btn {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}

</style>
