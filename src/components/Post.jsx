import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>

      {/* cabeçalho */}
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ari-neto-dev.png"
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

      {/* conteúdo do post */}
      <div className={styles.content}>
        <p> Fala Galera! .</p>
        <p>Acabei de subir um projeto no meu portifolio.</p>
        <p><a href="">ari.design/doctorcare</a></p>
        <p>É um projeto que fiz para treinar React </p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#ARI</a>{' '}
          <a href="">#Minhaprópiapágina</a>{' '}
        </p>
      </div>

       {/* comentários */}
      <form className={styles.comentForm}>
        <strong>Deixe o seu feedBack</strong>
        <textarea
        placeholder="Deixe um Comentário"
        />

        <footer>
        <button type="submit">Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>

      </div>
     </article>
  );
}
