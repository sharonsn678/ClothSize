
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import SingleItem from '../components/SingleItem';
import ItemInput from '../components/ItemInput.js';
import Colors from '../../colors/Colors';
import { FavoritesContext } from '../storage/MyContext';
import FavoriteSingleItem from '../components/FavoriteItem';
import { storeItem, fetchItems } from '../http/firebase';


function MyListScreen ({navigation}){

  const favoriteItemCtx = useContext(FavoritesContext);
  const myFavorites = favoriteItemCtx.ids;

   useEffect(() => {
    async function getItems() {
      const newItems = await fetchItems();
      setEnteredItems(newItems);
    };
    getItems();
   },[]);

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [enteredItems, setEnteredItems] = useState([]);
    const [myFavoriteIds, setMyFavoriteIds] = useState(myFavorites);
  
    
    async function addItemHandler(props) {

      const newItem = { name: (props.enteredNameText), 
        width: props.enteredWidthText,
        length: props.enteredLengthText,
        unit: props.enteredUnitText || "in",
       };

      const key = await storeItem(newItem)
      if (key != 0){
        const newItemWithId = {...newItem, id: key};
        setEnteredItems([...enteredItems, newItemWithId]);
      }
      
      //Math.floor(Math.random()*10000).toString(),
      endAddItemHandler();
    }

    


    function deleteItemHandler(id) {
      setEnteredItems(currentEnteredItems => {
        return currentEnteredItems.filter((item) => item.id != id);
      })
    }
  
  
    function startAddItemHandler() {
      setModalIsVisible(true);
    }
  
    function endAddItemHandler() {
      setModalIsVisible(false);
    }

    return (
        <View style={styles.appContainter}>
          <Button
            title="Add New Fabric Sizes"
            onPress={startAddItemHandler}>
          </Button>
          <ItemInput visible={modalIsVisible} onAddItem={addItemHandler} onCancel={endAddItemHandler} />
    
           <View style={styles.listItemsContainer}>
            <Text> My Entered listItems</Text>
            <FlatList data={enteredItems}
              renderItem={
                (dataitem) => {
                  return (
                    <SingleItem
                      text={dataitem.item.name}
                      width={dataitem.item.width}
                      length={dataitem.item.length}
                      unit={dataitem.item.unit}
                      id={dataitem.item.id} onDeleteItem={deleteItemHandler} />
                  );
                }
              }
              keyExtractor={(item) => {
                return item.id;}}
              >

            </FlatList>
          </View>
           <View style={styles.listItemsContainer}>
            <Text>My Favorite Items</Text>
            <FlatList data = {myFavoriteIds}
            renderItem={
              (dataitem)=>{
                return(<FavoriteSingleItem id={dataitem.item} />);
              }}
              keyExtractor = {(item)=>{
                return item}
              }>
            </FlatList>
          </View> 
        </View>
      );
    
}

const styles = StyleSheet.create({
    appContainter: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
      },
      container: {
        flex: 1,
        backgroundColor: Colors.primary100,
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      listItemsContainer: {
        flex: 2,
      },
      button: {
        width: '40%',
        padding: 20,
    
      }
});

export default MyListScreen;