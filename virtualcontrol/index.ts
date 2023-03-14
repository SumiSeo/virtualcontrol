import React from "react";

//Component
import Hospital from "./components/Hospital";

//types
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import IPropsTypes from "../types/PropsTypes";
import { create } from "domain";

export class virtualcontrol
  implements ComponentFramework.ReactControl<IInputs, IOutputs>
{
  private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
  private notifyOutputChanged: () => void;
  //The default value provided from the json data
  //The new user value of current user
  private _entityOrder: string;
  private _contentsOrder: string;
  private _columnOrder: string;
  private _elementOrder: string;

  //The current value of the control, which will be returned

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

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   * @returns ReactElement root react element for the control
   */

  private renderControl(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const _type =
      context.parameters.Type.raw === null ? "" : context.parameters.Type.raw;
    const _name =
      context.parameters.Name.raw === null ? "" : context.parameters.Name.raw;
    const props: IPropsTypes = {
      name: _name,
      type: _type,
    };

    // generate a number version of default value
    // return React.createElement(Hospital, props);
    return React.createElement(Hospital, props);
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const props = {};
    console.log(context.parameters.Type.raw);
    console.log(context.parameters.Name.raw);
    return this.renderControl(context);
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
