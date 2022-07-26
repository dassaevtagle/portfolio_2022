import React from "react";
import '../assets/scss/components/FullPageContainer.scss';

function FullPageContainer({children} : {children: React.ReactNode})  {
  return <section className="fp-container">{children}</section>
}

export default FullPageContainer;