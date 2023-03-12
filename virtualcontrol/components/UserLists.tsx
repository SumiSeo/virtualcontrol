import React from "react";
import UserInfoData from "../../userinfodata.json";
import Hostpital from "./Hospital";

//types
import IUserLists from "../../types/UserListsType";
import IUser from "../../types/UserType";
import Hospital from "./Hospital";

export class UserLists extends React.Component<IUser> {
  private _userDataJsonObj: any;
  private _newUserObj: IUser;

  public parseJsonData({ userEmail, userId, firstName, lastName }: IUser) {
    this._userDataJsonObj = JSON.stringify(UserInfoData);

    this._newUserObj = {
      userId,
      userEmail,
      firstName,
      lastName,
    };
    if (userEmail && userId && firstName && lastName) {
      const newData = [...JSON.parse(this._userDataJsonObj), this._newUserObj];
      console.log("newData", newData);
    }
  }

  public createUserInfoLists(): React.ReactNode {
    this.parseJsonData(this.props);
    return UserInfoData.map(({ firstName }: IUser) => {
      return <li key={firstName}>{firstName}</li>;
    });
  }

  public render(): React.ReactNode {
    console.log(this.props.firstName);
    return <>{/* <ul>{this.createUserInfoLists()}</ul> */}</>;
  }
}
