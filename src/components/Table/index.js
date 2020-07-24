import React from "react";

function Table(props) {
    return <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Department</th>
                <th scope="col">Role</th>
            </tr>
        </thead>
        <tbody>{props.children}</tbody>
    </table>;
}

export default Table;