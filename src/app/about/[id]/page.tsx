import React from "react";

const AboutWithParams = ({ params }: any) => {
  return <div>About wuth some dynamic ID : {params.id}</div>;
};

export default AboutWithParams;
