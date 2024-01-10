import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Themes from "./pages/Themes/Themes";
import Theme from "./pages/Themes/Theme/Theme";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tematicas" element={<Themes />}>
          <Route path=":tema" element={<Theme />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
