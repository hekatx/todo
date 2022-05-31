import { UserContext } from "@/providers/user";
import { storage } from "@/utils";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import styles from "./Navbar.module.scss";

export function Navbar(): JSX.Element {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function signOut(): void {
    storage.clearToken();
    navigate("/auth/login");
  }

  return (
    <nav className={styles.navbar}>
      <img src="" className={styles.logo} />
      <div className={styles.user__controls}>
        <p>{user.name}</p>
        <Button onClick={signOut} color="red">
          Sign out
        </Button>
      </div>
    </nav>
  );
}
