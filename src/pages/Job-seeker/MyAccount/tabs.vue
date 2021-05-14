<template>
  <div class="container-fluid ">
    <index_myAccount/>
    <div class="tab_bar py-4">
      <a-tabs :default-active-key="tab" @change="changetab">
        <a-tab-pane key="1" tab="Profile Summery"/>
        <a-tab-pane key="2" tab="Education"/>
        <a-tab-pane key="3" tab="Experience and Skills"/>
        <a-tab-pane key="4" tab="Projects"/>
        <a-tab-pane key="5" tab="Resume/CV"/>
        <div class="tabs-component">
          <ul class="tabs-component-tabs">
            <li class="tabs-component-tab">
              <a class="tabs-component-tab-a">…</a>
            </li>
          </ul>
          <div class="tabs-component-panels">
            <section class="tabs-component-panel">
              …
            </section>
          </div>
        </div>
      </a-tabs>
    </div>
    <div class="row">
      <div class="progression-content">
        <!--      <section v-if="tab == 1">-->
        <!--        <index_myAccount/>-->
        <!--      </section>-->
        <section v-if="tab == 1">
          <ProfileSummery/>
        </section>
        <section v-if="tab == 2">
          <Education_in_MyAccount/>
        </section>
        <section v-if="tab == 3">
          <Experience_and_Skills/>
        </section>
        <section v-if="tab == 4">
          <Projects/>
        </section>
        <section v-if="tab == 5">
          <Resume_CV/>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import index_myAccount from './index_myAccount';
import ProfileSummery from './ProfileSummery';
import Education_in_MyAccount from './Education_in_MyAccount';
import Experience_and_Skills from './Experience_and_Skills';
import Projects from './Projects';
import Resume_CV from './Resume_CV';
import {store} from '../../../store/store';
import {mapGetters} from 'vuex';

export default {
  name: 'tabs',
  store,
  components: {
    index_myAccount: index_myAccount,
    ProfileSummery: ProfileSummery,
    Education_in_MyAccount: Education_in_MyAccount,
    Experience_and_Skills: Experience_and_Skills,
    Projects: Projects,
    Resume_CV: Resume_CV,
  },
  methods: {
    changetab: function(tab) {
      this.$store.dispatch('CHANGE_TAB', tab);
    },
  },
  computed: {
    ...mapGetters(['tab']),
  },
};

</script>

<style scoped>
.ant-tabs-content-animated {
  display: none !important;
}

.progression-content {
  width: 100%;
}

.container-fluid {
  padding-left: 100px;
  padding-right: 100px;
}

@media (max-width: 991px) {
  .container-fluid {
    padding: 0 20px;
  }
}
</style>
