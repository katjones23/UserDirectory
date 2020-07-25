import React, { useState } from "react";
import "./index.css";
import employeeList from "./employees.json"

import Table from "./components/Table"
import TableHeader from "./components/TableHeader"
import THItem from "./components/THItem"
import TableBody from "./components/TableBody"
import TableRow from "./components/TableRow"
import TBItem from "./components/TBItem"
import DropdownBtn from "./components/DropdownBtn"
import Search from "./components/Search"

function App() {

  const [employees, setEmployees] = useState(employeeList)
  const [searchState, setSearch] = useState("")
  const [updateView, setUpdateView] = useState(0);

  function handleOnClick(event) {
    const column = event.target.dataset.text
    let sortedEmp = employees

    function compare(item1, item2) {
      if (item1 < item2) {
        return -1;
      }
      else if (item1 > item2) {
        return 1;
      }
      else {
        return 0;
      };
    };

    switch (column) {
      case "ID":
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.id, emp2.id) });
        break;
      case "First Name":
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.firstname, emp2.firstname) });
        break;
      case "Last Name":
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.lastname, emp2.lastname) });
        break;
      case "Department":
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.department, emp2.department) });
        break;
      case "Role":
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.role, emp2.role) });
        break;
      default:
        sortedEmp.sort((emp1, emp2) => { return compare(emp1.id, emp2.id) });
    };

    setEmployees(sortedEmp);
    setUpdateView(updateView + 1);
  }

  function handleFilter(event) {
    const button = event.target.dataset.text
    let filteredEmps = employees

    switch (button) {
      case "sales":
        filteredEmps = employeeList
        filteredEmps = filteredEmps.filter(employee => employee.department === "Sales");
        break;
      case "technology":
        filteredEmps = employeeList
        filteredEmps = filteredEmps.filter(employee => employee.department === "Technology");
        break;
      case "hr":
        filteredEmps = employeeList
        filteredEmps = filteredEmps.filter(employee => employee.department === "HR");
        break;
      case "reset":
        filteredEmps = employeeList
        break;
      default:
        filteredEmps = employeeList
    };

    setEmployees(filteredEmps);
  }

  function handleChange(event) {
    const searchText = event.target.value;
    setSearch(searchText)
    console.log(searchState)

    if (searchState === "" || searchState.length < 2) {
      setEmployees(employeeList)
    } else {
      setEmployees(employees.filter(employee => employee.firstname.toLowerCase().includes(searchState)))
    }
  }


  return (
    <div className="container content">
      <header>
        <h1>Employee Directory</h1>
      </header>

      <p>Click on column name to sort</p>

      <div className="text-center">
        <DropdownBtn handleFilter={handleFilter}></DropdownBtn>
        <button onClick={handleFilter} data-text="reset" type="button" className="btn btn-danger">Reset</button>
      </div>

      <div className="text-center">
        <Search handleChange={handleChange}></Search>
      </div>

      <Table>
        <TableHeader>
          <THItem handleOnClick={handleOnClick}>ID</THItem>
          <THItem handleOnClick={handleOnClick}>First Name</THItem>
          <THItem handleOnClick={handleOnClick}>Last Name</THItem>
          <THItem handleOnClick={handleOnClick}>Department</THItem>
          <THItem handleOnClick={handleOnClick}>Role</THItem>
        </TableHeader>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee.id.toString()}>
              <TBItem>{employee.id}</TBItem>
              <TBItem>{employee.firstname}</TBItem>
              <TBItem>{employee.lastname}</TBItem>
              <TBItem>{employee.department}</TBItem>
              <TBItem>{employee.role}</TBItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  );
}

export default App;
