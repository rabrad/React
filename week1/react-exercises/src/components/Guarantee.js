import React from 'react';

function Guarantee(props) {
  return (
    <div className="guarantee">
      <img src={props.image} className="guarantee-image" />
      <div className="guarantee-info">
        <h3 className="guarantee-title">{props.title}</h3>
        <p className="guarantee-descriptions">{props.descriptions}</p>
      </div>
    </div>
  );
}
export default Guarantee;
