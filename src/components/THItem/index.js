import React from "react";

function THItem(props) {
    return <th scope="col" data-text={props.children} onClick={props.handleOnClick}>{props.children}</th>;
}

export default THItem;