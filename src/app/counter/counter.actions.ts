import { createAction } from "@ngrx/store";

// Actions are objects that describe events or intentions to change the state in your application. 
// They are dispatched to the store and handled by reducers or effects.
export const increment = createAction("[Counter] increment");
export const decrement = createAction("[Counter] decrement");
export const reset = createAction("[Counter] reset");