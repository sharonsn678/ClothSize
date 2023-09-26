import { createContext, useState } from 'react';
import { SIZEITEMS } from '../data/sizedata';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoritesContext = createContext({
  ids: [],
  myItems: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {

//   const retrivedIds = async ()=> {
//     try{
//       const keys = await AsyncStorage.getAllKeys();
//       console.log("get keys", keys);
//       return (keys || []);
//     }
//      catch (error){
//         console.error(error);
//      }
//   }

// console.log("retrivedIds", retrivedIds);
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

//  const storeData = async (vakye) =>{ 
//   try{
//       await AsyncStorage.setItem('ids',JSON.stringigy(favoriteItemIds));
//   } catch (e) {
//     console.log("failed ayncstorage",e);
//   };

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