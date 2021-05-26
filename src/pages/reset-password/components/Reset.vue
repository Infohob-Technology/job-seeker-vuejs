<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="reset-box">
        <h3>Reset Password</h3>
        <div>
          <a-tabs
            class="reset-password"
            default-active-key="1"
            size="large"
            @change="callback"
          >
            <a-tab-pane key="1" tab="Email Address">
              <h5>Enter your registered email address to reset the password</h5>
              <div class="hori-column">
                <div class="input-field mb-2">
                  <input
                    placeholder="Email Address *"
                    autocomplete="off"
                    type="email"
                    v-model="email"
                  />
                </div>
                <span
                  class="submit-button text-center"
                  @click="sendOtp('email')"
                  >Send OTP</span
                >
              </div>
              <span class="err-text">{{err}}</span>
            </a-tab-pane>
            <a-tab-pane key="2" tab="Mobile number" force-render>
              <h5>
                Copy Enter your registered Mobile Number to reset the password
              </h5>
              <div class="hori-column">
                <div class="input-field mb-2">
                  <input
                    placeholder="Mobile Number *"
                    autocomplete="off"
                    type="email"
                    v-model="email"
                  />
                </div>
                <span
                  class="submit-button text-center"
                  @click="sendOtp('phone')"
                  >Send OTP</span
                >
              </div>
              <span class="err-text">{{err}}</span>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reset-password",
  data() {
    return {
      email: "",
      err: ''
    };
  },
  methods: {
    callback(key) {
      console.log(key);
      this.email = "";
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendOtp(type) {
        console.log(type)
      if (type === "email") {
        if (this.email.trim() == "") {
          this.err = "Email is required!";
          return
        } else if (!this.validateEmail(this.email)) {
          this.err = "Please enter a valid Email!";
          return;
        }
      }else{
        if (this.email.trim() == "") {
                this.err = "Mobile Number is required!";
                return
        }
      }
      this.$emit("otpSent", {
        type: type,
        info: this.email,
      });
    },
  },
};
</script>
<style scoped>
.center-out {
  display: flex;
  justify-content: center;
  align-items: center;
}
.err-text {
    color: #FF4C68;
    font-weight: 600;
    font-family: 'Open Sans', sans-serif;
}

.reset-box {
  max-width: 481px;
  margin: 224px 0;
  width: 100%;
}
.reset-box h3 {
  font-weight: 600;
  font-size: 24px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  margin-bottom: 20px;
  color: #505565;
}
.reset-box h5 {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #505565;
  margin-top: 19px;
  margin-bottom: 22px;
}
@media screen and (max-width: 768px) {
  .reset-box {
    /* width:400px; */
    margin: 224px 10px;
  }
}
.input-field input {
  border: 1px solid #a1a4b1;
  border-radius: 4px;
  height: 48px;
  background: none;
  padding: 0 16px;
  width: 100%;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
@media screen and (max-width: 440px) {
  .reset-box {
    width: 90%;
    margin: 224px 10px;
  }
}

.input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;
}
.input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.input-field input:focus {
  outline: none;
}

.input-field input::-webkit-input-placeholder {
  /* Edge */
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.input-field input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.input-field input::placeholder {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.input-field {
  position: relative;
  margin-bottom: 20px;
}
.hori-column {
  display: grid;
  grid-template-columns: 1fr 120px;
  grid-gap: 12px;
}
.submit-button {
  background: #0385f3;
  border-radius: 4px;
  padding: 16px;

  height: 47px;
  color: white;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .hori-column {
    grid-template-columns: 1fr;
  }
}
</style>