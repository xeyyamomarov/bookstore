import "./booklist.css";
import { useState, useEffect } from "react";
import "../../data";
import { API_URL } from "../../data";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
export const Booklist = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  // console.log("favorites",favorites)
  const navigate= useNavigate()

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="book-list">
      {books.slice(6-50).map((book) => {
        return (
          <div key={book.id} className="book">
            <div className="book-title">
              <h4>{book.title}</h4>
            </div>
            <div className="book-img">
              <img onClick={()=>navigate(`/books/${book.id}`)} src={book.image_url} alt="/" />
            </div>
            <div className="book-btn">
              {favoriteChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
