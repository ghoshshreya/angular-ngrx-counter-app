import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

// A reducer in NgRx (and in Redux-style state management) is a pure function that 
// determines how the application's state changes in response to actions. 
// It takes the current state and an action as arguments, and returns a new state based on the 
// action type and payload.
export const initialState = 0;
export const counterReducer = createReducer(
    initialState,
    on(increment, (state: number) => state + 1),
    on(decrement, (state: number) => state - 1),
    on(reset, _ => 0)
)