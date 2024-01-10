import { Button } from "../../components";
import { Wave } from "./components";
import home from "./home.module.scss";

function Home() {
  return (
    <main className={home.homeMain}>
      <section>
        <h1>
          Juega y aprende al mismo <span>tiempo!</span>
        </h1>
        <p>
          Con <span>Quizabes</span> vas a poder tener muchos conocimientos en cultura
          general, aprende de una forma divertida!
        </p>
        <div className={home.homeButtons}>
            <Button text="ELEGIR TEMÁTICA" />
            <Button text="CUALQUIER TEMÁTICA" />
        </div>
      </section>
      <Wave />
    </main>
  );
}

export default Home;
