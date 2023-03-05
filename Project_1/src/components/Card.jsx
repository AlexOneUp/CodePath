import React from "react";
import '../styles/Card.css';

const Card = (props) => {
    // console.log(props.url);
    return (
        <div className="card">
            <div className="content">
                {/* Pass in props up to App.jsx */}
                <img src={props.source_props} height={60}>
                </img>

                <p className="card-font">{props.description_props}</p>

                <a href={props.hyperlink_props} className='btn-info'>More Info</a>
            </div>
        </div>
    );
}

export default Card;