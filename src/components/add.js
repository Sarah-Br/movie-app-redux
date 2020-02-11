import { Modal, Button } from "antd";
import React from "react";
import { addmovie, editmovie } from "../Actions/actions";
import { connect } from "react-redux";

class add extends React.Component {
  state = {
    visible: false,
    isRating: this.props.movie ? this.props.movie.isRating : "",
    srcImage: this.props.movie ? this.props.movie.srcImage : "",
    title: this.props.movie ? this.props.movie.title : "",
    year: this.props.movie ? this.props.movie.year : "",
    id:this.props.movie ? this.props.movie.id : "",
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
 handleOk = e => {
    console.log(e);
    this.setState({ visible: false }, () =>{this.props.movie?this.props.editmovie({...this.state}):
      this.props.addmovie({ ...this.state, id: Math.random()})
 })};



  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} style={{ fontFamily: "sofia" }}>
          {this.props.movie ? "Edit" : "Add"}
        </Button>
        <Modal
          style={{ fontFamily: "sofia" }}
          title="What's Your Favorite?"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={event => this.setState({ title: event.target.value })}
                value={this.state.title}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                onChange={event => this.setState({ year: event.target.value })}
                value={this.state.year}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Insert image"
                onChange={event =>
                  this.setState({ srcImage: event.target.value })
                }
                value={this.state.srcImage}
              />
            </div>
            <div className="form-group">
              <input
                max="5"
                min="1"
                type="number"
                className="form-control"
                placeholder="Rate"
                onChange={event =>
                  this.setState({ isRating: event.target.value })
                }
                value={this.state.isRating}
              />
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapdispatchToProps = dispatch => {
  return {
    addmovie: x => dispatch(addmovie(x)),
    editmovie: x => dispatch(editmovie(x))
  };
};

export default connect(null, mapdispatchToProps)(add);
