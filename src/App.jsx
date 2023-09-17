import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="ARI"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere animi commodi nisi accusantium ullam voluptatem cumque qui aliquam repellendus saepe sequi doloremque distinctio ipsa voluptatibus aperiam veniam praesentium, aliquid maiores."
          />

          <Post author="Antonio" content=" Adicionando um novo Post " />
        </main>
      </div>
    </div>
  );
}
