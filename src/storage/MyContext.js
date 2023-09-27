import { createContext, useState } from 'react';
import { SIZEITEMS } from '../data/sizedata';

export const FavoritesContext = createContext({
  ids: [],
  myItems: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {

  const [favoriteItemIds, setFavoriteItemIds] = useState([]);
  const [myFavoriteItems, setMyFavoriteItems] = useState([]);


  function addFavorite(id) {
    setFavoriteItemIds((currentFavIds) => [...currentFavIds, id]);
  }

  function addMyItem(item){
    setMyFavoriteItems((currentMyFavs) => [...currentMyFavs, item]);
  }

  function removeFavorite(id) {
    setFavoriteItemIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    ); 
 }

  const value = {
    ids: favoriteItemIds,
    myItems: myFavoriteItems,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;