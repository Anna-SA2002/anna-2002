import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav class={styles.nav}>
      <ul>
        <li>
          <Link href="/">TOP</Link>
        </li>
        <li>
          <Link href="/Works_01">WORKS</Link>
        </li>
        <li>
          <Link href="/About">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}
