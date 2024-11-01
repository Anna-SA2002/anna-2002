import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Works.module.css";

export default function WORKS() {
  return (
    <main className={styles.works_box}>
      <h2>WORKS</h2>
      <div className={styles.works_btn}>
        <ul className={styles.btn_list}>
          <li className={styles.btn_box}>
            <Link href="/Works_01">Illust</Link>
          </li>
          <li className={`${styles.btn_box} ${styles.btn_box_main}`}>
            <Link href="/Works_02">WebSite</Link>
          </li>
          <li className={styles.btn_box}>
            <Link href="/Works_03">Application</Link>
          </li>
        </ul>
      </div>

      <div className={styles.works_content_illust}>
        <ul className={styles.works_list}>
          <li>
            <Link href="https://toana-blog.com/">
              <div>
                <Image
                  className={styles.works_list_img}
                  src="/sample_01.png"
                  alt="Illust_01"
                  width={250}
                  height={250}
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Works_01">
              <div>
                <Image
                  className={styles.works_list_img}
                  src="/sample_01.png"
                  alt="Illust_02"
                  width={250}
                  height={250}
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/Works_01">
              <div>
                <Image
                  className={styles.works_list_img}
                  src="/top.png"
                  alt="Illust_03"
                  width={250}
                  height={250}
                  objectFit="cover"
                />
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
