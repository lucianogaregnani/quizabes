import { Routes, Route } from "react-router-dom";
import { Home, Themes } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />} />
      </Routes>
    </Layout>
  );
}

export default App;
