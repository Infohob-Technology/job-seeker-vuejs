<template>
  <div>
    <Reset @otpSent="otpSent" v-if="$route.path === '/reset-password'" />
    <Otp :info="info" :type="type" v-else />
  </div>
</template>
<script>
import Reset from "./components/Reset";
import Otp from "./components/Otp";

export default {
  name: "reset",
  components: { Reset, Otp },
  data() {
    return{
      info: '',
      type: ''
    }
  },
  methods: {
    otpSent(data) {
      console.log(data);
      this.info = data.info
      this.type = data.type
      
      this.$router.push('/otp')
    },
  },
};
</script>
<style scoped>
</style>