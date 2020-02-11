import { Rate } from 'antd';
import React from 'react';   
import { connect } from 'react-redux'

 

const desc = ['Terrible', 'Bad', 'Normal', 'Good!', 'Wonderful!!'];

const rating=(props)=>{
    
    return (
      <span>
        <Rate tooltips={desc} onClick={props.ratemovie} value={props.count} />
       
      </span>
    );
  }


const mapStateToProps = state => {
    return {
      ...state
    };
  };
export default connect(mapStateToProps)(rating);