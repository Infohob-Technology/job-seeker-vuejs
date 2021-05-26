<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="reset-box">                
                <h3>Enter OTP</h3>
                <h5 class="mb-4">We have sent an OTP on "{{info}}"</h5>
                <div>
                     <div class="hori-column">
                        <div class="input-field mb-2">
                            <input placeholder="Enter your OTP here" autocomplete="off" type="otp" v-model="otp">
                        </div>
                        <span class="submit-button text-center">Submit</span>            
                    </div>
                    <div class="buttons">
                      <router-link to="/reset-password" class="otp-btn change-btn">Change {{type=='email'?'Email Address':'Phone Number'}}</router-link>
                      <button class="otp-btn resend-btn">
                          Resend OTP
                      </button>
                    </div>     
                </div>    
              </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "reset-password",
  props: ['info', 'type'],
  data(){
    return {
       otp: "" 
       }
  },
};
</script>
<style scoped>
.buttons {
  display: flex;
  justify-content: space-between;
  column-gap: 12px;
}
.buttons .otp-btn {
  height: 48px;
  width: 100%;
  background: #fafafa;
  border-radius: 4px;
  border: 1px solid #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-decoration-line: underline;
  color: #ff4c68;
}
.buttons .otp-btn.resend-btn {
  background: #0385f3;
  color: #fff !important;
}
.center-out {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reset-box {
  max-width: 481px;
  width: 100%;
  margin: 224px 0;
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
    /* width: 400px; */
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

@media screen and (max-width: 568px) {
  .hori-column {
    grid-template-columns: 1fr;
  }
  .buttons {
    margin-top: 30px;
    row-gap: 10px;
    flex-wrap: wrap;
  }
}
</style>