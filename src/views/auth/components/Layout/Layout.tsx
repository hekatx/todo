import { Button } from "@/components/Button";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Logo() {
  return <div className={styles.logo}></div>;
}

function LoginNavbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      {/* <img src="" /> */}
      <Logo />
      <Button>Sign up</Button>
    </nav>
  );
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <section className={styles.container}>
      <LoginNavbar />
      <div className={styles.form__container}>{children}</div>
    </section>
  );
}
