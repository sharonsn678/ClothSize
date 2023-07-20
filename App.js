import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import SingleItem from './components/SingleItem.js'
import ItemInput from './components/ItemInput.js'

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [enteredItems, setEnteredItems] = useState([]);

  function addItemHandler(enteredText) {
    //console.log(enteredNameText, enteredWidthText, enteredLengthText);
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
        onPress={startAddItemHandler}
     >
      </Button>
      <ItemInput visible={modalIsVisible} onAddItem={addItemHandler} onCancel={endAddItemHandler}/>
      <View style={styles.listItemsContainer}>
        {/* <ScrollView>
        {enteredItems.map((itemname) => (
                  <View key={itemname} style={styles.newItem}>
                    <Text style={styles.newItemText} >{itemname}</Text>
                  </View>))
        }
        </ScrollView> */}
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
      <StatusBar style="auto" />
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
    backgroundColor: '#fffff0',
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
