import React from "react";

//Component
import { UserLists } from "./UserLists";
//types
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import IUser from "../types/UserType";
import IUserLists from "../types/UserListsType";
import { create } from "domain";

export class virtualcontrol
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
  private notifyOutputChanged: () => void;
  //The default value provided from the json data
  private defaultUserLists: IUser[];
  //The new user value of current user
  private newUser: IUser[];
  //The current value of the control, which will be returned
  private currentUserLists: IUser[];
  /**
   * Empty constructor.
   */

  //declare variable here
  constructor() {
    console.log("the component", this.theComponent);
  }

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   */

  public createUserLists(users: IUser[]): JSX.Element {
    const props: IUser = {
      first_name: "sumi",
      id: 1,
      last_name: "seo",
      email: "sumi@gmail.com",
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
    //init function is for initializing component
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   * @returns ReactElement root react element for the control
   */
  public updateView(context: ComponentFramework.Context<IInputs>): JSX.Element {
    const props: IUser = {
      // username: context.parameters.Username.raw || "",
      first_name: "sumi",
      id: 1,
      last_name: "seo",
      email: "sumi@gmail.com",
    };
    return React.createElement(UserLists);
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return {};
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
