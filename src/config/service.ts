export const getItemFromStorage = (key: string): string | null =>
  window.sessionStorage.getItem(key);

export const difference = (array: object[], values: object[]) => {
  return array.filter(item => !values.includes(item));
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
