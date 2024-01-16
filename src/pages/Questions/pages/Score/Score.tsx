import { Link } from "react-router-dom";
import { Button } from "../../../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import Title from "./components/Title";
import score from "./score.module.scss";
import Confetti from "./components/Confetti";
import { resetScore } from "../../store/score/score";
import { addNewQuestions } from "../../store/questions/questions";
import { changeGameFinish } from "../../store/gameFinish/gameFinish";
import { changeSelectedAnswer } from "../../store/selectedAnswer/selectedAnswer";

function Score() {  
  const dispatch = useAppDispatch()
  const scoreContext = useAppSelector((score) => score.score);

  const handleReturnClick = () => {
    dispatch(resetScore())
    dispatch(addNewQuestions([]))
    dispatch(changeGameFinish(false))
    dispatch(changeSelectedAnswer(''))
  }

  return (
    <section className={score.scoreSection}>
      <Confetti />
      <Title score={scoreContext} />
      <p>
        Your score is: <span>{scoreContext}</span>
      </p>
      <div>
        <Button text="Play again" onClick={() => window.location.reload()}/>
        <Link to="/themes">
          <Button text="Return to themes" onClick={handleReturnClick}/>
        </Link>
      </div>
    </section>
  );
}

export default Score;
