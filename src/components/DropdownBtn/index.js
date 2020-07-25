import React from "react";

function DropdownBtn(props) {
    return <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Filter by Department
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <button className="dropdown-item" type="button" onClick={props.handleFilter} data-text="sales">Sales</button>
      <button className="dropdown-item" type="button" onClick={props.handleFilter} data-text="technology">Technology</button>
      <button className="dropdown-item" type="button" onClick={props.handleFilter} data-text="hr">HR</button>
    </div>
  </div>;
}

export default DropdownBtn;