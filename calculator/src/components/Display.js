import React from "react";

const Display = ({toDisplay}) => {


  const style1 = {
    backgroundColor:'gray',
    width:'70px',
  }
  const style2 = {
    display:'flex',
    justifyContent:'center'
  }
  return(
    <div style = {style2} >
      <div style={style1}>
        {toDisplay}
      </div>
    </div>
  )
}


export default Display