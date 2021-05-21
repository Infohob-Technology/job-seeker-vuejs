<template>
  <div class="container-fluid main-div-height-job-seeker-list">
    <div class="text-align-right mt-50">
      <a-button type="solid add-more-text-admin-job-seeker">
        <span>
          <a-icon class="vertical-align-middle" type="plus" /> 
          Add New Job Seeker
        </span>
      </a-button>
    </div>

    <a-tabs class="job-seeker-listing-tabs" default-active-key="1" size="small">
      <a-tab-pane key="1" tab="Job Seeker List">
        <div class="top-section">
          <div class="number-card-container">
            <div class="box-job-seeker-admin ">
              <div>
                <span class="no-of-total-category">1202</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Total Job Seekers</span>
              </div>
            </div>
            <div class="box-job-seeker-admin">
              <div>
                <span class="no-of-total-category">250</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Newly Joined In July</span>
              </div>
            </div>
            <div class="box-job-seeker-admin  ">
              <div>
                <span class="no-of-total-category">125</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Male Job Seekers</span>
              </div>
            </div>
            <div class="box-job-seeker-admin  ">
              <div>
                <span class="no-of-total-category">150</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Female Job Seekers</span>
              </div>
            </div>
            <div class="box-job-seeker-admin  ">
              <div>
                <span class="no-of-total-category">90</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Active this Month</span>
              </div>
            </div>
            <div class="box-job-seeker-admin  ">
              <div>
                <span class="no-of-total-category">120</span>
              </div>
              <div>
                <span class="total-number-title-text-job-seeker-admin">Active this Month</span>
              </div>
            </div>
          </div>
          <div>
            <a-form-item>
              <a-input class="searchbox-style mb-2" v-decorator="[
                  'userName',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ],
                  },
                ]" placeholder="Search Job Seekers">
                <a-icon slot="prefix" type="search" style="color: rgba(0, 0, 0, 0.25)" />
              </a-input>
            </a-form-item>
          </div>
        </div>

        <a-table :columns="columns" :data-source="data" :pagination="pagination">
          <span slot="name" @click="displayDetailed" slot-scope="text">{{text}}</span>
          <span class="table-header-title" slot="customTitle">NAME</span>
          <span class="table-header-title" slot="customTitleEmail">EMAIL ADDRESS</span>
          <span class="table-header-title" slot="customTitleRegisteredData">REGISTERED ON</span>
          <span class="table-header-title" slot="customTitleLastLoginDate">LAST LOGIN</span>
          <!-- <span class="table-header-title" slot="customTitleStatus">STATUS</span> -->
          <span slot="status" slot-scope="status" class="table-header-title">
            <a-tag :key="status" class="tags-class-job-listing" :color="status === 'active' ? 'green' : 'volcano'">
              {{ status.toUpperCase() }}
            </a-tag>
          </span>
          <div class="table-header-title display-flex" slot="action" slot-scope="text, record">
            <div class="action-box-job-seeker ">
              <img src="/static/vector/eye.svg" alt="">
            </div>
            <div class="action-box-job-seeker ">
              <img src="/static/vector/edit.svg" alt="">
            </div>
            <div class="action-box-job-seeker  success">
              <img src="/static/vector/check.svg" alt="">
            </div>
            <div class="action-box-job-seeker ">
              <img src="/static/vector/bin.svg" alt="">
            </div>
          </div>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Settings"> Content of tab 2 </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    dataIndex: "email",
    key: "email",
    slots: { title: "customTitleEmail" },
    scopedSlots: { customRender: "email" },
  },
  {
    dataIndex: "registered_on",
    key: "registered_on",
    slots: { title: "customTitleRegisteredData" },
    scopedSlots: { customRender: "registered_on" },
  },
  {
    dataIndex: "last_login",
    key: "last_login",
    slots: { title: "customTitleLastLoginDate" },
    scopedSlots: { customRender: "last_login" },
  },
  // {
  //   dataIndex: "status",
  //   key: "status",
  //   slots: { title: "customTitleStatus" },
  //   scopedSlots: { customRender: "status" },
  // },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
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
    key: "action",
    dataIndex: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    id: "1",
    name: "John Brown",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    is_approved: "yes",
  },
  {
    key: "2",
    id: "2",
    name: "Jim Green",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    id: "3",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "4",
    id: "4",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "5",
    id: "5",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "6",
    id: "6",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "7",
    id: "7",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "8",
    id: "8",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "9",
    id: "9",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "10",
    id: "10",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "11",
    id: "11",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "12",
    id: "12",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "13",
    id: "13",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "14",
    id: "14",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
];

export default {
  name: "AdminJobSeeker",
  data() {
    return {
      data,
      columns,
      
      pagination: {
        pageSize: 10, // default number of pages per page
        showSizeChanger: true, // display can change the number of pages per page
        pageSizeOptions: ["10", "20", "30", "40"], // number of pages per option
        showTotal: (total) => `Total ${total} items`, // show total
        showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // update display when changing the number of pages per page
      },
    };
  },
  methods: {
    displayDetailed() {
      this.$router.push("/admin/job-seeker/10");
    },
  },
};
</script>
<style scoped>
.main-div-height-job-seeker-list {
  min-height: calc(100vh - 240px);
  padding: 50px;
}

.add-more-text-admin-job-seeker {
  background: #0385f3;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  position: absolute;
  right: 20px;
  top: 123px;
  height: 42px;
}

.table-header-title {
  font-family: 'Open Sans',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #8b90a0;
  column-gap: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}

.action-box-job-seeker {
  background: #fafafc;
  margin-right: 5px;
  border: 1px solid #f0f1f3;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.action-box-job-seeker.success{
  background: rgba(0, 186, 103, 0.1);
}
.action-box-job-seeker.danger{
  background:rgba(255, 76, 104, 0.1);
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
  vertical-align: middle;
}
.no-of-total-category {
  font-family: Open Sans;
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
.number-card-container{
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin:30px 0px;
}
.box-job-seeker-admin {
  flex:0 1 195px;
  background: #fafdff;
  padding: 19px 0px 20px 20px;
  text-align: initial;
  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  border-radius: 8px;
  height: 96px;
  margin:5px;
}
.ant-spin-container{
  margin: 3px 40px!important;
  width:1244px!important;
  overflow-x: scroll!important;
}
.text-align-initial{
  margin: 3px 40px;
}
.top-section{
  margin-left:30px;
}
th{
  min-width: 150px!important;
}
.ant-table-row-cell-last{
  min-width: 150px!important;
}

@media only screen and (max-width: 767px) {
 .main-div-height-job-seeker-list {
   
    padding: 0px 20px;
    padding-top:100px!important;
  } 
}
@media only screen and (max-width: 500px) {
  .searchbox-style{
    width:300px;
  }
}
@media only screen and (max-width: 380px) {
  .main-div-height-job-seeker-list {
    padding: 0px 10px;
    padding-top:100px!important;
  } 
  .searchbox-style{
    width:auto;
    max-width: 300px;
  }
  
}
</style>
