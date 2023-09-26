import {StyleSheet,View, Text, Pressable} from 'react-native';
import Colors from '../../colors/Colors'



function SingleItem(props) {
    return (
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.newItem}>
        <Text style={styles.newItemText} >{props.text}:</Text>
        <Text style ={styles.newItemText}> width: {props.width}, </Text>
        <Text style ={styles.newItemText}> length: {props.length}, </Text>
        <Text style ={styles.newItemText}> unit:{props.unit}</Text>

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