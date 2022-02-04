import create from "zustand";
import { GetQuestionsResponse } from "./data/quiz.api";

export enum Answer {
  true = "True",
  false = "False",
}
export type Question = {
  id: string;
  category: string;
  question: string;
  correct_answer: Answer;
  incorrect_answers: Answer[];
};

type Questions = {
  [key: string]: Question;
};
type Answers = {
  [key: string]: Answer;
};

export type QuizState = {
  questions: Questions;
  answers: Answers;
  count: number;
  current: number;
  fetched: boolean;
  setQuestions: (questions: GetQuestionsResponse["results"]) => void;
  setAnswer: (answer: Answer, questionId: string) => void;
  reset: () => void;
};

const initialState = {
  fetched: false,
  count: 0,
  current: 0,
  questions: {},
  answers: {},
};

const useQuizStore = create<QuizState>((set) => ({
  ...initialState,
  setQuestions(questions) {
    const normalizedQuestions = questions.reduce(
      (acc, q, idx) => ({ ...acc, [idx + 1]: q }),
      {}
    );
    set(() => ({
      fetched: true,
      questions: normalizedQuestions,
      count: questions.length,
      current: 1,
    }));
  },
  setAnswer(answer, id) {
    set((state) => ({
      answers: { ...state.answers, [id]: answer },
      current: state.current + 1,
    }));
  },
  reset() {
    set(() => initialState);
  },
}));

export default useQuizStore;
