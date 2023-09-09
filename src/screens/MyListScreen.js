
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { useState, useContext } from 'react';
import SingleItem from '../components/SingleItem';
import ItemInput from '../components/ItemInput.js';
import Colors from '../../colors/Colors';
import { FavoritesContext } from '../storage/MyContext';



function MyListScreen ({navigation}){

  const favoriteItemCtx = useContext(FavoritesContext);
  const myFavoriteItems = favoriteItemCtx.myItems;

console.log("myFavoriteItems", myFavoriteItems);
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [enteredItems, setEnteredItems] = useState(myFavoriteItems);
  


    
    function addItemHandler(props) {
      setEnteredItems((currentEnteredItems) => [
        ...currentEnteredItems,
        { name: (props.enteredNameText), 
          id: Math.floor(Math.random()*10000).toString(),
          width: props.enteredWidthText,
          length: props.enteredLengthText
         },
      ]);
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
    console.log(enteredItems);
    return (
        <View style={styles.appContainter}>
          <Button
            title="Add New Fabric Sizes"
            onPress={startAddItemHandler}>
          </Button>
          <ItemInput visible={modalIsVisible} onAddItem={addItemHandler} onCancel={endAddItemHandler} />
    
           <View style={styles.listItemsContainer}>
            <FlatList data={enteredItems}
              renderItem={
                (dataitem) => {
                  return (
                    <SingleItem
                      text={dataitem.item.name}
                      id={dataitem.item.id} onDeleteItem={deleteItemHandler} />
                  );
                }
              }
              keyExtractor={(item, index) => {
                return item.id;
              }}>
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
        flex: 5,
      },
      button: {
        width: '40%',
        padding: 20,
    
      }
});

export default MyListScreen;
