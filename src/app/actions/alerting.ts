import { Action, createReducer, on } from "@ngrx/store";
import { alert } from "./mathops";

export enum AlertType {
    INFO,WARN,ERROR
}

export interface Alert {

    type: AlertType;
    message: String;

}

let alertState: Alert = {type: AlertType.INFO, message: "App started"}

const _alertingReducer = createReducer(alertState,
    on(alert, (a, {t, m}) => ({...a, type: t, message: m})))

export function alertingReducer(state: Alert | undefined, action: Action) {
    return _alertingReducer(state, action)
}