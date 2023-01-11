import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";
import Header from "./components/navbar/Header";
import Article from "./components/Article";
import ArticleTopicView from "./components/articles/ArticleTopicView";
import BurgerMenu from "./components/navbar/BurgerMenu";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header></Header> */}
        <BurgerMenu></BurgerMenu>
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
          <Route
            path="/articles/topic/:topic_slug"
            element={<ArticleTopicView />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
