import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Category } from "./pages/Category";
import { NotFount } from "./pages/NotFound";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter basename="/react-food">
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contact} />
            <Route path="/category/:name" Component={Category} />
            <Route path="/meal/:id" Component={Recipe} />
            <Route path="*" Component={NotFount} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
