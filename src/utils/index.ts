const storagePrefix = "todo_react_";

export const storage = {
  getToken: (): string => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}token`) as string
    );
  },
  setToken: (token: string): void => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  clearToken: (): void => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};
