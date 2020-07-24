import React from "react";
import "./index.css";
import employees from "./employees.json"
import Table from "./components/Table"

function App() {


  return (
    <div className="container content">
      <header>
        <h1>Employee Directory</h1>
        <Table>
        {employees.map(employee => (
          <tr>
            <td>{employee.id}</td>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.department}</td>
            <td>{employee.role}</td>
          </tr>
          ))}
        </Table>
      </header>
    </div>
  );
}

export default App;
