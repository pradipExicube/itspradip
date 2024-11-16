import React from "react";
function CustomSpacer(props) {
  return (
    <div style={{height:props?.height ? props?.height : 30}}></div>
  );
}

export default CustomSpacer;
