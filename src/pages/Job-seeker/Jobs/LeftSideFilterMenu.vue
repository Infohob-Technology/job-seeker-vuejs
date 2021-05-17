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
    <transition name="expand" mode="out-in">
      <div
        v-if="toggleCat"
        class="category expand-transition"
        :style="{'height': ((compIndustries.length*40)+80)+'px'}"

      >
        <a-checkbox-group @change="onChange">
          <a-row>
            <a-col v-for="item in compIndustries" :key="item.value"
                   :span="24"
                   class="text-align-initial"
            >
              <a-checkbox
                :value="item.value"
                class="text-align-initial checkbox-color mt-10"
              >{{ item.name }}
              </a-checkbox
              >
            </a-col
            >
          </a-row>
        </a-checkbox-group>
        <div class="text-align-initial ptb-20" v-if="industries.length>showItems">
          <span class="more-plus" v-if="!showAllIndustries" @click="showAllIndustries=true">+{{ industries.length-showItems }} More</span>
          <span class="more-plus" v-else @click="showAllIndustries=false">-Show less</span>
        </div>
        <div class="ml-10px">
          <hr/>
        </div>
      </div>
    </transition>

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
    <transition name="expand" mode="out-in">
    <div
      v-if="toggleSalaryOpt"
      class="category expand-transition"
      :style="{'height': ((compSalaries.length*40)+80)+'px'}"
    >
      <a-checkbox-group @change="onChange">
        <a-row>
          <a-col :span="24" class="text-align-initial"
                 v-for="item in compSalaries"
                 :key="item.value"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              :value="item.name"
            >{{ item.name }}
            </a-checkbox
            >
          </a-col
          >
        </a-row>
      </a-checkbox-group>
      <div class="text-align-initial ptb-20" v-if="salaries.length>showItems">
        <span class="more-plus" v-if="!showAllSalaries" @click="showAllSalaries=true">+{{ salaries.length-showItems }} More</span>
        <span class="more-plus" v-else @click="showAllSalaries=false">-Show less</span>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    </transition>
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
    <transition name="expand" mode="out-in">
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
    </transition>
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
    <transition name="expand" mode="out-in">
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
    </transition>
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
    <transition name="expand" mode="out-in">
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
    </transition>
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
    <transition name="expand" mode="out-in">
    <div
      v-if="toggleCompanySizeOpt"
      class="category expand-transition"
      :style="{'height': ((compSize.length*40)+80)+'px'}"
    >
      <a-checkbox-group @change="onChangeCompanySize">
        <a-row>
          <a-col :span="24" class="text-align-initial"
                 v-for="item in compSize"
                 :key="item.value"
          >
            <a-checkbox
              class="text-align-initial checkbox-color mt-10"
              :value="item.value"
            >{{ item.name }}
            </a-checkbox
            >
          </a-col
          >

        </a-row>
      </a-checkbox-group>
      <div class="text-align-initial ptb-20" v-if="sizeCompany.length>showItems">
        <span class="more-plus" v-if="!showAllSize" @click="showAllSize=true">+{{ sizeCompany.length-showItems }} More</span>
        <span class="more-plus" v-else @click="showAllSize=false">-Show less</span>
      </div>
      <div class="ml-10px">
        <hr/>
      </div>
    </div>
    </transition>
    <div
      class="pt-30 cursor-pointer display-flex justify-content-space-between align-item-center"
      v-on:click="toggleJobType()"
    >
      <div><span class="industry-title-text">Job Type</span></div>
      <div>
        <span class="no-of-filters-apply-text"
        ><img alt="" src="../../../assets/Vector (3).png"/>
        </span>
      </div>
    </div>
    <transition name="expand" mode="out-in">
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
    </transition>
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
      industries: [
        {
          name: 'Industry A',
          value: 'A',
        }, {
          name: 'Industry B',
          value: 'B',
        }, {
          name: 'Industry c',
          value: 'c',
        }, {
          name: 'Industry D',
          value: 'D',
        }, {
          name: 'Industry E',
          value: 'E',
        }, {
          name: 'Industry F',
          value: 'F',
        }, {
          name: 'Industry G',
          value: 'G',
        }, {
          name: 'Industry H',
          value: 'H',
        },
      ],
      showAllIndustries: false,
      salaries: [
        {
          value: '0-2',
          name: '0-2 Lakh ₦ (200)'
        },
        {
          value: '2-5',
          name: '2-5 Lakh ₦ (200)'
        },
        {
          value: '5-7',
          name: '5-7 Lakh ₦ (200)'
        },
        {
          value: '7-9',
          name: '7-9 Lakh ₦ (200)'
        },
        {
          value: '9-12',
          name: '9-12 Lakh ₦ (200)'
        },
        {
          value: '12-14',
          name: '12-14 Lakh ₦ (200)'
        },
        {
          value: '14-16',
          name: '14-16 Lakh ₦ (200)'
        },

      ],
      showAllSalaries: false,
      sizeCompany: [
        {name: '5-50 Employees', value: '5-50'},
        {name: '50-100 Employees', value: '50-100'},
        {name: '100-150 Employees', value: '100-150'},
        {name: '150-200 Employees', value: '150-200'},
        {name: '200-250 Employees', value: '200-250'},
        {name: '250-300 Employees', value: '250-300'},
        {name: '300-500 Employees', value: '300-500'},
      ],
      showAllSize: false,
      showItems: 4,
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
      // =>checkedValues
    },
    onChangeLocation(e) {
      // => e.target.value
    },
    onChangeCompanySize(checkedValues) {
      // => checkedValues
    },
    handleChangeLocationSlider(value) {
      this.valueLocationSlider = value;
    },
    handleChangeTimePosted(value) {
      this.valueTimePosted = value;
    },
  },
  computed: {
    compIndustries() {
      return this.showAllIndustries ? [...this.industries] : [...this.industries].splice(0, this.showItems);
    },
    compSalaries() {
      return this.showAllSalaries ? [...this.salaries] : [...this.salaries].splice(0, this.showItems);
    },
    compSize() {
      return this.showAllSize ? [...this.sizeCompany] : [...this.sizeCompany].splice(0, this.showItems);
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
  padding: 0px 0px 45px 15px;
}

.padding-slider-time-posted {
  padding: 0px 0px 70px 0px;
}

.ant-slider-handle {
  border-radius: 30% !important;
}

.more-plus {
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

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
  font-family: 'Open Sans',sans-serif;
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
  font-family: 'Open Sans',sans-serif;
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
  transition: all 0.3s ease;
  overflow: hidden;
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
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 230px;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
  max-height: 0px;
  overflow: hidden;
}
</style>
