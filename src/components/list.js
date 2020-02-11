import React from "react";
import { connect } from "react-redux";
import Card from "../components/card";
import Add from "./add";

const list = props => {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {props.Movie.filter(
        objMovie =>
          objMovie.title
            .toLowerCase()
            .includes(props.titleFilter.toLowerCase()) &&
          objMovie.isRating >= props.rate
      ).map(objMovie => (
        <div sy>
          <Card objMovie={objMovie} />
        </div>
      ))}
      <div className="add-movie">
        <Add />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(list);
