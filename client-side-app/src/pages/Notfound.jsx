import React from "react";
import SEO from "../components/SEO"


function Notfound() {
  return (
    <div className="text-center">
      <SEO myTitle='Page not found' myDesc="The called page is not found, please check the URL" />
      <div className="text-danger my-4">
        <h1>Error 404 - Page not found</h1>
      </div>
    </div>
  );
}

export default Notfound;
