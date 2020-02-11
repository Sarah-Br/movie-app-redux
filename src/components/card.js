import React from "react";
import Add from "./add";
import { deletemovie } from "../Actions/actions";
import { connect } from "react-redux";
import { Rate } from "antd";
import { Link } from "react-router-dom";

const card = ({ objMovie, deletemovie }) => {
  return (
    <div className="movie-card">
      <Rate count="5" value={objMovie.isRating} />

      <div className="btn-img">
        <button onClick={() => deletemovie(objMovie.id)} className="btn">
          <i class="fa fa-close"></i>
        </button>
        <img
          className="film-img"
          src={objMovie.srcImage}
          alt={objMovie.altImage}
        />
      </div>
      <div>
        <h5 className="title-year-movie">
          {objMovie.title} <br /> {objMovie.year}
        </h5>
        <div style={{ display: "flex" }}>
          <Add className="add-edit-btn" movie={objMovie} />
          <Link to={`/movies-details/${objMovie.id}`}>
            <button
              style={{
                borderRadius: "5px",
                marginLeft: "10px",
                fontFamily: "sofia",
                color: "green"
              }}
            >
              Movie Description
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapdispatchToProps = dispatch => {
  return { deletemovie: x => dispatch(deletemovie(x)) };
};
export default connect(null, mapdispatchToProps)(card);
