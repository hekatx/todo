import { Navbar } from "@/components/Navbar";
import styles from "./BaseLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export function BaseLayout({ children }: Props): JSX.Element {
  return (
    <section className={styles.container}>
      <Navbar />
      {children}
    </section>
  );
}
