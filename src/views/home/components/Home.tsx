import withAuth from "@/components/withAuth";
import { UserContext } from "@/providers/user";
import { useContext } from "react";

function Home(): JSX.Element {
  const { user } = useContext(UserContext);
  return <div>{`Home is here ${user}`}</div>;
}

export default withAuth(Home);
