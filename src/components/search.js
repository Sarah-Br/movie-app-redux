import React from 'react'
import { connect } from 'react-redux'
import {filtermovie,ratemovie} from '../Actions/actions'
import { Rate } from 'antd';

const search=({filtermovie,ratemovie,rate})=> {
    
        const desc = ['Terrible', 'Bad', 'Normal', 'Good!', 'Wonderful!!']
        return (
            <div>
                 <input
              style={{
                fontSize: "large",
                fontFamily: "Sofia",
                // opacity: "0.3",
                border: "2px solid lightblue",
                padding: "10px",
                width: "80%",
                marginTop: "80px",
                marginBottom: "40px",
                borderRadius: "5px",
                marginLeft:'40px',
                marginRight:'20px'
              }}
              type="text"
              onChange={(e)=>{filtermovie(e.target.value)}}
             
            />
         
          <Rate tooltips={desc} value={rate} count={5} onChange={(value)=>ratemovie(value)} />
         
            </div>
        )

    }

const MapStateToProps=(state)=>{
    return{
      rate:state.rate}

}


export default connect(MapStateToProps,{filtermovie,ratemovie})(search)