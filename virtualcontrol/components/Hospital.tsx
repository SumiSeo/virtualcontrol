import React from "react";
import HospitalsData from "../../hospitals.json";

const Hospital = (): JSX.Element => {
  const createHospitalStructure = (): JSX.Element => {
    return <div>Hospital lists</div>;
  };
  return <div>{createHospitalStructure()}</div>;
};

export default Hospital;
