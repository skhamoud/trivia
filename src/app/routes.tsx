import { Route, Routes } from "react-router-dom";
import Home from "features/quiz/pages/welcome";
import Quiz from "features/quiz/pages/quiz";
import Results from "features/quiz/pages/results";

const routes = () => {
  return (
    <Routes>
      <Route path="/results" element={<Results />} />
      <Route path="/quiz/:question" element={<Quiz />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default routes;
