import React from 'react';

function Button(props) {
  return (
    <div>
      <button className="btn" onClick={props.fetchData}>
        {props.text}
      </button>
    </div>
  );
}

export default Button;
