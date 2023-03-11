import React from "react";
import HospitalData from "../../hospitals.json";

//types
import IjsonArgs from "../../types/JsonType";

const Hospital = (): JSX.Element => {
  const onClick = () => {
    console.log("clicked");
  };

  const generateTabs = (data: IjsonArgs): JSX.Element => {
    const currentEntityType = data.type;
    const currentEntityName = data.name;
    const currentEntitySubType = data["sub-type"];
    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {Array.isArray(data) ? (
            data.map((el: any) => (
              <div onClick={onClick} className={el.type} key={el.firstname}>
                <h1>{el.firstname}</h1>
              </div>
            ))
          ) : (
            <div>
              {currentEntitySubType !== null ? (
                generateTabs(currentEntitySubType)
              ) : (
                <div></div>
              )}
            </div>
          )}
        </div>
      </>
    );
  };

  const createHospitalStructure = (): JSX.Element => {
    const currentEntityType = HospitalData.type;
    const currentEntityName = HospitalData.name;
    const currentEntitySubType = HospitalData["sub-type"];

    return (
      <>
        <div onClick={onClick} className={currentEntityType}>
          {currentEntityName}
        </div>
        <div>
          {currentEntitySubType !== null ? (
            generateTabs(currentEntitySubType)
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
