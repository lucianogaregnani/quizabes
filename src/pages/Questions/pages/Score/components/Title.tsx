import scoreStyle from "../score.module.scss";

function Title({ score }: { score: number }) {
  const getText = () => {
    if (score < 100) {
      return {
        text: "You can get better!",
        scoreColor: scoreStyle.youCanGetBetter,
      };
    }
    if (score >= 100 && score < 125) {
      return {
        text: "Not bad!",
        scoreColor: scoreStyle.notBad,
      };
    }
    if (score >= 125 && score < 150) {
      return {
        text: "Good!",
        scoreColor: scoreStyle.good,
      };
    }
    if (score >= 150) {
      return {
        text: "Very good!",
        scoreColor: scoreStyle.good,
      };
    }
  };

  return <h1 className={getText()?.scoreColor}>{getText()?.text}</h1>;
}

export default Title;
