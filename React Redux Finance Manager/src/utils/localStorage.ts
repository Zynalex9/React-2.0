export const saveToLocalStorage = (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Could not save to localStorage", error);
  }
};
export const loadFromLocalStorage = <T>(key: string): T | undefined => {
  try {
    const serializedValue = localStorage.getItem(key);
    if (!serializedValue) return undefined;
    return JSON.parse(serializedValue);
  } catch (error) {
    console.error("Could not Load from localStorage", error);

  }
};
