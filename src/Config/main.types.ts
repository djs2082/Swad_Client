type PayloadType = {
  [key: string]: unknown;
};

export type Action = {
  type: string;
  payload: PayloadType;
};

export type Error = {
  message: string;
  status: number;
};

export type Toaster = {
  type?: 'success' | 'info' | 'warning' | 'error';
  id?: number;
  message?: string;
  timeout?: number;
};

export type ToastersArray = {
  toastsers: Toaster[];
};
