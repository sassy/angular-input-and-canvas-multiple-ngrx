import { createAction, props } from "@ngrx/store";
import { Entry } from "./entry";

export const appendImage = createAction("[Images] append", props<Entry>());
export const removeImage = createAction(
  "[Images] remove",
  props<{ id: number }>()
);
export const clearImages = createAction("[Images] clear");
