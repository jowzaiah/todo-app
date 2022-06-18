import { useReducer } from "react";
import {Todo} from "./../model";

type Actions =
    | { type: "add"; payload: string}
    | { type: "remove"; payload: number}
    | { type: "done"; payload: number}
const ReducerExample = (state: Todo[], action: Actions) => {
    //const [state, dispatch] = useReducer(first, second, third)
}

export default ReducerExample;