import React from "react";
import "./index.css";
import Table from "./components/Table"

function App() {


  return (
    <div className="container content">
      <header>
        <h1>Employee Directory</h1>
        <Table>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Sales</td>
            <td>Account Manager</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Technology</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>Bird</td>
            <td>HR</td>
            <td>Manager</td>
          </tr>
        </Table>
      </header>
    </div>
  );
}

export default App;
