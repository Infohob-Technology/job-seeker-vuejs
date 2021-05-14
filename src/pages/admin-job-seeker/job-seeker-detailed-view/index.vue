<template>
  <div
    class="min-height-admin-job-seeker-detailed padding-job-seeker-detailed-page"
  >
    <div class="container-fluid text-align-initial">
      <a-breadcrumb>
        <a-breadcrumb-item class="job-seeker-detailed-page-breadcumb-link"
        >JOB SEEKER LIST
        </a-breadcrumb-item
        >
        <a-breadcrumb-item class="job-seeker-detailed-page-breadcumb-link"
        ><a>JOB SEEKER A</a></a-breadcrumb-item
        >
        <a-breadcrumb-item

          class="job-seeker-detailed-page-breadcumb-link active-color"
        ><a href="">DETAILS</a></a-breadcrumb-item
        >
      </a-breadcrumb>
    </div>
    <div class="text-align-initial mt-30">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Profile">
          <profile-information-tab/>
        </a-tab-pane>
        <a-tab-pane key="2" force-render tab="Education">
          <Education/>
        </a-tab-pane>
        <a-tab-pane key="3" tab="Experience and Skills">
          <Experience/>
        </a-tab-pane>
        <a-tab-pane key="4" tab="Projects">
          <Projects/>
        </a-tab-pane>
        <a-tab-pane key="5" tab="Resume / CV">
          <Resume/>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import ProfileInformationTab from './ProfileInformationTab.vue';
import Education from './Education_in_MyAccount';
import Experience from './Experience_and_Skills';
import Projects from './Projects';
import Resume from './Resume_CV';

export default {
  components: {ProfileInformationTab, Education, Experience, Projects, Resume},
};
</script>

<style scoped>
.job-seeker-detailed-page-breadcumb-link {
  font-weight: 600;
}

.job-seeker-detailed-page-breadcumb-link.active-color a {
  color: #0385F3 !important;
}

.min-height-admin-job-seeker-detailed {
  min-height: calc(100vh - 100px);
}

.padding-job-seeker-detailed-page {
  padding: 50px 100px 50px 100px;
}

@media (max-width: 768px) {
  .padding-job-seeker-detailed-page {
    padding: 50px 20px 50px 20px;
  }
}
</style>
