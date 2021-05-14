<template>
  <div class="container-fluid main-div-height-job-seeker-list">
    <div class="d-flex justify-content-end text-align-right mt-50">
      <a-button type="solid add-more-text-admin-job-seeker" @click="showAddSekeer=true">
        <span
        ><a-icon class="vertical-align-middle" type="plus"/> Add New Job
          Seeker</span
        >
      </a-button>
    </div>

    <a-tabs class="job-seeker-listing-tabs" default-active-key="1" size="large">
      <a-tab-pane key="1" tab="Job Seeker List">
        <div class="number-card-container">
          <div class="box-job-seeker-admin ">
            <div>
              <span class="no-of-total-category">1202</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Total Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin  ">
            <div>
              <span class="no-of-total-category">250</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Newly Joined In July</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin  ">
            <div>
              <span class="no-of-total-category">125</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Male Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin  ">
            <div>
              <span class="no-of-total-category">150</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Female Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin  ">
            <div>
              <span class="no-of-total-category">90</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Active this Month</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin  ">
            <div>
              <span class="no-of-total-category">120</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
              >Active this Month</span
              >
            </div>
          </div>
        </div>
        <div class="text-align-initial">
          <a-form-item>
            <a-input
              v-decorator="[
                'userName',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ],
                },
              ]"
              class="searchbox-style"
              placeholder="Search Job Seekers"
            >
              <a-icon
                slot="prefix"
                style="color: rgba(0, 0, 0, 0.25)"
                type="search"
              />
            </a-input>
          </a-form-item>
        </div>
        <a-table
          :columns="columns"
          :data-source="data"
          :pagination="pagination"
        >
          <span slot="name" slot-scope="text" @click="displayDetailed">{{
              text
            }}</span>
          <span slot="customTitle" class="table-header-title">NAME</span>
          <span slot="customTitleEmail" class="table-header-title"
          >EMAIL ADDRESS</span
          >
          <span slot="customTitleRegisteredData" class="table-header-title"
          >REGISTERED ON</span
          >
          <span slot="customTitleLastLoginDate" class="table-header-title"
          >LAST LOGIN</span
          >
          <!-- <span class="table-header-title" slot="customTitleStatus"
            >STATUS</span
          > -->
          <span slot="status" slot-scope="status">
            <a-tag
              :key="status"
              :color="status === 'active' ? 'green' : 'volcano'"
              class="tags-class-job-listing"
            >
              {{ status.toUpperCase() }}
            </a-tag>
          </span>
          <div
            slot="action"
            slot-scope="text, record"
            class="table-header-title display-flex"
          >
            <div class="action-box-job-seeker ">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#A1A4B1"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>

            </div>
            <div class="action-box-job-seeker ">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                  stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path
                  d="M18.5 2.50023C18.8978 2.1024 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.1024 21.5 2.50023C21.8978 2.89805 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.1024 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                  stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>

            </div>
            <div class="action-box-job-seeker  success">
              <svg fill="none" height="13" viewBox="0 0 18 13" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1L6 12L1 7" stroke="#00BA67" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"/>
              </svg>

            </div>
            <div class="action-box-job-seeker ">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H5H21" stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path
                  d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                  stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M10 11V17" stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                <path d="M14 11V17" stroke="#A1A4B1" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>

            </div>
          </div>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Settings">
      <div class="row">
        <div class="col-md-6">
          <div class="settings">
            <h4>Do we need administrator approval for Jobseeker account ?</h4>
            <div class="row mb-3">
              <div class="col-6">
                <label class="settings-label">
                  <input type="radio" name="setting" value="yes">
                  Yes
                </label>
              </div>
              <div class="col-6">
                <label class="settings-label">
                  <input type="radio" name="setting" value="no">
                  No
                </label>
              </div>
            </div>



           <div class="row p-0">
             <div class="col-6">
               <button class="btn btn-light btn-block" >
                 Cancel
               </button>
             </div>
             <div class="col-6">

               <button class="btn btn-primary btn-block">
                 Apply
               </button>

             </div>
           </div>

          </div>
        </div>
      </div>
      </a-tab-pane>
    </a-tabs>
    <AddJobSeeker :visible="showAddSekeer" @closeMe="showAddSekeer=false" />
  </div>
</template>
<script>
import AddJobSeeker from './AddJobSeeker'
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: {title: 'customTitle'},
    scopedSlots: {customRender: 'name'},
  },
  {
    dataIndex: 'email',
    key: 'email',
    slots: {title: 'customTitleEmail'},
    scopedSlots: {customRender: 'email'},
  },
  {
    dataIndex: 'registered_on',
    key: 'registered_on',
    slots: {title: 'customTitleRegisteredData'},
    scopedSlots: {customRender: 'registered_on'},
  },
  {
    dataIndex: 'last_login',
    key: 'last_login',
    slots: {title: 'customTitleLastLoginDate'},
    scopedSlots: {customRender: 'last_login'},
  },
  // {
  //   dataIndex: "status",
  //   key: "status",
  //   slots: { title: "customTitleStatus" },
  //   scopedSlots: { customRender: "status" },
  // },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    scopedSlots: {customRender: 'status'},
  },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age",
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   scopedSlots: { customRender: "tags" },
  // },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',

    scopedSlots: {customRender: 'action'},
  },
];

const data = [
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
    is_approved: 'yes',
  },
  {
    key: '2',
    id: '2',
    name: 'Jim Green',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'Inactive',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    id: '3',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '4',
    id: '4',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'Inactive',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '5',
    id: '5',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '6',
    id: '6',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'Inactive',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '7',
    id: '7',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'Inactive',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '8',
    id: '8',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '9',
    id: '9',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '10',
    id: '10',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '11',
    id: '11',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '12',
    id: '12',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '13',
    id: '13',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
  {
    key: '14',
    id: '14',
    name: 'Joe Black',
    email: 'rowg@gmail.com',
    registered_on: '31 Dec 2020',
    last_login: '24 jan 2019',
    status: 'active',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    is_approved: 'yes',
  },
];

export default {
  name: 'AdminJobSeeker',
  data() {
    return {
      data,
      columns,
      pagination: {
        pageSize: 10, // default number of pages per page
        showSizeChanger: true, // display can change the number of pages per page
        pageSizeOptions: ['10', '20', '30', '40'], // number of pages per option
        showTotal: (total) => `Total ${total} items`, // show total
        showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // update display when changing the number of pages per page
      },
      showAddSekeer: false
    };
  },
  components: {
    AddJobSeeker
  },
  methods: {
    displayDetailed() {
      this.$router.push('/admin/job-seeker/10');
    },

  },
};
</script>
<style scoped>
.main-div-height-job-seeker-list {
  min-height: calc(100vh - 240px);
  margin-top: 60px;
  padding-left: 100px;
  padding-right: 100px;
}

.add-more-text-admin-job-seeker {
  background: #0385f3;
  border-radius: 4px;
  align-items: center;
  color: #ffffff;
  height: 48px;
}

.table-header-title {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #8b90a0;
  column-gap: 10px;
  display: flex;
}

.action-box-job-seeker {
  background: #fafafc;


  border: 1px solid #f0f1f3;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  /*!*font-family: Open Sans;*!*/
  /*font-style: normal;*/
  /*font-weight: 600;*/
  /*font-size: 16px;*/
  /*!* text-align: center; *!*/
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /*!* align-items: unset; *!*/
  /*vertical-align: middle;*/

}

.action-box-job-seeker.success {
  background: rgba(0, 186, 103, 0.1);
}

.action-box-job-seeker.danger {
  background: rgba(255, 76, 104, 0.1);
}

.tags-class-job-listing {
  border: none;
  width: 152px;
  height: 44px;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: unset; */
  vertical-align: middle;
}

.settings h4{
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.settings-label{
  height: 52px;
  width: 100%;
  background: rgba(90, 170, 223, 0.04);
  border: 1px solid #5AAADF;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 30px;
  column-gap: 10px;
}
.btn-block{
  height: 48px;
}
.no-of-total-category {
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #505565;
}

.total-number-title-text-job-seeker-admin {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #8b90a0;
}


.searchbox-style {
  width: 420px;
  /* height: 48px; */
  border-radius: 4px;
  background: #ffffff;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}

.text-align-initial {
  text-align: initial;
}

.number-card-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 15px 0px;
}

.box-job-seeker-admin {
  flex: 0 1 200px;
  background: #fafdff;
  padding: 19px 0px 20px 20px;
  text-align: initial;
  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  border-radius: 8px;
  height: 96px;
  margin: 5px;
}

.ant-spin-container {
  margin: 3px 40px !important;
  width: 1244px !important;
  overflow-x: scroll !important;
}

.text-align-initial {
  margin: 3px 40px;
}

/* .ant-tabs{
  overflow: auto!important;
} */
th {
  min-width: 150px !important;
}

.ant-table-row-cell-last {
  min-width: 150px !important;
}
@media (max-width: 768px){
  .container-fluid{
    padding-left: 20px;
    padding-right:   20px
  }
}
</style>
