<template>
  <div class="mt-100">
    <div class="job-type-selection mx-auto mb-5">
      <div
        v-for="type in types"
        :key="type"
        :class="{active: active === type}"
        class="job-type"
        @click="active=type"
      >
        {{ type }}
      </div>
    </div>

    <div class="mb-50">
      <job-cards/>

      <div class="">
        <button class="view-more-btn">View more</button>
      </div>
    </div>
  </div>
</template>

<script>
import JobCards from '../../components/JobCards.vue';

export default {
  components: {JobCards},
  data() {
    return {
      active: 'Recent Jobs',
      types: ['Recent Jobs', 'Featured Jobs'],
    };
  },

};
</script>

<style scoped>
.job-type-selection {
  max-width: 550px;
  width: 100%;
  height: 70px;
  border: 1px solid #D3D4D8;
  border-radius: 130px;
  display: flex;
  flex-wrap: wrap;

}

.job-type {
  width: 50%;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 160%;
  color: #8B90A0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 130px;
  cursor: pointer;
  transition: all .3s ease-in-out;

}

.job-type.active {
  background: #0385F3;
  color: #fff;

}

.job-type.active:hover {
  background: #0575d4;
}

.view-more-btn{
  border: 1px solid #000;
  padding: 5px 10px;
  display: block;
  width: max-content;
  margin: 0 auto;
  margin-top: 10px;
  background: #fff;
  font-weight: 500;
  border-radius: 4px;
  color: #000;
}
.mb-50 {
  margin-bottom: 50px;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 96%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}

.mt-100 {
  margin-top: 100px;
}

/* Toggle text */
p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

/* Checkbox cheked effect */
.checkbox:checked + .toggle::after {
  left: 192px;
}

/* Checkbox cheked toggle label bg color */
.checkbox:checked + .toggle {
  background-color: #ffffff;
}

@media only screen and (max-width: 550px) {
  .job-type-selection {
    display: flex;
    flex-direction: column;
    height: unset;
    border-radius: 8px
  }

  .job-type {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
