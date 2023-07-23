type PayloadType = {
  [key: string]: any
}

export type Action = {
  type:string
  payload: PayloadType
}

export type Error = {
  message:string,
  status:number
}

export type Toaster = {
  type?:string,
  id?:number,
  message?:string,
  timeout?:number
}

export type ToastersArray = {
  toastsers: Toaster[]
}
