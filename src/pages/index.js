import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className={styles.top}>
        <h1 className={styles.top_msg}>SATO Anna, Portfolio.</h1>
      </header>

      <main>
        <section className={styles.content}>
          <h2>website for Portfolio, created by SATO Anna</h2>
          <p>Illust Website Game 3Dmodel etc.</p>

          <p className={styles.menu}>Menu</p>

          <ul className={styles.menu_li}>
            <li>
              <Link href="/Works_01">WORKS</Link>
            </li>
            <li>
              <Link href="/About">ABOUT</Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
