import { useEffect, useState } from "react";
import { questionAdapter } from "../adapter/question.adapter";
import useCurrentQuestion from "./useCurrentQuestion";
import { QuestionFetch } from "../models/questionFetch.model";

function useQuestions({ themeId }: { themeId: string | undefined }) {
  const { changeQuestion, changeQuestions } = useCurrentQuestion();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(`https://opentdb.com/api.php?amount=10&category=${themeId}`)
      .then(async (response) => {
        if (!response.ok) setError("Something went wrong");
        const json = await response.json()
        return json.results;
      })
      .then((questions:QuestionFetch[]) => {
        const adaptedQuestions = questionAdapter(questions)
        changeQuestions(adaptedQuestions);
        changeQuestion(adaptedQuestions[0]);
      })
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeId]);

  return {
    loading,
    error,
  };
}

export default useQuestions;
