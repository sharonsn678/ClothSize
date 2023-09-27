import {StyleSheet,View, Text, Pressable} from 'react-native';
import Colors from '../../colors/Colors'



function SingleItem(props) {
    return (
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.newItem}>
        <Text style={styles.newItemText} >{props.text}:</Text>
        <Text style ={styles.newItemText}> Width: {props.width}, </Text>
        <Text style ={styles.newItemText}> Length: {props.length}, </Text>
        <Text style ={styles.newItemText}> Unit: {props.unit}</Text>

      </View>
      </Pressable>

    );
}

export default SingleItem;

const styles= StyleSheet.create({
    newItem: {
        margin: 8,
        padding: 8,
        height: 40,
        backgroundColor: Colors.accent700,
        color: 'white',
        borderRadius: 6,
        flexDirection: 'row'
      },
      newItemText: {
        color: 'white'
      },
});