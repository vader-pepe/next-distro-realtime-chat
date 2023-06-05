import { AppDispatch } from "../store"

let dispatch: AppDispatch

export const injectDispatch = (_dispatch: AppDispatch) => {
    dispatch = _dispatch
}