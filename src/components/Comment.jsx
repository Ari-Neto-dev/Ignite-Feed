import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.Comment}>
      <img src="https://github.com/ari-neto-dev.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commetContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ariosvaldo de Azevedo Neto</strong>
              <time title="17 setembro às 18:34" dateTime="2023-09-17 18:34>00">Cerca de 1h atrás</time>

            </div>

            <button title ="Deletar Comentário">
              <Trash size={20}/>

            </button>
          </header>

          <p>Muito bom desenvolvedor,parabéns</p>

        </div>

        <footer>
          <ThumbsUp/>
          Aplaudir<span>20</span>
        </footer>

      </div>

    </div>
  )

}