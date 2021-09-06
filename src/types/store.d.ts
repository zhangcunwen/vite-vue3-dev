
declare namespace IStore {
  interface ICountState {
    count: number
  }
  interface ICountPayload {
    val: number
  }

  interface ITodos {
    id: number | string
    text: string
    done: boolean
  }
  interface ITodosState {
    todos: Array<ITodos>
  }

  interface ICommonState {
    collapse: boolean,
    routes: Array<any>
  }
}
