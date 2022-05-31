import { User } from "@/types";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextValue {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export const UserContext = createContext({} as ContextValue);

const UserContextProvider = (props: Props) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
