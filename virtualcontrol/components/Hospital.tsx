import React, { useState, useEffect } from "react";
import HospitalData from "../../hospitals.json";

const Hospital = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  useEffect(() => {
    const currentIndex = parseInt(HospitalData.order);
    setCurrentIndex(currentIndex);

    const nextIndex =
      parseInt(HospitalData["sub-type"].order) > currentIndex
        ? setCurrentIndex(parseInt(HospitalData["sub-type"].order))
        : currentIndex;

    console.log("current Index", currentIndex);
    console.log("next index", nextIndex);
    console.log("loop");
  }, [currentIndex]);
  const onClick = () => {
    console.log("clicked");
  };

  const createHospitalStructure = (): JSX.Element => {
    console.log("hospital", HospitalData);
    const hospital = HospitalData.type;
    console.log("hospital type", hospital);
    const hospitalName = HospitalData.name;

    const contents = HospitalData["sub-type"].type;
    console.log("contents", contents);
    const contentsName = HospitalData["sub-type"].name;
    if (currentIndex !== null && currentIndex > 1) {
      console.log("index is 2");
    }

    //give the all div element
    //give the classname
    //add css

    return (
      <div>
        <div onClick={onClick} className={hospital}>
          {hospitalName}
        </div>
      </div>
    );
  };

  return <div>{createHospitalStructure()}</div>;
};

export default Hospital;
