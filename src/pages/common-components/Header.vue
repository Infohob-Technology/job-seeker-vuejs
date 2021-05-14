<template>
  <nav ref="nav" class="">
    <div class=" nav-top">
      <div class="header background-header">
        <div class="flex-x">
          <router-link class="logo" to="/">
            <img src="@/assets/logo.png"/>
          </router-link>
        </div>

        <div ref="navLinks" :class="{'opened': nav_state}" class="header-right">
          <router-link active-class="active" exact to="/">Home</router-link>
          <!-- <a class="active" href="#home">Home</a> -->
          <router-link active-class="active" to="/jobs">Jobs</router-link>
          <router-link active-class="active" to="/my-applications">My application</router-link>
          <router-link active-class="active" to="/profile">My Account</router-link>
          <a class="bell-icon-header" href="#my-account"
          ><i class="fas fa-bell"></i></a>
          <a class="logout-button" href="#">Logout</a>
        </div>

        <div ref="burger" :class="{nav_state:'toggle'}" class="burger" @click="navCollapse()">
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
  name: 'Header',
  props: ['isLogin'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      nav_state: false,
    };
  },
  watch: {
    '$route.path'() {
      this.nav_state = false;
    },
  },
  methods: {
    changeRoute() {

    },
    navCollapse() {

      if (!this.nav_state) {
        // this.$refs.nav.style.height='250px';
        // this.$refs.navLinks.style.transform = 'translate(-10px,68%)';
        // this.$refs.navLinks.style.display = 'flex';
      } else {
        // this.$refs.navLinks.style.transform = 'none';
        // this.$refs.nav.style.height='85px';
      }
      this.$refs.burger.classList.toggle('toggle');
      this.nav_state = !this.nav_state;
      console.log(this.nav_state);
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

.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 100px;
}

.background-header {
  background: #fafafa;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 5px 0;

  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  border-radius: 5px;
}

.header-right a {
  padding: 5px 5px;
  margin: 0 15px;
}

.header a:hover,
.header a.active {
  color: #0385F3;
}

.headera.logo {
  font-size: 25px;
  font-weight: bold;
}

.flex-x {
  flex: auto;
}

.header a:hover {
  /* background-color: grey; */
  color: #0385f3;
}

.bell-icon-header {
  color: #0385f3;
}

.logout-button {
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

.header-right {
  float: right;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
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
  background-color: #3F4B6B;
  width: 32px;
  margin: 4px 3px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {

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

  .header-right {
    position: absolute;
    top: 80px;

    left: 0;
    /*transform: translate(-24px,-100%);*/
    padding: 9px 0px;
    width: 100%;
    z-index: 8;
    border: 1px solid #f0f1f3;
    background-color: #FAFAFA;
    display: none;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: transform 0.3s ease-in;
  }

  .header-right.opened {
    display: flex !important;
  }

  .nav-top > div {
    width: 100%;
  }

  .header {
    padding: 10px;
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

  .header-right a {
    margin-left: 23px;
  }

  .logout-button {
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

/*.toggle .line1{*/
/*    transform:rotate(-45deg) translate(-5px,10px);*/
/*}*/
/*.toggle .line2{*/
/*    opacity:0;*/
/*}*/
/*.toggle .line3{*/
/*    transform:rotate(45deg) translate(-5px,-10px);*/
/*}*/
</style>
