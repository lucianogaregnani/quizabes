import { Button } from "../../../../components";
import { useAppSelector } from "../../hooks/store";
import Title from "./components/Title";
import score from "./score.module.scss"

function Score() {
    const scoreContext = useAppSelector(score => score.score)

    return (
        <section className={score.scoreSection}>
            <Title score={scoreContext} />
            <p>Your score is: <span>{scoreContext}</span></p>
            <div>
                <Button text="Play again" />
                <Button text="Return to themes" />
            </div>
        </section>
    );
}

export default Score;