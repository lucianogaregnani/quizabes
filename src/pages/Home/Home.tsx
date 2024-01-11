import { Link } from "react-router-dom";
import { Button } from "../../components";
import home from "./home.module.scss";

function Home() {
  return (
    <section className={home.homeMain}>
      <h1>
        Play and learn at the same <span>time!</span>
      </h1>
      <p>
        With <span>Quizabes</span>, you can gain a lot of knowledge in general
        culture, learning in a fun way!
      </p>
      <Link className={home.homeButtons} to="/themes">
        <Button text="Go play!" />
      </Link>
    </section>
  );
}

export default Home;
