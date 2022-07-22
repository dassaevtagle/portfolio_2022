import React from "react";
import "./FullPageContainer.scss"

function FullPageContainer({children} : {children: React.ReactNode})  {
 return <div className="fp-container">{children}</div>
}

export default FullPageContainer;