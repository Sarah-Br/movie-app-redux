import React from "react";

import { connect } from "react-redux";

const description = props => {
  return (
    <div>
      {/* {props.Movie.map(el => {
        return <div>{el.synopsis}</div>;
      })} */}
      <h1>HELLO</h1>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(description);
