
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import { useState } from 'react';
import SingleItem from '../components/SingleItem';
import ItemInput from '../components/ItemInput.js';
import Colors from '../../colors/Colors';


function MyListScreen ({navigation}){

    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [enteredItems, setEnteredItems] = useState([]);
  
    function addItemHandler(enteredText) {
  
      setEnteredItems((currentEnteredItems) => [
        ...currentEnteredItems,
        { text: (enteredText), id: Math.random().toString() },
      ]);
      endAddItemHandler();
      console.log(enteredItems)
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
      console.log("cancel")
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
            <FlatList data={enteredItems}
              renderItem={
                (dataitem) => {
                  return (
                    <SingleItem
                      text={dataitem.item.text}
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
