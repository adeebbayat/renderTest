import React from "react";
import Button from "./Button";

const Row = ({start, type}) => {


  return(
    <div>
      <Button number = {start} type={type}/>
      <Button number = {start+1} type={type}/>
      <Button number = {start+2} type={type}/>
    </div>
  )
}

export default Row