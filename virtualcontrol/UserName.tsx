import * as React from "react";

export interface IUserNameProps {
  username?: string;
  useremail?: string;
}

export class UserName extends React.Component<IUserNameProps> {
  public render(): React.ReactNode {
    return (
      <>
        <div>{this.props.username}</div>
        <div>{this.props.useremail}</div>
      </>
    );
  }
}
