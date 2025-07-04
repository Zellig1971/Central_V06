import { memo, Fragment, useRef } from 'react'
// datatable
import useDataTable from '../../../components/hooks/useDatatable.js'

//react-bootstrap
import { Row, Col, Image } from 'react-bootstrap'

//router
import { Link } from 'react-router-dom'

//components
import Card from '../../../components/bootstrap/card'

// img
import shap1 from '/src/assets/images/shapes/01.png'
import shap2 from '/src/assets/images/shapes/02.png'
import shap3 from '/src/assets/images/shapes/03.png'
import shap4 from '/src/assets/images/shapes/04.png'
import shap5 from '/src/assets/images/shapes/05.png'
import shap6 from '/src/assets/images/shapes/06.png'

const tableData = [
   {
      image: `${shap1}`,
      name: 'Anna Sthesia',
      contact: '(760) 756 7568',
      email: 'annasthesia@gmail.com',
      country: 'USA',
      company: 'Acme Corporation',
      date: '2019/12/01',
      statustype: {
         statusColor: 'primary',
         bgColor: 'primary',
         status: 'Active'
      }
   },
   {
      image: `${shap2}`,
      name: 'Brock Lee',
      contact: '+62 5689 458 658',
      email: 'brocklee@gmail.com',
      country: 'Indonesia',
      company: 'Soylent Corp',
      date: '2019/12/01',
      statustype: {
         statusColor: 'primary',
         bgColor: 'primary',
         status: 'Active'
      }
   },
   {
      image: `${shap3}`,
      name: 'Dan Druff',
      contact: '+55 6523 456 856',
      email: 'dandruff@gmail.com',
      country: 'Brazil',
      company: 'Umbrella Corporation',
      date: '2019/12/01',
      statustype: {
         statusColor: 'warning',
         bgColor: 'warning',
         status: 'Pending'
      }
   },
   {
      image: `${shap4}`,
      name: 'Hans Olo',
      contact: '+91 2586 253 125',
      email: 'hansolo@gmail.com',
      country: 'India',
      company: 'Vehement Capital',
      date: '2019/12/01',
      statustype: {
         statusColor: 'danger',
         bgColor: 'danger',
         status: 'Inactive'
      }
   },
   {
      image: `${shap5}`,
      name: 'Lynn Guini',
      contact: '+27 2563 456 589',
      email: 'lynnguini@gmail.com',
      country: 'Africa',
      company: 'Massive Dynamic',
      date: '2019/12/01',
      statustype: {
         statusColor: 'primary',
         bgColor: 'primary',
         status: 'Active'
      }
   },
   {
      image: `${shap6}`,
      name: 'Eric Shun',
      contact: '+55 25685 256 589',
      email: 'ericshun@gmail.com',
      country: 'Brazil',
      company: 'Globex Corporation',
      date: '2019/12/01',
      statustype: {
         statusColor: 'warning',
         bgColor: 'warning',
         status: 'Pending'
      }
   },
   {
      image: `${shap3}`,
      name: 'aaronottix',
      contact: '(760) 756 7568',
      email: 'budwiser@ymail.com',
      country: 'USA',
      company: 'Acme Corporation',
      date: '2019/12/01',
      statustype: {
         statusColor: 'info',
         bgColor: 'info',
         status: 'Hold'
      }
   },
   {
      image: `${shap5}`,
      name: 'Marge Arita',
      contact: '+27 5625 456 589',
      email: 'margearita@gmail.com',
      country: 'Africa',
      company: 'Vehement Capital',
      date: '2019/12/01',
      statustype: {
         statusColor: 'success',
         bgColor: 'success',
         status: 'Complite'
      }
   },
   {
      image: `${shap2}`,
      name: 'Bill Dabear',
      contact: '+55 2563 456 589',
      email: 'billdabear@gmail.com',
      country: 'Brazil',
      company: 'Massive Dynamic',
      date: '2019/12/01',
      statustype: {
         statusColor: 'primary',
         bgColor: 'primary',
         status: 'Active'
      }
   }
];

const columns = [
   {
      data: null,
      title: 'Profile',
      render: function (row) {
         return `
     <img class="bg-soft-primary rounded img-fluid avatar-40 me-3" src="${row.image}" alt="profile" loading="lazy">`
      }
   },
   { data: 'name', title: 'Name' },
   { data: 'contact', title: 'Contact' },
   { data: 'email', title: 'Email' },
   { data: 'country', title: 'Country' },
   {
      title: 'Status',
      data: 'statustype',
      render: function (row) {
         return `<span class="badge bg-${row.bgColor} p-2-${row.statusColor}">${row.status}</span>`
      }
   },
   { data: 'company', title: 'Company' },
   { data: 'date', title: 'Join Date' },
   {
      data: null,
      orderable: false,
      searchable: false,
      title: 'Action',
      render: function () {
         return `
      <div class="flex align-items-center list-user-action">
        <a class="btn btn-sm btn-icon btn-success" data-bs-toggle="tooltip" data-bs-placement="top" href="#" aria-label="Add" data-bs-original-title="Add">
          <span class="btn-inner">
            <svg class="icon-32" width="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M19.2036 8.66919V12.6792" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
               <path d="M21.2497 10.6741H17.1597" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>                                        
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-warning" data-bs-toggle="tooltip" data-bs-placement="top" data-original-title="Edit" href="#" aria-label="Edit" data-bs-original-title="Edit">
          <span class="btn-inner">
            <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.4925 2.78906H7.75349C4.67849 2.78906 2.75049 4.96606 2.75049 8.04806V16.3621C2.75049 19.4441 4.66949 21.6211 7.75349 21.6211H16.5775C19.6625 21.6211 21.5815 19.4441 21.5815 16.3621V12.3341" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82812 10.921L16.3011 3.44799C17.2321 2.51799 18.7411 2.51799 19.6721 3.44799L20.8891 4.66499C21.8201 5.59599 21.8201 7.10599 20.8891 8.03599L13.3801 15.545C12.9731 15.952 12.4211 16.181 11.8451 16.181H8.09912L8.19312 12.401C8.20712 11.845 8.43412 11.315 8.82812 10.921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M15.1655 4.60254L19.7315 9.16854" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </a>
        <a class="btn btn-sm btn-icon btn-danger" data-bs-toggle="tooltip" data-bs-placement="top" href="#" aria-label="Delete" data-bs-original-title="Delete">
          <span class="btn-inner">
            <svg class="icon-20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
              <path d="M19.3248 9.46826C19.3248 9.46826 18.7818 16.2033 18.4668 19.0403C18.3168 20.3953 17.4798 21.1893 16.1088 21.2143C13.4998 21.2613 10.8878 21.2643 8.27979 21.2093C6.96079 21.1823 6.13779 20.3783 5.99079 19.0473C5.67379 16.1853 5.13379 9.46826 5.13379 9.46826" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M20.708 6.23975H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M17.4406 6.23973C16.6556 6.23973 15.9796 5.68473 15.8256 4.91573L15.5826 3.69973C15.4326 3.13873 14.9246 2.75073 14.3456 2.75073H10.1126C9.53358 2.75073 9.02558 3.13873 8.87558 3.69973L8.63258 4.91573C8.47858 5.68473 7.80258 6.23973 7.01758 6.23973" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        </a>
      </div>`
      }
   }
];
const UserList = memo(() => {
     const tableRef = useRef(null);
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData,
  });
   return (
      <Fragment>
         <Row>
            <Col sm="12">
               <Card>
                  <Card.Header className="d-flex justify-content-between">
                     <div className="header-title">
                        <h4 className="card-title">User List</h4>
                     </div>
                  </Card.Header>
                  <Card.Body>
                     <div className="table-responsive border rounded">
                        <table id="datatable" ref={tableRef} className="table" data-toggle="data-table"></table>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   )

}
)

UserList.displayName = "UserList"
export default UserList;