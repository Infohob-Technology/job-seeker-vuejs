<template>
  <nav ref="nav" class="">
    <div class="nav-top">
      <div
        class="background-header"
        :class="{ 'auth-header': isLogin, 'guest-header': !isLogin }"
      >
        <div class="logo-c">
          <router-link class="logo" to="/">
            <img src="@/assets/logo.png" />
          </router-link>
        </div>

        <div ref="navLinks" :class="{ opened: nav_state }" class="nav-links-c">
          <router-link active-class="active" exact to="/" v-if="isLogin"
            >Home</router-link
          >
          <router-link active-class="active" to="/jobs">Jobs</router-link>
          <router-link
            active-class="active"
            to="/my-applications"
            v-if="isLogin"
            >My application</router-link
          >
          <router-link active-class="active" to="/profile" v-if="isLogin"
            >My Account</router-link
          >
          <a class="bell-icon-header" href="#my-account" v-if="isLogin"
            ><i class="fas fa-bell"></i
          ></a>
          <a class="logout-button" href="#" v-if="isLogin">Logout</a>

          <router-link
            active-class="active"
            to="/job-seeker/signup"
            v-if="!isLogin"
            >Become a Recruiter</router-link
          >
          <router-link
            active-class="active"
            to="/job-seeker/signup"
            v-if="!isLogin"
            >Become a Jobseeker</router-link
          >
          <router-link class="login-button" to="/login" v-if="!isLogin"
            >Log in</router-link
          >
        </div>

        <div
          ref="burger"
          :class="{ nav_state: 'toggle' }"
          class="burger"
          @click="navCollapse()"
        >
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nav_state: false,
      isLogin: false,
    };
  },
  watch: {
    "$route.path"() {
      this.nav_state = false;
    },
  },
  methods: {
    changeRoute() {},
    navCollapse() {
      this.$refs.burger.classList.toggle("toggle");
      this.nav_state = !this.nav_state;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
  box-shadow: 0px 4px 8px 0 #bebebe;
  background-color: "#FAFAFA";
}

.auth-header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 100px;
}

.guest-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 100px;
}
.background-header {
  background: #fafafa;
}

a {
  float: left;
  color: black;
  text-align: center;
  padding: 5px 0;

  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  border-radius: 5px;
}

.nav-links-c a {
  padding: 5px 5px;
  margin: 0 15px;
}

.auth-header a:hover,
.auth-header a.active {
  color: #0385f3;
}

.headera.logo {
  font-size: 25px;
  font-weight: bold;
}

.auth-header .logo-c {
  flex: auto;
}

.auth-header a:hover {
  /* background-color: grey; */
  color: #0385f3;
}

.bell-icon-header {
  color: #0385f3;
}

.auth-header .logout-button {
  text-align: center;
  background-color: #ff4c68;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff !important;
  height: 40px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  padding: 5px 20px !important;
}

.guest-header .login-button {
  text-align: center;
  background-color: #0385f3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff !important;
  height: 40px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  padding: 5px 37px !important;
  position: absolute;
  right: 100px;
}

.auth-header .nav-links-c {
  float: right;
  /* display: flex; */
  align-items: center;
}
.guest-header .nav-links-c {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.login-button, .logout-button {
  background: #0385f3 !important;
}

@media screen and (max-width: 500px) {
  a {
    float: none;
    display: block;
    text-align: left;
  }

  .nav-links-c {
    float: none;
  }

  nav .logo {
    padding: 5px 35px;
    justify-content: flex-start;
    flex-direction: row;
  }
}

@import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

.nav-links li {
  list-style: none;
  margin-right: 17px;
}

.nav-links li a {
  text-decoration: none;
  font-weight: 600;
  color: white;
  font-size: 17px;
  transform: uppercase;
}

.email h5 {
  font-size: medium;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

.burger {
  display: none;
  cursor: pointer;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1 1 5%;
}

.burger div {
  height: 3px;
  background-color: #3f4b6b;
  width: 32px;
  margin: 4px 3px;
  transition: all 0.3s ease;
}
@media (max-width: 991px) {
  .guest-header,
  .auth-header {
    padding: 10px;
    width: 100%;
  }
  .guest-header .login-button {
    right: 0 !important;
  }
}
@media screen and (max-width: 768px) {
  .guest-header .login-button {
    position: static !important;
    right: auto !important;
  }
  .login-button {
    width: calc(100% - 46px);
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9;
    height: 85px;
    width: 100%;
    transition: height 0.5s ease-in;
  }

  .burger {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .logo {
    padding-left: 12px !important;
  }

  .nav-links-c {
    position: absolute;
    top: 80px;
    left: 0;
    transform: translate(0, -200%);
    padding: 9px 0px;
    width: 100%;
    z-index: 8;
    border: 1px solid #f0f1f3;
    background-color: #fafafa;
    display: none;
    justify-content: flex-start;
    align-items: flex-start !important;
    flex-direction: column;
    /* transition: transform 0.2s ease-in; */
  }

  .nav-links-c.opened {
    display: flex !important;
    transform: translate(0, 0);
  }

  .nav-top > div {
    width: 100%;
  }

  .nav_state {
    align-items: flex-end;
    padding-right: 12px;
  }

  .nav-links li {
    opacity: 0;
  }

  .nav-links li a {
    font-size: 16.5px;
  }

  .nav-links-c a {
    margin-left: 23px;
  }

  .auth-header .logout-button {
    /*margin-left: 55px!important;*/
    width: calc(100% - 46px);
    display: flex;
    align-items: center;
    justify-content: center;
    height: unset !important;
  }
}

@keyframes navLinkFade {
  0% {
    opacity: 0;
  }

  1% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
