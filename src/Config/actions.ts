import { Toaster } from "./main.types"
import { toasterConstants} from "./constants"
import { createToaster } from "./service"

export const showToaster = (payload:{message: string, type: string}) => ({
  type: toasterConstants.SHOW_TOASTER,
  payload: createToaster(payload)
})

export const removeToaster = (payload:Toaster) => ({
  type: toasterConstants.REMOVE_TOASTER,
  payload: payload
})
