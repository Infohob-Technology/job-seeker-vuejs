<template>
  <div class="login-page">

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="login-details">
            <LogoVector/>
            <h4>Welcome</h4>
            <p>Lets explore the best opportunities</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Proin gravida dolor sit amet lacus accumsan</li>
              <li>Sociis natoque penatibus et magnis dis parturient</li>
              <li>sed rhoncus pronin sapien nunc accuan eget.</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="login-card">
            <h4>Create the Job Seeker account</h4>
            <div >
              <label>
                Have you worked in an Information Technology organization?
              </label>
              <div class="options" :class="{checked: organization}">
                <div class="check">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9913 0.0919153C12.3783 -0.238164 11.6946 0.398417 11.2938 0.77565C10.3743 1.67158 9.59627 2.70897 8.72388 3.65205C7.75722 4.68944 6.8613 5.72684 5.87106 6.74069C5.30521 7.30654 4.69221 7.91954 4.31498 8.62685C3.4662 7.80162 2.73532 6.90569 1.79224 6.17484C1.1085 5.65614 -0.0231954 5.27891 0.000381668 6.52849C0.0475357 8.15535 1.48573 9.90005 2.5467 11.0081C2.99466 11.4797 3.58409 11.9748 4.26782 11.9984C5.09302 12.0455 5.94179 11.0553 6.43691 10.513C7.3093 9.56994 8.01661 8.50893 8.81819 7.54231C9.85558 6.26915 10.9165 5.01952 11.9304 3.72278C12.5669 2.92116 14.571 0.940651 12.9913 0.0919153ZM1.03773 6.43419C1.01416 6.43419 0.990578 6.43419 0.943424 6.45772C0.849116 6.43419 0.778385 6.41057 0.684077 6.36342C0.754808 6.31626 0.872693 6.33984 1.03773 6.43419Z" fill="white"/>
                  </svg>
                </div>
                <div class="opt "  :class="{active: organization==='yes'}" @click="organization='yes'">
                  <span class="radio"></span>
                  Yes
                </div>
                <div class="opt" :class="{active: organization==='no'}" @click="organization='no'">
                  <span class="radio"></span>
                  No
                </div>
              </div>
            </div>
            <div>
              <label>
                Have you worked in an IT role?
              </label>
              <div class="options"  :class="{checked: itRole}">
                <div class="check">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9913 0.0919153C12.3783 -0.238164 11.6946 0.398417 11.2938 0.77565C10.3743 1.67158 9.59627 2.70897 8.72388 3.65205C7.75722 4.68944 6.8613 5.72684 5.87106 6.74069C5.30521 7.30654 4.69221 7.91954 4.31498 8.62685C3.4662 7.80162 2.73532 6.90569 1.79224 6.17484C1.1085 5.65614 -0.0231954 5.27891 0.000381668 6.52849C0.0475357 8.15535 1.48573 9.90005 2.5467 11.0081C2.99466 11.4797 3.58409 11.9748 4.26782 11.9984C5.09302 12.0455 5.94179 11.0553 6.43691 10.513C7.3093 9.56994 8.01661 8.50893 8.81819 7.54231C9.85558 6.26915 10.9165 5.01952 11.9304 3.72278C12.5669 2.92116 14.571 0.940651 12.9913 0.0919153ZM1.03773 6.43419C1.01416 6.43419 0.990578 6.43419 0.943424 6.45772C0.849116 6.43419 0.778385 6.41057 0.684077 6.36342C0.754808 6.31626 0.872693 6.33984 1.03773 6.43419Z" fill="white"/>
                  </svg>
                </div>
                <div class="opt" :class="{active: itRole==='yes'}" @click="itRole='yes'">
                  <span class="radio"></span>
                  Yes
                </div>
                <div class="opt" :class="{active: itRole==='no'}" @click="itRole='no'">
                  <span class="radio"></span>
                  No
                </div>
              </div>
            </div>
            <div>
              <label>
                Have you studied a discipline that is under Information technology and computer science?
              </label>
              <div class="options"  :class="{checked: cs}">
                <div class="check">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.9913 0.0919153C12.3783 -0.238164 11.6946 0.398417 11.2938 0.77565C10.3743 1.67158 9.59627 2.70897 8.72388 3.65205C7.75722 4.68944 6.8613 5.72684 5.87106 6.74069C5.30521 7.30654 4.69221 7.91954 4.31498 8.62685C3.4662 7.80162 2.73532 6.90569 1.79224 6.17484C1.1085 5.65614 -0.0231954 5.27891 0.000381668 6.52849C0.0475357 8.15535 1.48573 9.90005 2.5467 11.0081C2.99466 11.4797 3.58409 11.9748 4.26782 11.9984C5.09302 12.0455 5.94179 11.0553 6.43691 10.513C7.3093 9.56994 8.01661 8.50893 8.81819 7.54231C9.85558 6.26915 10.9165 5.01952 11.9304 3.72278C12.5669 2.92116 14.571 0.940651 12.9913 0.0919153ZM1.03773 6.43419C1.01416 6.43419 0.990578 6.43419 0.943424 6.45772C0.849116 6.43419 0.778385 6.41057 0.684077 6.36342C0.754808 6.31626 0.872693 6.33984 1.03773 6.43419Z" fill="white"/>
                  </svg>
                </div>
                <div class="opt" :class="{active: cs==='yes'}" @click="cs='yes'">
                  <span class="radio"></span>
                  Yes
                </div>
                <div class="opt" :class="{active: cs==='no'}" @click="cs='no'">
                  <span class="radio"></span>
                  No
                </div>
              </div>
            </div>
            <div>
              <div class="actions">
                <button class="btn-cancel">Cancel</button>
                <button class="btn-proceed">Proceed</button>
              </div>
            </div>
            <div class="separator">
            </div>
            <label>
              Already registered ? <router-link to="/login">Login now</router-link>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoVector from '../../components/LogoVector'
export default {
  name: 'index',
  components: {
    LogoVector
  },
  data(){
    return{
      organization: undefined,
      itRole: undefined,
      cs: undefined,
    }
  }
};
</script>

<style scoped>
.login-page {
  background: url('../../../assets/login.jpg') no-repeat center;
  min-height: calc(100vh -  80px);
  background-size: cover;

}
.login-details{
  padding-top: 160px;
}
.login-details h4{
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 64px;
  color: #FFFFFF;
  margin-top: 32px;
}
.login-details p{
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
}
.login-details ul{
  margin-top: 46px;
  list-style-type: none;
  list-style-image: url('../../../assets/Vector2.svg');
  padding-left: 26px;


}
.login-details li{
  /* Heading / H5 */

  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 28px;
  padding-left: 20px;
}
.login-card{
  background: rgba(35, 44, 58, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 10px;
  margin-top: 54px;
  padding: 32px;
  margin-bottom: 52px;
}
.login-card h4{
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #FFFFFF;
  margin-left: auto;
}
.login-card>div{
  padding-left: 44px;
  position: relative;
}
.login-card>div:nth-child(3):after,
.login-card>div:nth-child(4):after{
  content: '';
  position: absolute;
  width: 0px;
  height: 100%;
  left: 12px;
  bottom: 32px;
  border-right: 1px dashed #D3D4D8;
}

label{
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin-bottom: 20px;
  margin-top: 36px;
}
.options{
  display: flex;
  column-gap: 12px;
  position: relative;
}
.options .check{
  position: absolute;
  bottom: 20px;
  left: -44px;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #D3D4D8;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(35, 44, 58, 0.8);
  backdrop-filter: blur(20px);
  z-index: 1;
}
.options.checked .check{
  background: #18E394;
  border-color: #18E394;
}

.opt{
  width: 100%;
  border: 1px solid #FFFFFF;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  column-gap: 12px;
  padding-left: 32px;
  height:52px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
}

.opt:hover{
  background: rgba(238, 238, 238, 0.21);
}
.opt.active{
  background: #0385F3;
  border-color: #0385f3;
}
.opt .radio{
  height: 17px;
  width: 17px;
  border-radius: 50%;
  border: 2px solid #A1A4B1;
}
.opt.active .radio{
  position: relative;
  border: 2px solid #fff;
}
.opt.active .radio:after{
  content: '';
  position: absolute;
  top: 10%;
  left: 10%;
  bottom: 10%;
  right: 10%;
  background: #fff;
  border-radius: 50%;
}

.actions{
  margin-top: 32px;
  display: flex;
  column-gap: 12px;
  position: relative;
}
.actions .btn-cancel,
.actions .btn-proceed{
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
.actions .btn-cancel:hover{
  background: rgba(250, 250, 250, 0.2);

}
.actions .btn-proceed{
  background: #FF4C68;
  border-color: #FF4C68;
}
.actions .btn-proceed:hover{
  background: #ce3b52;
}
.separator{
  margin-top: 40px;
  border-top: 1px solid #D3D4D8;
  margin-left: 44px;
}
.login-card>label{
  text-align: center;
  display: block;
  margin-bottom: 0;
}
.login-card>label a{
  color: #fff;
  text-decoration: underline;
}
@media (max-width: 768px){
  .login-details{
    padding-top: 60px;
  }
  .login-details h4{
    font-size: 32px;
    line-height: 44px;
  }
  .login-details h4{
    margin-top: 22px;
    font-size: 22px;
    line-height: 32px
  }
  .login-details li{
    margin-bottom: 12px;
  }
  .login-card {
    padding: 18px;
  }
  .login-card h4{
    font-size: 26px;
    line-height: 36px;
  }
}
</style>
