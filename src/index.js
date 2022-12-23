import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Countries from "./pages/Countries";
import NoPage from "./pages/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import MapPage from "./pages/mapPage";
import "./styles.css";
import "./App.css";
import CreateQuestionPage from "./pages/CreateQuestionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Quiz" element={<Quiz />} />
          <Route path="Countries" element={<Countries />} />
          <Route path="mapPage" element={<MapPage />} />
          <Route path="CreateQuestion" element={<CreateQuestionPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));