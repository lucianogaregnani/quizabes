import { Button } from "../../components";
import { Wave } from "./components";
import home from "./home.module.scss";

function Home() {
  return (
    <main className={home.homeMain}>
      <section>
        <h1>
          Play and learn at the same <span>time!</span>
        </h1>
        <p>
          With <span>Quizabes</span>, you can gain a lot of knowledge in general
          culture, learning in a fun way!
        </p>
        <div className={home.homeButtons}>
          <Button
            text="Go play!"
          />
        </div>
      </section>
      <Wave />
    </main>
  );
}

export default Home;
