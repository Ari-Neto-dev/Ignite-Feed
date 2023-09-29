import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/ari-neto-dev.png"
          />
          <div className={styles.authorInfo}>
            <strong>Ariosvaldo de Azevedo Neto</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="17 setembro às 18:34" dateTime="2023-09-17 18:34>00">
          Publicado há uma hora
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala Galera! .</p>
        <p>Acabei de subir um projeto no meu portifolio.</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>É um projeto que fiz para treinar React </p>
        <p><a href="">#novoprojeto</a></p>
      </div>
     </article>
  );
}
