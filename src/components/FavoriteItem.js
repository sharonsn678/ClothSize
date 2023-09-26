import {StyleSheet,View, Text, Pressable} from 'react-native';
import Colors from '../../colors/Colors';
import {Ionicons} from '@expo/vector-icons';
import { SIZEITEMS } from '../data/sizedata';



function FavoriteSingleItem(props) {

    const displayItem = SIZEITEMS.find((theitem) => { 
        return theitem.id === props.id });

    return (
      <Pressable>
        <View style={styles.newItem}>
        <Ionicons name='star' size={20} color='red' />
        <Text style={styles.newItemText} > {displayItem.name} {displayItem.width} x {displayItem.length} {displayItem.unit}</Text>
      </View>
      </Pressable>

    );
}

export default FavoriteSingleItem;

const styles= StyleSheet.create({
    newItem: {
        flexDirection:'row',
        margin: 4,
        padding: 4,
        height: 40,
        backgroundColor: Colors.accent100,
        color: 'white',
        borderRadius: 6,
      },
      newItemText: {
        color: 'white',
        fontSize: 18,
      },
});
