import React from "react";

function Search(props) {
    return <div className="input-group flex-nowrap">
    <div className="input-group-prepend">
      <span className="input-group-text" id="addon-wrapping">Search</span>
    </div>
    <input onChange={props.handleChange} type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="addon-wrapping"></input>
  </div>;
}

export default Search;