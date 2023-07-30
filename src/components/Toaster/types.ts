export type ToasterType = {
  type?: 'success' | 'info' | 'warning' | 'error';
  id?: number;
  message?: string;
  timeout?: number;
};
