<template>
  <div class="container vh-100">
    <div class="tab_bar">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="Account Details">

        </a-tab-pane>
        <a-tab-pane key="2" tab="Support Messages">

        </a-tab-pane>
        <a-tab-pane key="3" tab="Content">

        </a-tab-pane>
        <a-tab-pane key="4" tab="Change Password">

        </a-tab-pane>
        <a-tab-pane key="5" tab="Reports">

        </a-tab-pane>

      </a-tabs>
    </div>
    <div class="row">
      <p>Administrator Account</p>
    </div>
    <div class="row border border-light one">
      <div class="col-3">
        <img alt="image" class="img" src="fake">
        <span class="name">Talan Bergson</span>
      </div>
      <div class="col-3">
        <div>
          <span class="two">Email Address</span>
        </div>
        <div>
          <span class="three">Suuport@infohob.com</span>
        </div>
      </div>
      <div class="col-3">
        <div>
          <span class="two">Last Login</span>
        </div>
        <div>
          <span class="three">Thu June 04 2020</span>
        </div>
      </div>
      <div class="col-3 change_password">
        <button class="btn btn block  btn-primary">Change Password</button>
      </div>

    </div>
    <div class="row">
      <p>Support Account</p>
    </div>
    <div>
      <div class="row border border-light one">
        <div class="col-3">
          <img alt="image" class="img" src="fake">
          <span class="name">Ryan Torff</span>
        </div>
        <div class="col-3">
          <div>
            <span class="two">Email Address</span>
          </div>
          <div>
            <span class="three">Suuport@infohob.com</span>
          </div>
        </div>
        <div class="col-3">
          <div>
            <span class="two">Last Login</span>
          </div>
          <div>
            <span class="three">Thu June 04 2020</span>
          </div>
        </div>
        <div class="col-3 double_button">
          <button class="btn btn-light">Change User</button>
          <button class="btn btn-primary">View Details</button>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'MyAccount',
};
</script>

<style scoped>
.container {
  font-family: "Open Sans";
  font-style: normal;
}

.one {
  border-radius: 8px;
  padding: 10px;

}

.two {
  font-size: 14px;
  line-height: 24px;
}

.three {
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
}

.img {
  width: 80px;
  height: 80px;
  left: 120px;
  top: 285px;
}

.name {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}

.double_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
}

.change_password {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 20px;
}
</style>
