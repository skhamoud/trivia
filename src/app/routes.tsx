import { Route, Routes } from "react-router-dom";
import Home from "features/quiz/views/welcome";
import Quiz from "features/quiz/views/quiz";
import Results from "features/quiz/views/results";

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
