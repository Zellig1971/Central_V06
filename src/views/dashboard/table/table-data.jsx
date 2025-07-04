import { memo, Fragment, useRef } from "react";
// datatable
import useDataTable from '../../../components/hooks/useDatatable.js'

//react-bootstrap
import { Row, Col } from "react-bootstrap";

//components
import Card from "../../../components/bootstrap/card";

export const generatePath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const tableData = [
  {
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    startdate: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    age: "47",
    startdate: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    startdate: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    startdate: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    startdate: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    startdate: "2012/12/02",
    salary: "$372,000",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    age: "38",
    startdate: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: "21",
    startdate: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    age: "46",
    startdate: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    startdate: "2012/03/29",
    salary: "$433,060",
  },
];
const columns = [
  { data: 'name', title: ' Name' },
  { data: 'position', title: 'Position' },
  { data: 'office', title: 'Office' },
  { data: 'age', title: 'Age' },
  { data: 'startdate', title: 'Start Date' },
  { data: 'salary', title: 'Salary' }
];

const TableData = memo(() => {
  const tableRef = useRef(null)
  useDataTable({
    tableRef: tableRef,
    columns: columns,
    data: tableData
  });

const columnTableRef = useRef(null)
  useDataTable({
    tableRef: columnTableRef,
    columns: columns,
    data: tableData,
    isColumnHidden: true,
    isColumnHiddenClass: '.toggle-vis'
  });

const inputTableRef = useRef(null)
  useDataTable({
    tableRef: inputTableRef,
    columns: columns,
    data: tableData,
    isFilterColumn: true
  });

const langTableRef = useRef(null)
useDataTable({
  tableRef: langTableRef,
  columns: columns,
  data: tableData,
  isMultilang: true
});
  return (
    <Fragment>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Bootstrap Datatable</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <p>
                Images in Bootstrap are made responsive with{" "}
                <code>.img-fluid</code>. <code>max-width: 100%;</code> and{" "}
                <code>height: auto;</code> are applied to the image so that it
                scales with the parent element.
              </p>
              <div className="table-responsive rounded border">
                 <table id="datatable" ref={tableRef} className="table dataTable" data-toggle="data-table"></table>              </div>
            </Card.Body>
          </Card>
                {/* Column Hidden Datatable  */}
      <Card>
        <Card.Header className="d-flex justify-content-between">
          <h5 className="mb-0">Column Hidden Datatable</h5>
        </Card.Header>
        <Card.Body>
          <p className="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div className="table-responsive">
            <div className="mb-3">
              Toggle column: <a className="toggle-vis btn btn-outline-primary" data-column="0">Name</a> - <a className="toggle-vis btn btn-outline-primary" data-column="1">Position</a> - <a className="toggle-vis btn btn-outline-primary" data-column="2">Office</a> - <a className="toggle-vis btn btn-outline-primary" data-column="3">Age</a> - <a className="toggle-vis btn btn-outline-primary" data-column="4">Start date</a> -
              <a className="toggle-vis btn btn-outline-primary" data-column="5">Salary</a>
            </div>
             {/* datatable  */}
                <table id="datatable" ref={columnTableRef} className="table dataTable" data-toggle="data-table"></table>
          </div>
        </Card.Body>
          </Card>
           {/* Input Search Datatable */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Input Search Datatable</h5>
        </Card.Header>
        <Card.Body>
          <p className="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
          <div className="table-responsive">
             {/* datatable  */}
                <table id="datatable" ref={inputTableRef} className="table dataTable" data-toggle="data-table">
                  <tfoot>  
                    <tr className="filters">
                      <th title="Name">Name</th>
                      <th title="Position">Position</th>
                      <th title="Office">Office</th>
                      <th title="Age">Age</th>
                      <th title="Start date">Start date</th>
                      <th title="Salary">Salary</th>
                    </tr>
                  </tfoot>
                </table>
          </div>
        </Card.Body>
          </Card>
          {/* Multi-language Datatable  */}
      <Card>
        <Card.Header>
          <h5 className="mb-0">Multi-language Datatable</h5>
        </Card.Header>
        <Card.Body>
          <p className="mb-3">Images in Bootstrap are made responsive with <code>.img-fluid</code>. <code>max-width: 100%;</code> and <code>height: auto;</code> are applied to the image so that it scales with the parent element.</p>
              <div className="table-responsive">
                <select id="langSelector" className="form-control mb-3">
                  <option id="german" value="german" data-path={generatePath("/vendor/language/german.json")}>German</option>
                  <option id="french" value="french" data-path={generatePath("/vendor/language/french.json")}>French</option>
                  <option id="hindi" value="hindi" data-path={generatePath("/vendor/language/hindi.json")}>Hindi</option>
                  <option id="japanase" value="japanase" data-path={generatePath("/vendor/language/japanese.json")}>Japanese</option>
                  <option id="english" value="eng" data-path={generatePath("/vendor/language/english.json")}>English</option>
                </select>            
              <div>
               {/* datatable  */}
              <table id="datatable" ref={langTableRef} className="table dataTable" data-toggle="data-table"></table>
            </div>
          </div>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </Fragment>
  );
});

TableData.displayName = "TableData";
export default TableData;
