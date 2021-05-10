<template>
  <div>
    <Homepage/>
  </div>
</template>

<script>
import Homepage from './Homepage';

export default {
  components: {Homepage},
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 5px 39px;
  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  border-radius: 5px;
}

.background-header {
  background: #fafafa;
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
  color: #ffffff !important;
  height: 40px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}

.headera.active {
  background-color: green;
  color: white;
}

.header-right {
  float: right;
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
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
