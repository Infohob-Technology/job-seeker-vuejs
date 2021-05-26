<template>
  <div class="login-page">

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6">
          <div class="login-card">
            <h4>Login</h4>
            <div class="login-linkedin">
              <LinkedInLogo/>
              <span>Login using LinkedIn</span>
            </div>
            <small>All your activity will remain private</small>
            <div class="separator">
              <span>OR</span>
            </div>
            <div class="input-field mb-2">
              <input placeholder="Email Address*" autocomplete="off" type="email" v-model="email">
            </div>
            <div class="mb-3">
              <span class="red-c" v-show="msg.email">{{msg.email}}</span>
            </div>
            <div class="input-field mb-2">
              <input placeholder="Password *" :type="show?'text':'password'" v-model="password">
            <span class="show" @click="show=!show">Show</span>

            </div>
            <div class="mb-1">
              <span class="red-c" v-show="msg.password">{{msg.password}}</span>
            </div>
            <div class=" forgot-pswd d-flex justify-content-end">
              <router-link to="/reset-password">Forget Password ?</router-link>
            </div>
            <div>
              <div class="actions">
                <button class="btn-cancel">Cancel</button>
                <button class="btn-proceed" @click="submitForm">Login</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LinkedInLogo from './LinkedInLogo';

export default {
  name: 'index',
  components: {
    LinkedInLogo,
  },
  data() {
    return {
      show: false,
      msg: [],
      email:'',
      password:'',
      error:true
    };
  },
  methods:{
    submitForm(){
      if(!this.error){

      }
    },
    
    validateEmail(value){
      console.log(value);
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
      {
        this.msg['email'] = '';
        this.error=true;
      } else{
        this.msg['email'] = 'Invalid Email Address';
        this.error=false;
      } 
    },
    validatePassword(value){
      let difference = 8 - value.length;
      if (value.length<8) {
        this.msg['password'] = 'Must be 8 characters! '+ difference + ' characters left' ;
        this.error=true;
      } else {
         this.msg['password'] = '';
          this.error=false;
      }
    }
  },
  watch: {
    email(value){
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    password(value){
      this.password = value;
      this.validatePassword(value);
    }
  },
};
</script>

<style scoped>
.login-page {
  background: url('../../assets/login.jpg') no-repeat center;
  min-height: calc(100vh - 80px);
  background-size: cover;
}

.login-card {
  background: rgba(35, 44, 58, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  padding: 32px;
  margin-bottom: 52px;
  margin-top: 160px;
}

.login-card h4 {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #FFFFFF;
  margin-left: auto;
}

.login-card .login-linkedin {
  height: 56px;
  background: #0385F3;
  border: 1px solid #0385F3;
  border-radius: 4px;
  max-width: 263px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.login-card .login-linkedin:hover {
  background: #0273d3;
}

.login-card small {
  font-family: 'Open Sans', sans-serif;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
  margin-top: 8px;
}

.login-card .separator {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 36px;
  margin-bottom: 26px;
}

.login-card .separator:before {
  position: absolute;
  left: 0;
  top: 50%;
  width: calc(50% - 20px);
  transform: translateY(-50%);
  content: '';
  border-top: 1px solid #D3D4D8;
}

.login-card .separator:after {
  position: absolute;
  right: 0;
  top: 50%;
  width: calc(50% - 20px);
  transform: translateY(-50%);
  content: '';
  border-top: 1px solid #D3D4D8;
}

.login-card .separator span {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}

.login-card .input-field input{
  border: 1px solid #FFFFFF;
  border-radius: 4px;
  height: 48px;
  background: none;
  padding: 0 16px;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #FFFFFF;
}
.login-card .input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;

}
/*.login-card .input-field input:autofill {*/
/*  background-color: transparent;*/
/*  -webkit-text-fill-color: green;*/

/*}*/

.login-card .input-field input:focus {
  outline: none;
}

.login-card .input-field input::-webkit-input-placeholder { /* Edge */
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #FFFFFF;

}

.login-card .input-field input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #FFFFFF;
}

.login-card .input-field input::placeholder {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  color: #FFFFFF;
}

.login-card .input-field{
  position: relative;
  margin-bottom: 20px;
}

.login-card .input-field span{
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 8px;
  line-height: 16px;
  color: #FFFFFF;
  text-transform: uppercase;
  cursor: pointer;
}
.forgot-pswd a{
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #FFFFFF;
}
.actions {
  margin-top: 32px;
  display: flex;
  column-gap: 12px;
  position: relative;
}

.actions .btn-cancel,
.actions .btn-proceed {
  background: rgba(250, 250, 250, 0.1);
  border-radius: 4px;
  height: 48px;
  width: 100%;
  border: 1px solid rgba(250, 250, 250, 0.1);
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  transition: all .2s ease-in-out;
}

.actions .btn-cancel:hover {
  background: rgba(250, 250, 250, 0.2);

}

.actions .btn-proceed {
  background: #FF4C68;
  border-color: #FF4C68;
}

.actions .btn-proceed:hover {
  background: #ce3b52;
}
.red-c{
  color:#FF4C68;
}
@media (max-width: 768px) {
  .login-card {
    padding: 18px;
    margin-top: 60px;
  }

  .login-card h4 {
    font-size: 26px;
    line-height: 36px;
  }
}
</style>
