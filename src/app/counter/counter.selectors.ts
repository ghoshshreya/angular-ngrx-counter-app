import { createFeatureSelector } from "@ngrx/store";

export const selectCount = createFeatureSelector<number>('count');

// Use createFeatureSelector for directly accessing a feature state by key.
// Use createSelector for composing selectors and deriving new data from the state.
// export const selectDoubleCount = createSelector(
//   selectCount,
//   (count) => count * 2
// );