<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="header">
        <p>MY account /<span> Support Account Details</span></p>
      </div>
      <div class="message-wrapper">
        <h1 class="meassage">
          Administrator Account
        </h1>
        <div class="left-table-header">
          <svg width="49" height="46" viewBox="0 0 49 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="1" width="48" height="44" rx="4" fill="#FAFAFC"/>
            <path d="M16 32V25" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 21V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 32V23" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24 19V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32 32V27" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M32 23V14" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 25H19" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M21 19H27" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29 27H35" stroke="#0385F3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <rect y="1" width="48" height="44" rx="4" stroke="#F0F1F3"/>
          </svg>
          <div class="input-outer">
            <input class="input" id="filterbox" type="text" placeholder="Search Support Messages" aria-label="Search">
            <svg class="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#505565"/>
            </svg>
          </div>
        </div>

      </div>
      <table id="example1" class="display" width="100%">
        <thead class="table-head">
        <tr>
          <th>#</th>
          <th>Support User</th>
          <th>User Email</th>
          <th>CreatedOn</th>
          <th>Last Login</th>
          <th>Ticket Handled</th>
          <th>Action</th>
        </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_myAccount-2"
}



var dataSet = [
  [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
  [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
  [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
  [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
  [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
  [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
  [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
  [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
  [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
  [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
  [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
  [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
  [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
  [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
  [ "Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750" ],
  [ "Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500" ],
  [ "Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000" ],
  [ "Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500" ],
  [ "Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000" ],
  [ "Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500" ],
  [ "Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000" ],
  [ "Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000" ],
  [ "Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450" ],
  [ "Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600" ],
  [ "Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000" ],
  [ "Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575" ],
  [ "Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650" ],
  [ "Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850" ],
  [ "Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000" ],
  [ "Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000" ],
  [ "Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400" ],
  [ "Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500" ],
  [ "Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000" ],
  [ "Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500" ],
  [ "Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050" ],
  [ "Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675" ]
];

$.each(dataSet, function(i, data) {
  data.splice(0, 0, i + 1)
})

$(document).ready(function() {
 const t = $('#example1').DataTable( {
    data: dataSet,
   pagingType: 'numbers',
   language: {
     //"info": "Displaying (_PAGE_) of _PAGES_",   // https://datatables.net/reference/option/language
     paginate: {
       next: '<span class="paginate_button previous icon-right"><img src="src/assets/Vector-right.svg" alt="<"></span>',
       previous: '<span class="paginate_button next icon-left"><img src="src/assets/Vector-left.svg" alt=">"></span>'
     },
   },

   'columnDefs': [

     {
       'targets': 6,
       'render': function(data, type, row) {
         //return x('p');
         return 1;


       }


     }
   ],
    "orderClasses": false,
    columns: [
      { title: "#" },
      { title: "Support User" },
      { title: "User Email" },
      { title: "Created On" },
      { title: "Last Login" },
      { title: "Ticket Handled" },
      { title: "Action" },
    ],
  } );
  t.on('order.dt search.dt', function() {
    t.column(6, {
      search: 'applied',
      order: 'applied'
    }).nodes().each(function(cell, i) {
      cell.innerHTML = '<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<rect width="44" height="44" rx="4" fill="#FAFAFC"/>\n' +
        '<path d="M24.12 24.12C23.8454 24.4147 23.5141 24.6511 23.1462 24.8151C22.7782 24.9791 22.3809 25.0673 21.9781 25.0744C21.5753 25.0815 21.1752 25.0074 20.8016 24.8565C20.4281 24.7056 20.0887 24.481 19.8038 24.1961C19.519 23.9113 19.2944 23.5719 19.1435 23.1984C18.9926 22.8248 18.9185 22.4247 18.9256 22.0219C18.9327 21.6191 19.0209 21.2218 19.1849 20.8538C19.3488 20.4858 19.5853 20.1546 19.88 19.88M27.94 27.94C26.2306 29.243 24.1491 29.9649 22 30C15 30 11 22 11 22C12.2439 19.6819 13.9691 17.6566 16.06 16.06L27.94 27.94ZM19.9 14.24C20.5883 14.0789 21.2931 13.9983 22 14C29 14 33 22 33 22C32.393 23.1356 31.6691 24.2047 30.84 25.19L19.9 14.24Z" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '<path d="M11 11L33 33" stroke="#A1A4B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
        '</svg>\n' ;
    });
  }).draw();
  $(document).ready(function(){
    // Redraw the table
    table.draw();

    // Redraw the table based on the custom input
    $('#searchInput,#sortBy').bind("keyup change", function(){
      t.draw();
    });
  });

  $('#filterbox').keyup(function(){
    t.search(this.value).draw();
  });
} );

// function customDatatable_init(t){
//   $('#search-string').on('keyup', function () {
//     t
//       .search(this.value)
//       .draw();
//   });
// }

</script>

<style scoped>
.container-fluid{
  padding-right: 40px;
  padding-left: 40px;
}
.container-fluid .wrapper{
  padding-top: 48px;
}
.container-fluid .wrapper .header p{
  font-size: 14px;
  text-transform: uppercase;
}
.container-fluid .wrapper .header p span{
  color: #0385F3;
}
.container-fluid .wrapper .display .table-head{
  background: #FAFDFF;
  border: 1px solid #F0F1F3;
  border-radius: 8px !important;
}

.container-fluid .wrapper .message-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px 40px 48px 38px;
}
.container-fluid .wrapper .message-wrapper .left-table-header{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.container-fluid .wrapper .message-wrapper .left-table-header .input-outer{
  margin-left: 19px;
}

.container-fluid .wrapper .message-wrapper .meassage{
  font-size: 32px;
  line-height: 48px;
  color: #505565;
}

.container-fluid .wrapper .message-wrapper .input-outer{
  position: relative;
  width: 420px;
}

.container-fluid .wrapper .message-wrapper .input-outer .input{
  width: 100%;
  padding: 12px 14px 12px 44px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.container-fluid .wrapper .message-wrapper .input-outer .input::placeholder{
  color: #8B90A0;
}

.container-fluid .wrapper .message-wrapper .input-outer .search-icon{
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate(0, -50%);
}

.container-fluid .wrapper .display .table-head tr th{
  padding: 28px 44px;
}

.paginate_button .previous .icon-left {
  background: url(/src/assets/Vector-left.svg) no-repeat center rgba(109, 113, 248, .2);
  background-size: 10px;
  color: #ffffff;
  width: 40px;
  height: 35px;
  display: inline-block;
  padding: 0;
  margin-right: -2px;
}

.icon-left:focus {
  border: none;
  outline: none; }

.icon-right:focus {
  border: none;
  outline: none; }

.paginate_button .next .icon-right {
  background: url(/src/assets/Vector-right.svg) no-repeat center #6D71F8;
  background-size: 10px;
  color: #ffffff;
  width: 40px;
  height: 35px;
  display: inline-block;
  padding: 0
}

</style>
