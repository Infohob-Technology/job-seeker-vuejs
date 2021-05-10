<template>
  <div :class="{opened: showFilters}" class="background-left-side-menu">
    <div
      class="display-flex justify-content-space-between align-item-center pt-30"
    >
      <div><span class="filters-title-text">Filters</span></div>
      <div>
        <span class="no-of-filters-apply-text">4 Filters applied</span>
      </div>
    </div>
    <div
      class="cursor-pointer pt-30 display-flex justify-content-space-between align-item-center"
      v-on:click="toggleCategory()"
    >
      <div><span class="industry-title-text">Industry</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleCat"
      class="category expand-transition"
      transition="expand"
    >
      <a-checkbox-group @change="onChange">
        <a-row>
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >Industry A
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >Industry B
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >Industry C
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >Industry D
            </a-checkbox
            >
          </a-col
          >
        </a-row>
      </a-checkbox-group>
      <div class="text-align-initial ptb-20">
        <span class="more-plus">+20 More</span>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleSalary()"
    >
      <div><span class="industry-title-text">Salary</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleSalaryOpt"
      class="category expand-transition"
      transition="expand"
    >
      <a-checkbox-group @change="onChange">
        <a-row>
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >0-2 Lakh ₦ (200)
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >2-5 Lakh ₦(96)
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >5-8 Lakh ₦(15)
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >8-12 Lakh ₦ (12)
            </a-checkbox
            >
          </a-col
          >
        </a-row>
      </a-checkbox-group>
      <div class="text-align-initial ptb-20">
        <span class="more-plus">+20 More</span>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleExperience()"
    >
      <div><span class="industry-title-text">Experience</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleExperienceOpt"
      class="experience-block expand-transition"
      transition="expand"
    >
      <div class="padding-slider">
        <a-slider
          :marks="marks"
          :max="30"
          :min="0"
          :value="value"
          @change="handleChange"
        />
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleLocation()"
    >
      <div><span class="industry-title-text">Location</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleLocationOpt"
      class="location-box expand-transition"
      transition="expand"
    >
      <div class="location-radio">
        <a-radio-group v-model="valueLocation" @change="onChangeLocation">
          <a-radio :value="1" class="radio-label">A</a-radio>
          <a-radio :value="2" class="radio-label">B</a-radio>
        </a-radio-group>
      </div>
      <div class="padding-slider">
        <a-slider
          :marks="marksLocationSlider"
          :max="1000"
          :min="1"
          :value="valueLocationSlider"
          @change="handleChangeLocationSlider"
        />
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleTimePosted()"
    >
      <div><span class="industry-title-text">Time Posted</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleTimePostedOpt"
      class="time-posted-block expand-transition"
      transition="expand"
    >
      <div class="padding-slider-time-posted">
        <a-slider
          :marks="marksTimePosted"
          :max="60"
          :min="0"
          :value="valueTimePosted"
          @change="handleChangeTimePosted"
        />
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleCompanySize()"
    >
      <div><span class="industry-title-text">Company size</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleCompanySizeOpt"
      class="category expand-transition"
      transition="expand"
    >
      <a-checkbox-group @change="onChangeCompanySize">
        <a-row>
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >5-50 Employees
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >50-80 Employees
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >80-120 Employees
            </a-checkbox
            >
          </a-col
          >
          <a-col :span="24" class="text-align-initial"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              value="A"
            >120-400 Employees
            </a-checkbox
            >
          </a-col
          >
        </a-row>
      </a-checkbox-group>
      <div class="text-align-initial ptb-20">
        <span class="more-plus">+5 More</span>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleJobType()"
    >
      <div><span class="industry-title-text">Company size</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <div
      v-if="toggleJobTypeOpt"
      class="company-size-block expand-transition"
      transition="expand"
    >
      <div class="row m-0">
        <div class="col-6 prb-10 pl-0">
          <div class="boxes-job-type">
            <span class="box-job-type-fonts">Full Time</span>
          </div>
        </div>
        <div class="col-6 p-0">
          <div class="boxes-job-type not-selected">
            <span class="box-job-type-fonts not-selected-job-type-fonts"
            >Part Time</span
            >
          </div>
        </div>
        <div class="col-6 p-0">
          <div class="boxes-job-type not-selected">
            <span class="box-job-type-fonts not-selected-job-type-fonts"
            >Contract</span
            >
          </div>
        </div>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
      <div class="text-align-initial">
        <a-checkbox
          class="text-align-initial checkbox-color-featured-jobs mt-10"
        >Only Featured Jobs
        </a-checkbox
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'showFilters',
  ],
  data() {
    return {
      toggleCat: true,
      toggleSalaryOpt: true,
      toggleExperienceOpt: true,
      toggleLocationOpt: true,
      toggleTimePostedOpt: true,
      toggleCompanySizeOpt: true,
      toggleJobTypeOpt: true,
      min: 0,
      value: 0,
      max: 20,
      valueLocation: 1,
      valueLocationSlider: 500,
      valueTimePosted: 5,
      marksLocationSlider: {
        1: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            marginTop: '15px',
            color: '#505565',
            left: '5%',
          },
          label: <strong>1 KM</strong>,
        },
        1000: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            marginTop: '15px',

            fontSize: '14px',
            color: '#505565',
            left: '95%',
          },
          label: <strong>1000 KM</strong>,
        },
      },
      marksTimePosted: {
        0: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            marginTop: '15px',

            fontSize: '14px',
            color: '#505565',
            left: '5%',
          },
          label: <strong>Today</strong>,
        },
        60: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            marginTop: '15px',

            fontSize: '14px',
            color: '#505565',
            left: '98%',
          },
          label: <strong>60 Days Ago</strong>,
        },
      },
      marks: {
        0: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            marginTop: '15px',

            color: '#505565',
            left: '5%',
          },
          label: <strong>Fresh</strong>,
        },
        30: {
          style: {
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            color: '#505565',
            marginTop: '15px',

            left: '95%',
          },
          label: <strong>30+ Years</strong>,
        },
      },
    };
  },
  methods: {
    handleChange(value) {
      this.value = value;
    },
    toggleCategory: function() {
      this.toggleCat = !this.toggleCat;
    },
    toggleCompanySize: function() {
      this.toggleCompanySizeOpt = !this.toggleCompanySizeOpt;
    },
    toggleTimePosted: function() {
      this.toggleTimePostedOpt = !this.toggleTimePostedOpt;
    },
    toggleJobType: function() {
      this.toggleJobTypeOpt = !this.toggleJobTypeOpt;
    },
    toggleSalary: function() {
      this.toggleSalaryOpt = !this.toggleSalaryOpt;
    },
    toggleExperience: function() {
      this.toggleExperienceOpt = !this.toggleExperienceOpt;
    },
    toggleLocation: function() {
      this.toggleLocationOpt = !this.toggleLocationOpt;
    },
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    },
    onChangeLocation(e) {
      console.log('radio checked', e.target.value);
    },
    onChangeCompanySize(checkedValues) {
      console.log('checked = ', checkedValues);
    },
    handleChangeLocationSlider(value) {
      this.valueLocationSlider = value;
    },
    handleChangeTimePosted(value) {
      this.valueTimePosted = value;
    },
  },
};
</script>

<style scoped>
.prb-10 {
  padding-right: 10px;
  padding-bottom: 10px;
}

.pl-0 {
  padding-left: 0px;
}

.radio-label {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #505565;
}

.p-0 {
  padding: 0;
}

.text-align-initial {
  text-align: initial !important;
}

.box-job-type-fonts {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #0084f4;
}

.background-left-side-menu {
  padding: 10px 20px 20px 20px;
  background: #fafafa;
}

.mt-10 {
  margin-top: 10px;
}

.checkbox-color-featured-jobs {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  text-decoration-line: underline;

  color: #0084f4;
}

.checkbox-color {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Text / 03 */

  color: #8b90a0;
}

.boxes-job-type {
  background: rgba(90, 170, 223, 0.04);
  border: 1px solid #0084f4;
  padding: 14px 27px 14px 34px;
  display: flex;
  justify-content: center;
  align-items: center;

}

.location-radio {
  text-align: initial !important;
  padding: 10px 20px 20px 0px;
}

.padding-slider {
  padding: 0px 0px 45px 0px;
}

.padding-slider-time-posted {
  padding: 0px 0px 70px 0px;
}

.ant-slider-handle {
  border-radius: 30% !important;
}

.more-plus {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  text-decoration-line: underline;

  color: #0084f4;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 96%;
  border-top: 1px solid #a1a4b1;
  margin: 1em 0;
  padding: 0;
}

.pt-30 {
  padding-top: 30px;
}

.ptb-20 {
  padding-top: 20px;
  padding-bottom: 20px;
}

.pt-70 {
  padding-top: 70px;
}

.not-selected {
  background: #ffffff;
  /* UI / 05 */

  border: 1px solid #a1a4b1;
  color: #8b90a0;
}

.not-selected-job-type-fonts {
  color: #8b90a0;
}

.industry-title-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #4e4e5a;
}

.display-flex {
  display: flex;
}

.filters-title-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #4e4e5a;
}

.justify-content-space-between {
  justify-content: space-between;
}

.align-item-center {
  align-items: center;
}

.no-of-filters-apply-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #0084f4;
}

.category {
  background: #fafafa;
  height: 220px;
  padding-top: 15px;
  /* margin-left: 10px; */
}

.experience-block {
  background: #fafafa;
  height: 140px;
  padding-top: 15px;
  /* margin-left: 10px; */
}

.company-size-block {
  background: #fafafa;
  height: 200px;
  padding-top: 15px;
}

.location-box {
  background: #fafafa;
  height: 170px;
  padding-top: 15px;
  /* margin-left: 10px; */
}

.time-posted-block {
  background: #fafafa;
  height: 160px;
  padding-top: 15px;
  /* margin-left: 10px; */
}

.expand-transition {
  transition: all 0.5s ease;
}

/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter,
.expand-leave {
  height: 0;
  opacity: 0;
}

.cursor-pointer {
  cursor: pointer;
}

@media (max-width: 991px) {
  .background-left-side-menu {
    display: none;
    position: fixed;
    top: 130px;
    left: 0;
    max-width: 400px;
    z-index: 4;
    width: 100%;
    overflow: auto;
    height: calc(100vh - 130px)

  }

  /* width */
  .background-left-side-menu::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  .background-left-side-menu::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  .background-left-side-menu::-webkit-scrollbar-thumb {
    background: #5f7582;
    border-radius: 4px;
  }

  .background-left-side-menu.opened {
    display: block
  }
}
</style>
