import { Routes, Route } from "react-router-dom";
import { Home, Themes } from "./pages";
import { Layout } from "./components";
import Questions from "./pages/Questions/Questions";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />}></Route>
        <Route path="/themes/:themeId" element={<Questions />} />
      </Routes>
    </Layout>
  );
}

export default App;
