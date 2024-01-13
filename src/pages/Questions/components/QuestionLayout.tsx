import { useCurrentSecond } from "../hooks";
import useCurrentQuestion from "../hooks/useCurrentQuestion";
import question from "../questions.module.scss";
import { useAppSelector } from "../hooks/store";
import { useEffect } from "react";

const counter = Array.from({ length: 10 }, (_, index) => index + 1);

function QuestionLayout({ children }: { children: React.ReactNode }) {
  const { currentSecond, resetCurrentSecond } = useCurrentSecond()
  const { currentIndex, goToNextQuestion } = useCurrentQuestion()
  const currentQuestion = useAppSelector(state => state.currentQuestion)

  useEffect(() => {
    if(currentSecond === 11) {
      goToNextQuestion()
      resetCurrentSecond()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSecond])

  const getDifficultyColor = () => {
    const difficulty = currentQuestion.difficulty 
    if(difficulty === 'hard') return question.hardQuestion
    if(difficulty === 'medium') return question.mediumQuestion
    if(difficulty === 'easy') return question.easyQuestion
  }

  return (
    <article className={question.questionLayout}>
      <header className={question.headerContainer}>
        <div>
          {counter.map((time) => (
            <div
              key={time}
              className={`${
                currentSecond >= time && question.timerRed
              } ${question.questionTimer}`}
            ></div>
          ))}
        </div>
        <div>{currentIndex}/10</div>
        <div>
          Difficulty: <span className={getDifficultyColor()}>{currentQuestion.difficulty.toUpperCase()}</span>
        </div>
      </header>
      <hr />
      {children}
    </article>
  );
}

export default QuestionLayout;
