import React from "react";
import UserInfoData from "../userinfodata.json";

//Component
import { UserLists } from "./UserLists";
//types
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import IUser from "../types/UserType";
import IUserLists from "../types/UserListsType";
// import { create } from "domain";

export class virtualcontrol
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
  private notifyOutputChanged: () => void;
  //The default value provided from the json data
  private defaultUserLists: IUserLists;
  //The new user value of current user
  private _newUserFirstName: string;
  private _newUserLastName: string;
  private _newUserEmail: string;
  private _newUserId: number;
  //The current value of the control, which will be returned
  private currentUserLists: IUserLists;
  private template: String = "Default Value";
  /**
   * Empty constructor.
   */

  //declare variable here
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   */

  public createUserLists(users: IUser[]): React.ReactElement {
    const props: IUser = {
      firstName: "sumi",
      userId: 1,
      lastName: "seo",
      userEmail: "sumi@gmail.com",
    };
    console.log("create user lists func test");
    return React.createElement(UserLists);
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    //set up proper value in init func
    this.defaultUserLists = UserInfoData;
    //init function is for initializing component
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   * @returns ReactElement root react element for the control
   */

  private renderControl(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    console.log("entered renderControl in index.ts", context.updatedProperties);
    const _userFirstName =
      context.parameters.UserFirstName == null
        ? ""
        : context.parameters.UserFirstName.raw;
    const _userLastName =
      context.parameters.UserLastName == null
        ? ""
        : context.parameters.UserLastName.raw;
    const _userEmail =
      context.parameters.UserEmail == null
        ? ""
        : context.parameters.UserEmail.raw;

    const props: IUser = {
      firstName: _userFirstName,
      lastName: _userLastName,
      userEmail: _userEmail,
      userId: 1,
    };

    return React.createElement(UserLists, props);
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    //grab the user input value and add it to json file
    console.log("first", context.parameters.UserFirstName.raw);
    console.log("last", context.parameters.UserLastName.raw);
    console.log("email", context.parameters.UserEmail.raw);

    // return React.createElement(UserLists, context.up);
    return this.renderControl(context);
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {
      UserLastName:
        this._newUserLastName == null ? undefined : this._newUserLastName,
      UserFirstName:
        this._newUserFirstName == null ? undefined : this._newUserFirstName,
      UserEmail: this._newUserEmail == null ? undefined : this._newUserEmail,
      // UserId: this._newUserId == null ? undefined : this._newUserId,
    };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
