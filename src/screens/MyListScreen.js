
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import SingleItem from '../components/SingleItem';
import ItemInput from '../components/ItemInput.js';
import Colors from '../../colors/Colors';
import { FavoritesContext } from '../storage/MyContext';
import FavoriteSingleItem from '../components/FavoriteItem';
import AsyncStorage from '@react-native-async-storage/async-storage'


function MyListScreen ({navigation}){

  const favoriteItemCtx = useContext(FavoritesContext);
  const myFavorites = favoriteItemCtx.ids;

  // useEffect(() => {
  //   getMyItems();
  // }, [enteredItems]);

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [enteredItems, setEnteredItems] = useState([]);
    const [myFavoriteIds, setMyFavoriteIds] = useState(myFavorites);
  
    
    function addItemHandler(props) {
      setEnteredItems((currentEnteredItems) => [
        ...currentEnteredItems,
        { name: (props.enteredNameText), 
          width: props.enteredWidthText,
          length: props.enteredLengthText,
          unit: props.enteredUnitText || "in",
          id: Math.floor(Math.random()*10000).toString(),
         },
      ]);
 
      endAddItemHandler();
    }

    // const saveItems = async (data) =>{
    //   const mydata = JSON.stringify(data)
    //   console.log("mydata", mydata)
    //   try{
    //     await AsyncStorage.setItem('myItems', JSON.stringify(data));
    //     console.log("Saved", data)
    //   }catch(error){
    //     console.log(error);
    //   }
    // }

    // const getMyItems = async () => {
    //   try{
    //     const savedItems = await AsyncStorage.getItem('myItems');
    //     console.log(saveItems);
    //     const parsedItems = JSON.parse(saveItems);

    //     setEnteredItems(currentEnteredItems => [
    //       ...currentEnteredItems, parsedItems]);
    //   } catch(error) {
    //       console.log(error);
    //   }
    // }


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
      saveItems(enteredItems)
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
                console.log("mylist", item);
                return item.item.id.id;
              }}>
            </FlatList>
          </View>
           <View style={styles.listItemsContainer}>
            <Text>My Favorite Items</Text>
            <FlatList data = {myFavoriteIds}
            renderItem={
              (dataitem)=>{
                return(<FavoriteSingleItem id={dataitem.item} />);
              }}
              keyExtractor = {(item)=> item.id
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
