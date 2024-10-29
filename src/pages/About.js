import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";

export default function WORKS() {
  return (
    <main className={styles.about_box}>
      <h2>ABOUT</h2>
      <div className={`${styles.about_content} ${styles.about_site}`}>
        <h3>このサイトについて</h3>
        <div>
          <Image
            className={styles.works_list_img}
            src="/top.png"
            alt="Illust_01"
            width={250}
            height={250}
            objectFit="cover"
          />
        </div>
        <p>個人で制作したイラストやWEBサイト、アプリなど、</p>
        <p>雑多にまとめたポートフォリオサイトです。</p>
        <p className={styles.about_attention}>
          ※サイト上に掲載した画像、デザイン類の転載、無断利用等の行為は禁止しております。
        </p>
        <p className={styles.about_attention}>
          ※Reproducing all or any part of the contents is prohibited.
        </p>
      </div>

      <div className={`${styles.about_content} ${styles.about_me}`}>
        <h3>わたしについて</h3>
        <p className={styles.about_name}>SATO Anna / 佐藤 杏南</p>

        <div className={styles.about_me_content}>
          <p>イラスト、WEBコーディング&デザイン、ゲーム、アプリケーション</p>
          <p className={styles.small_text}>academic :</p>
          <p>
            学部時代に、高等学校教諭一種免許状(数学、情報)を取得。
            テクノロジーの課題やデジタル教材に興味を持ち、「数学×教材」のARアプリケーションを開発中。
          </p>
        </div>

        <div className={styles.about_me_content}>
          <p className={styles.small_text}>education :</p>
          <p>
            2023/3 福島大学理工学群共生システム理工学類数理・情報科学コース 卒業
          </p>
          <p>2024/4 情報科学芸術大学院大学メディア表現研究科 在籍</p>
        </div>

        <div className={styles.about_me_content}>
          <p className={styles.small_text}>Achievements :</p>
          <a
            className={styles.about_link}
            href="https://www.iamas.ac.jp/openhouse/"
          >
            アバターたちの空間 / ねこぜ
          </a>
        </div>

        <div className={styles.about_me_content}>
          <p className={styles.small_text}>Mail Address :</p>
          <p className={styles.mail_address}>toanako89@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
