import { createAction, props } from "@ngrx/store";
import { AlertType } from "./alerting";

export const reset = createAction('[Op] Reset')
export const handleinput = createAction('[Op] Input', props <{uinput: string}>())
export const add = createAction('[Op] Add')
export const sub = createAction('[Op] Subtract')
export const multi = createAction('[Op] Multiply')
export const divi = createAction('[Op] Divide')
export const toggleIntegerMode = createAction('[Op] Tog')
export const dis = createAction('[Op] Display')

export const sqrt = createAction('[Op] SquareRoot')
export const sqrt_suc = createAction('[[Op] SquareRoot Success', props<{result: number}>())

export const alert = createAction('[Alert] Info', props <{t:AlertType, m:string}>())