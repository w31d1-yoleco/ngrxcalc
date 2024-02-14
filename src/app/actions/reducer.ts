import { Action, createReducer, on } from "@ngrx/store"
import { add, dis, divi, handleinput, multi, reset, sqrt_suc, sub, toggleIntegerMode } from "./mathops"
  import { OperationType } from "../model/model";

export interface CalcMemory {memory:number, input:number, integerMode:boolean, operationType?: OperationType}

export const calcMemory:CalcMemory = {memory: 0.0, input: 0.0, integerMode: true}

const _calcMemoryReducer = createReducer(calcMemory,
  on(handleinput, (mem, {uinput}) => ({...mem, 
    input:  mem.integerMode ? mem.input * 10 + Number(uinput): appendDigit(mem.input, new Number(uinput))})),
  on(reset, mem => ({...mem, input: 0})),
  on(toggleIntegerMode, mem => ({...mem, integerMode: !mem.integerMode})),
  on(add, mem => ({...mem, input: 0, memory: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.ADD})),
  on(sub, mem => ({...mem, input: 0, memory: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.SUBTRACT})),
  on(multi, mem => ({...mem, input: 0,memory: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.MULTIPLY})),
  on(divi, mem => ({...mem, input: 0,memory: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.DIVIVDE})),
  on(sqrt_suc, (mem, {result})  => ({...mem, input: result,memory: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.DIVIVDE})),
  on(dis, mem => ({...mem, memory: applyOperation(mem.memory, mem.input, mem.operationType), input: applyOperation(mem.memory, mem.input, mem.operationType), operationType: OperationType.DISPLAY})),
)

export function calcMemoryReducer(state: CalcMemory | undefined, action: Action) {
    return _calcMemoryReducer(state, action);
  }

function appendDigit(current:number, digitValue: Number): number {
  let cas: string = ('' + current)
  cas = cas.indexOf('.') == -1 ? cas.concat('.') : cas
  return parseFloat(cas.concat('' + digitValue))
}

function applyOperation(op1: number, op2: number, t: OperationType|undefined): number{
  switch (t) {
    case undefined: return op2; break
    //leave memory unchanged
    case OperationType.DISPLAY: return op1; break
    case OperationType.ADD: return op1 + op2; break
    case OperationType.SUBTRACT: return op1 - op2; break
    case OperationType.MULTIPLY: return op1 * op2; break
    case OperationType.DIVIVDE: return op1 / op2; break

  }
  return 0;
}