import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";

import Article from "./components/Article";

import BurgerMenu from "./components/navbar/BurgerMenu";
// import Login from "./components/Login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Login></Login> */}
        <BurgerMenu></BurgerMenu>
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
          <Route
            path="/articles/topic/:topic_slug"
            element={<ArticleList />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
