import React from "react";
import UserInfoData from "../userinfodata.json";

//types
import IUserLists from "../types/UserListsType";
import IUser from "../types/UserType";

export class UserLists extends React.Component<IUser> {
  public createUserInfoLists(): React.ReactNode {
    console.log(this.props);
    return UserInfoData.map(({ firstName }: IUser) => {
      return <li key={firstName}>{firstName}</li>;
    });
  }

  public render(): React.ReactNode {
    console.log(this.props.firstName);
    return (
      <>
        <ul>{this.createUserInfoLists()}</ul>
        {/* <h2>{this.props.firstName}</h2> */}
      </>
    );
  }
}
