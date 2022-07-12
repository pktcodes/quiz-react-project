import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const {
    waiting,
    loading,
    questions: tempQuestions,
    index,
    correct,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm></SetupForm>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  const questionsData = { ...tempQuestions[0] };
  console.log(questionsData);
  const { correct_answer, incorrect_answers, question } = questionsData;
  const answers = [...incorrect_answers, correct_answer];
  console.log(answers);
  return <main>quiz</main>;
}

export default App;
