import React from "react";
import '../assets/scss/components/FullPageContainer.scss';

function FullPageContainer({children} : {children: React.ReactNode})  {
  return <div className="fp-container">{children}</div>
}

export default FullPageContainer;