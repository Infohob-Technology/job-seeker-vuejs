<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>

import Header from '../pages/common-components/Header.vue';
import {store} from '../store/store';

export default {
  name: 'App',
  store,
  components: {Header},
};

</script>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap');*/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap');

* {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

@media screen and (min-width: 769px) {
  #app {
    padding-top: 80px;
  }
}

.ant-form-item-control-wrapper {
  display: inline-block;
  vertical-align: top;
  width: 100% !important;
}

.dropdwon-fonts > div {
  height: 48px;
  display: flex;
  align-items: center;
}

.searchbox-style input {
  height: 48px;
  font-family: 'Roboto', sans-serif;

}

.searchbox-style input::-webkit-input-placeholder { /* Edge */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #8B90A0;
}

.searchbox-style input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #8B90A0;
}

.searchbox-style input::placeholder {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  color: #8B90A0;
}

.date-picker input {
  height: 48px
}

.dropdown-select > div {
  height: 48px !important
}

.dropdown-select li {
  height: 38px !important;
  display: flex;
  align-items: center;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
