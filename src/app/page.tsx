import Image from "next/image";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <main className={styles.main}>
        <h1 className={styles.title}>Boilerplate de NextJs 13</h1>

        <p className={styles.description}>Template padrão para seu projeto NextJs</p>

        <div className={styles.grid}>
          <a
            href="https://github.com/giosepeluiz/boilerplate-nextjs-13/blob/main/README.md"
            className={styles.card}>
            <h2>Informações &rarr;</h2>
            <p>Para saber como utilizar todos os recursos que o modelo oferece.</p>
          </a>

          <a
            href="https://github.com/giosepeluiz/boilerplate-nextjs/commits/main"
            className={styles.card}>
            <h2>Atualizações &rarr;</h2>
            <p>
              - 02 de setembro de 2021
              <br />- 21 de setembro de 2022
              <br />- 07 de maio de 2023
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Elaborado por Giosepe Luiz | Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vectors/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
