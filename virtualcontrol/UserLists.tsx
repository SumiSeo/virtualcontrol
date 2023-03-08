import React from "react";
import UserInfoData from "../userinfodata.json";

//types
import IUserLists from "../types/UserListsType";
import IUser from "../types/UserType";

export class UserLists extends React.Component<IUserLists> {
  public createUserInfoLists(): React.ReactNode {
    console.log(this.props);
    return UserInfoData.map((userinfo: IUser) => {
      return <li key={userinfo.first_name}>{userinfo.first_name}</li>;
    });
  }

  public render(): React.ReactNode {
    console.log(this.props);
    return <ul>{this.createUserInfoLists()}</ul>;
  }
}
