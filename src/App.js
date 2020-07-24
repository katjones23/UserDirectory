import React from "react";
import "./index.css";
import employees from "./employees.json"

import Table from "./components/Table"
import TableHeader from "./components/TableHeader"
import THItem from "./components/THItem"
import TableBody from "./components/TableBody"
import TableRow from "./components/TableRow"
import TBItem from "./components/TBItem"

function App() {


  return (
    <div className="container content">
      <header>
        <h1>Employee Directory</h1>
        <Table>
          <TableHeader>
            <THItem>ID</THItem>
            <THItem>First Name</THItem>
            <THItem>Last Name</THItem>
            <THItem>Department</THItem>
            <THItem>Role</THItem>
          </TableHeader>
          <TableBody>
            {employees.map(employee => (
              <TableRow>
                <TBItem>{employee.id}</TBItem>
                <TBItem>{employee.firstname}</TBItem>
                <TBItem>{employee.lastname}</TBItem>
                <TBItem>{employee.department}</TBItem>
                <TBItem>{employee.role}</TBItem>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </header>
    </div>
  );
}

export default App;
