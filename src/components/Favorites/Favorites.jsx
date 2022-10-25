import "./favorites.css";
import { useAppContext } from "../context/appContext";
export const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

//   console.log("favorites", favorites);

  const favoriteChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };
  return <div className="favorites">
     {favorites.length>0 ? favorites.map((book) => {
        return (
          <div key={book.id} className="book">
            <div className="book-title">
              <h4>{book.title}</h4>
            </div>
            <div className="book-img">
              <img src={book.image_url} alt="/" />
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
      }) : <h1>You don't have any favorite books yet</h1>}
  </div>;
};
