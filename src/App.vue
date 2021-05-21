<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {store} from './store/store';

export default {
  name: 'App',
  store,
};

</script>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap');*/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400&display=swap');
*{
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
@media screen and (min-width:769px){
  #app{
    padding-top: 80px;
  }
}

.ant-form-item-control-wrapper{
    display: inline-block;
    vertical-align: top;
    width: 100%!important;
}
.dropdwon-fonts>div{
  height: 48px;
  display: flex;
  align-items: center;
}
.searchbox-style input{
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
.date-picker input{
  height: 48px
}
.dropdown-select >div{
  height: 48px !important
}
.dropdown-select li{
  height: 38px !important;
  display: flex;
  align-items: center;
}
.ant-tabs-bar ,.ant-tabs-bar ,.ant-tabs-top-bar ,.ant-tabs-small-bar{
  width: 277px!important;
  margin-left: 40px;
}
.ant-table-thead tr{
  border: 1px solid #F0F1F3!important;
  border-radius: 8px!important;
  z-index: 1000000000!important;
}
.ant-table-thead tr th{
  background-color: #fafdff;
  border-bottom: none;
}
.ant-table-column-title {
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #8b90a0;
}
@media only screen and (max-width: 767px) {
  .ant-table-content{
    overflow-x: scroll!important;
  }
}
.btn-primary{
  background: #0385F3 !important;
}
.btn{
  font-family: 'Open sans', sans-serif;
}
.ant-modal-content{
  border-radius: 8px;
}
.button-class{
  column-gap: 10px;
}
.login-button-style,
.go-back-button-style {
  background: #fafafa;
  border-radius: 4px;
  max-width: 235px;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 14px;
  color: #8b90a0;
  height: 48px;
  border: 1px solid #fafafa;
}
.add-more-text-admin-job-seeker {
  background: #0385f3;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 128px;
  height: 42px;
}
@media only screen and (max-width: 767px) {
  .ant-table-content{
    overflow-x: scroll!important;
  }
  .add-more-text-admin-job-seeker {
    top: 94px;
  }
}
.login-button-style {
  background: #0385f3;
  color: #fff;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
