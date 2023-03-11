import React from "react";
import HospitalData from "../../hospitals.json";

interface jsonArgs {
  type: string;
  name: string;
  order: string;
  id: string;
  "sub-type": any;
}
const Hospital = (): JSX.Element => {
  const onClick = () => {
    console.log("clicked");
  };

  const generateTabs = (data: jsonArgs): JSX.Element => {
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
              <div className={el.type} key={el.firstname}>
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
