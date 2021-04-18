import { createReducer, on } from "@ngrx/store";
import { appendImage, removeImage, clearImages } from "./image-save.action";
import { Entry } from "./entry";

export const initialImages: Entry[] = [];

const _imageSaveReducer = createReducer(
  initialImages,
  on(appendImage, (state, entry: Entry) => [...state, entry]),
  on(removeImage, (state, { id }) => state.filter(entry => entry.id !== id)),
  on(clearImages, state => [])
);

export function imageSaveReducer(state, action) {
  return _imageSaveReducer(state, action);
}
