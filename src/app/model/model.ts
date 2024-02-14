export enum OperationType {
  ADD, SUBTRACT, MULTIPLY, DIVIVDE, DISPLAY,
  SQRT
}

export interface Key {
    text: string
    value?: number
    operationType?: OperationType
  }

 export const keys:Array<Key> = [{text: '1', value: 1}, {text: '2', value: 2}, {text: '3', value: 3},
  {text: '4', value: 4}, {text: '5', value: 5}, {text: '6', value: 6},
  {text: '7', value: 7}, {text: '8', value: 8}, {text: '9', value: 9}, 
  {text: '+', operationType: OperationType.ADD},
  {text: '-', operationType: OperationType.SUBTRACT},
  {text: '*', operationType: OperationType.MULTIPLY},
  {text: '/', operationType: OperationType.DIVIVDE},
  {text: '.', operationType: OperationType.ADD},
  {text: '=', operationType: OperationType.DISPLAY},
  {text: '√', operationType: OperationType.SQRT},];