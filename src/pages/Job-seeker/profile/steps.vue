<template>
  <div class="my-profile">
    <div class="container-fluid">
      <div class="row">
        <ul class="progressbar">
          <li :class="{ 'active' : currentStep == 1}"><span>Profile Summery</span></li>
          <li :class="{ 'active' : currentStep == 2}"><span>Education</span></li>
          <li :class="{ 'active' : currentStep == 3}"><span>Experience</span></li>
          <li :class="{ 'active' : currentStep == 4}"><span>Projects</span></li>
          <li :class="{ 'active' : currentStep == 5}"><span>Documents</span></li>
          <li :class="{ 'active' : currentStep == 6}"><span>Key Skills</span></li>
          <li :class="{ 'active' : currentStep == 7}"><span>My Profile</span></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="progression-content">
        <section v-if="currentStep == 1">
          <ProfileSummary @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 2">
          <Education @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 3">
          <Experience @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 4">
          <Project @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 5">
          <Documents @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 6">
          <Skills @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
        <section v-if="currentStep == 7">
          <MyProfile @prevStep="prevStep" @stepSuccess="stepSuccess"/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSummary from './ProfileSummary';
import Education from './Education';
import Experience from './experience';
import Project from './project';
import Documents from './documents';
import Skills from './skills';
import MyProfile from './myProfile';
import {mapGetters} from 'vuex';

export default {
  name: 'Steps',
  data() {
    return {
      profileData: {},
    };
  },
  components: {
    ProfileSummary: ProfileSummary,
    Education: Education,
    Experience: Experience,
    Project: Project,
    Documents: Documents,
    Skills: Skills,
    MyProfile: MyProfile,
  },
  methods: {
    stepSuccess(data) {
      for (let key in data) {
        this.profileData[key] = data[key];
      }

      if (this.currentStep == 7) {
        this.saveProfileData();
      } else {
        this.nextStep();
      }
    },
    nextStep() {

      this.$store.dispatch('NEXT_STEP');
    },
    prevStep() {
      this.$store.dispatch('PREV_STEP');
    },
    saveProfileData() {
      this.$store.dispatch('SAVE_PROFILE_DATA', this.profileData);
    },
  },
  computed: {
    ...mapGetters({
      currentStep: 'steps',
    }),
  },
  watch: {
    currentStep(newValue) {

    },
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

body {
  background-color: #2979FF;

}

.container {

  color: #0385F3;
  font-family: 'Roboto', sans-serif;
}

.progressbar {
  counter-reset: step;
  display: flex;
  min-width: -webkit-fill-available;
  padding-top: 40px;
}

.progressbar li {
  position: relative;
  list-style: none;
  float: left;
  width: 15%;
  text-align: center;
}

/* Circles */
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 40px;
  height: 40px;
  border: 1px solid;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;

  /* Center # in circle */
  line-height: 39px;
}

.progression-content {
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
}

.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0px;
  /*   background: orange ; */
  top: 20px; /*half of height Parent (li) */
  left: -50%;
  z-index: -1;
  border: 1px dashed;
  border-color: grey;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active:before {
  background-color: #0084F4;
  color: #ffffff;
  content: "✔";
}

@media only screen and (max-width: 767px) {
  .progressbar {
    padding-left: 0;
  }

  .progressbar li span {
    display: none;
  }

  .progressbar li.active span {
    display: block;
  }

  .my-profile {
    padding: 0 15px;
  }
}
</style>
