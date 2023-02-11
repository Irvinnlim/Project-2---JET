import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/SubPage/Portfolio/Portfolio";
import News from "./Components/SubPage/News/News";
import Account from "./Components/SubPage/Account/Account";
import StockEngine from "./Components/SubPage/StockPage/StockEngine";

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <Header />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks" element={<StockEngine />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/news" element={<News />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
