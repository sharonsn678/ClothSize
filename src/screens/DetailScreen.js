import {View, Text, StyleSheet, FlatList} from 'react-native'
import SizeItemView from '../components/SizeItemView';
import { SIZEITEMS } from '../data/sizedata';

function DetailScreen({route, navigation}){

    const categoryId = route.params.categoryId
    const displayitems = SIZEITEMS.filter((itemdata) => { return itemdata.regionIds.indexOf(categoryId) >= 0; })

    function renderSizeItem(itemData){
        const item = {
            id: itemData.item.id,
            name: itemData.item.name,
            width: itemData.item.width,
            length: itemData.item.length,
            unit: itemData.item.unit}

        return (
            <SizeItemView {...item}
            />
        );
    }

    return (
        <View>
            <FlatList
                data = {displayitems}
                keyExtractor={(item)=>{item.id}}
                renderItem={renderSizeItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default DetailScreen;
