import { useCurrentSecond } from "../hooks";
import question from "../questions.module.scss";

const counter = Array.from({ length: 10 }, (_, index) => index + 1);

function QuestionLayout({ children }: { children: React.ReactNode }) {
  const { currentSecond } = useCurrentSecond()

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
        <div>5/10</div>
        <div>
          Difficult: <span>Hard</span>
        </div>
      </header>
      <hr />
      {children}
    </article>
  );
}

export default QuestionLayout;
