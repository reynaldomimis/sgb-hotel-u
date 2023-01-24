import React from "react";
import { CTooltip, CButton } from "@coreui/react";

const CHTooltip = () => {
    
  return (
    <>
      <CTooltip
        content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
        placement="top"
      >
        <CButton color="secondary">Tooltip on top</CButton>
       </CTooltip>
      
    </>
  );
};

export default CHTooltip;
