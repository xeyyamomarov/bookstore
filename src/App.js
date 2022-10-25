import "./App.css";
import {Routes,Route} from "react-router-dom"
import {Booklist} from "./components/Booklist"
import { BookDetails } from "./components/BookDetails";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Favorites } from "./components/Favorites";

function App() {
  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Booklist/>} />
      <Route path="/books/:id" element={<BookDetails/>} />
      <Route path="/favorites" element={<Favorites/>} />
    </Routes>
    <Footer/>

  </div>;
}

export default App;
