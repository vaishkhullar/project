import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/articles/ArticleList";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
