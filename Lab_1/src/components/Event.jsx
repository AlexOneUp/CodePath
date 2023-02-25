import React from "react";

const Event = (props) => {
    return (
        <td className="Event">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </td>
    );
}

export default Event;