interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export interface GetQuestionsResponse {
  response_code: number;
  results: Question[];
}
const baseUrl = "https://opentdb.com/api.php";

export default {
  async getQuestions(amount = 10): Promise<GetQuestionsResponse> {
    const res = await fetch(
      `${baseUrl}?amount=${amount}&difficulty=hard&type=boolean`
    );
    if (res.ok) return await res.json();
    else throw new Error(res.statusText || "Error fetching questions");
  },
  // other api calls ...
};
