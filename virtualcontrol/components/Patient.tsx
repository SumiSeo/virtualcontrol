import React, { useState, useEffect } from "react";
import data from "../../hospitals.json";

interface ITab {
  type: string;
  name: string;
  subType: any;
  isArray: string;
}

const Patient = (): JSX.Element => {
  const generateTab = (
    t: string,
    n: string,
    s: any,
    is: boolean
  ): JSX.Element => {
    console.log("generated");

    const type = s.type;
    const name = s.name;
    const subType = s["sub-type"];
    const isArray = Array.isArray(subType);
    console.log("🤽🏻‍♀️This is the type of column", type);

    return <div></div>;
  };

  const initiateStructure = (): JSX.Element => {
    const type = data.type;
    const name = data.name;
    const subType = data["sub-type"];
    const isArray = Array.isArray(subType);

    return (
      <div>
        <div key={type}>{type}</div>
        <div key={name}>{name}</div>
        <div key="hi">"hi"</div>
      </div>
    );
  };

  return (
    <>
      <div>{initiateStructure()}</div>
    </>
  );
};

export default Patient;
