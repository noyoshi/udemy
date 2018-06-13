import React from 'react';

const validationComponent = (props) => {
  let r = null;
  if (props.textLen < props.minLen) {
    r = (
      <div>
        <h3>THE TEXT IS TOO SHORT</h3>
      </div>
    );
  } else if (props.textLen > props.maxLen) {
    r = (
      <div>
        <h3>THE TEXT IS TOO LONG</h3>
      </div>
    );
  }
  return r;
}

export default validationComponent;
