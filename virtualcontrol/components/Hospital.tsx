import React from "react";
import HospitalData from "../../hospitals.json";

const Hospital = (): JSX.Element => {
  const createHospitalStructure = (): JSX.Element => {
    console.log("hospital", HospitalData);
    const hospital = HospitalData.type;
    console.log("hospital type", hospital);
    const hospitalName = HospitalData.name;

    const contents = HospitalData["sub-type"].type;
    console.log("contents", contents);
    const contentsName = HospitalData["sub-type"].name;

    //loop over json element is better than do hard-coding
    //How can I loop over this json object ?

    //give the all div element
    //give the classname
    //add css

    return (
      <div>
        <div className={hospital}>{HospitalData.name}</div>
        <div className={contents}>{contentsName}</div>
      </div>
    );
  };

  return <div>{createHospitalStructure()}</div>;
};

export default Hospital;
