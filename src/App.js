import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";
import Header from "./components/Header";
import Article from "./components/Article";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
