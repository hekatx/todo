import { AuthUser } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext({} as ContextValue);

const UserContextProvider = (props: Props) => {
  const [user, setUser] = useState<string>("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
