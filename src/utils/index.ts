const storagePrefix = "todo_react_";

export const storage = {
  getToken: (): string | null => {
    return window.localStorage.getItem(`${storagePrefix}token`);
  },
  setToken: (token: string): void => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: (): void => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};
