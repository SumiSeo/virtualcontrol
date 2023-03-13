import React from "react";
import HospitalData from "../../hospitals.json";

//types
import IjsonArgs from "../../types/JsonType";

const Hospital = (): JSX.Element => {
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      const nextElements = e?.target?.nextElementSibling?.children;
      if (nextElements instanceof HTMLCollection) {
        nextElements[0].classList.remove("hidden");
        Array.from(nextElements[0].children).filter((child) => {
          child.classList.toggle("hidden");
        });
      }
    }
  };

  const generateTabs = (data: IjsonArgs): JSX.Element => {
    const currentEntityType = data.type;
    const currentEntityName = data.name;
    const currentEntitySubType = data["sub-type"];

    return (
      <>
        <div className="hidden">
          <div onClick={(e) => onClick(e)} className={currentEntityType}>
            {currentEntityName}
          </div>
          <div>
            {Array.isArray(data) ? (
              data.map((el: any) => {
                const style = {
                  width: el.firstname.length * 10,
                };
                return (
                  <div className={el.type} key={el.firstname} style={style}>
                    {el.firstname}
                  </div>
                );
              })
            ) : (
              <div>
                {currentEntitySubType !== null
                  ? generateTabs(currentEntitySubType)
                  : ""}
              </div>
            )}
          </div>
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
          {currentEntitySubType !== null
            ? generateTabs(currentEntitySubType)
            : ""}
        </div>
      </>
    );
  };

  return <>{createHospitalStructure()}</>;
};

export default Hospital;
