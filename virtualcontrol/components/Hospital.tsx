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

  const generateElements = (nextElement: any): JSX.Element => {
    console.log("next", nextElement);
    const currentEntityType = nextElement.type;
    const currentEntityName = nextElement.name;
    const currentEntitySubType = nextElement["sub-type"];

    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {nextElement.map((el: any) => (
            <div className={el.type} key={el.firstname}>
              {el.firstname}
            </div>
          ))}
        </div>
      </>
    );
  };

  const generateColumns = (nextElement: any): JSX.Element => {
    const currentEntityType = nextElement.type;
    const currentEntityName = nextElement.name;
    const currentEntitySubType = nextElement["sub-type"];

    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {currentEntitySubType !== null ? (
            generateElements(currentEntitySubType)
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  };

  const generateContents = (nextElement: any): JSX.Element => {
    const currentEntityType = nextElement.type;
    const currentEntityName = nextElement.name;
    const currentEntitySubType = nextElement["sub-type"];

    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {currentEntitySubType !== null ? (
            generateColumns(currentEntitySubType)
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  };

  const createHospitalStructure = (): JSX.Element => {
    const currentEntityType = HospitalData.type;
    const currentEntityName = HospitalData.name;
    const currentEntitySubType = HospitalData["sub-type"];

    if (currentEntityType !== null) {
      generateContents(currentEntitySubType);
    }

    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {HospitalData["sub-type"].type !== null ? (
            generateContents(HospitalData["sub-type"])
          ) : (
            <div></div>
          )}
        </div>
      </>
    );
  };

  return (
    <>
      <div>{createHospitalStructure()}</div>
    </>
  );
};

export default Hospital;
