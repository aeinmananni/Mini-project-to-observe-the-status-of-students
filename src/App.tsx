import Home from "./components/home";
import StudentRoute from "./components/student-route";
import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Score from "./components/score";
import Performance from "./components/perforemanse";
import AddNewStudent from "./components/add-new-student";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" index element={<StudentRoute />} />
        <Route path="about" index element={<About />} />
        <Route path="score" index element={<Score />} />
        <Route path="performance" index element={<Performance />} />
        <Route path="addStudent/:id?" index element={<AddNewStudent />} />
      </Route>
    </Routes>
  );
};

export default App;
