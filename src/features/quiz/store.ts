import create from "zustand";

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
  setQuestions: (questions: Question[]) => void;
  setAnswer: (answer: Answer, questionId: string) => void;
};

const useQuizStore = create<QuizState>((set) => ({
  questions: {},
  answers: {},
  setQuestions(questions) {
    const normalizedQuestions = questions.reduce(
      (acc, q, idx) => ({ ...acc, [idx + 1]: q }),
      {}
    );
    set(() => ({
      questions: normalizedQuestions,
    }));
  },
  setAnswer(answer, id) {
    set((state) => ({
      answers: { ...state.answers, [id]: answer },
    }));
  },
}));

export default useQuizStore;
