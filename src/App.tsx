import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Themes from "./pages/Themes/Themes";
import Layout from "./components/Layout/Layout";

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
