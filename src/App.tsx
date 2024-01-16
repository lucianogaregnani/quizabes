import { Routes, Route } from "react-router-dom";
import { Home, Themes } from "./pages";
import { Layout } from "./components";
import Questions from "./pages/Questions/Questions";
import { store } from "./pages/Questions/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Themes />}></Route>
        <Route
          path="/themes/:themeId"
          element={
            <Provider store={store}>
              <Questions />
            </Provider>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
