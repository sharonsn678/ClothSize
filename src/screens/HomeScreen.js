import {View, StyleSheet, FlatList, Text, Pressable } from "react-native"
import {CATEGORIES} from '../data/sizedata'
import CategoryTile from "../components/categoryTile";

function HomeScreen({navigation}) {

    function renderCategoryItem(itemData) {


        function pressHandler(){
            navigation.navigate('Detail', {categoryId: itemData.item.id})
        }

        return (
            <CategoryTile itemdata={itemData.item.region} onPress={pressHandler}
            />
        );
    }

    const category = CATEGORIES;

    return(
        <FlatList
            data = {category}
            keyExtractor = {(item)=> item.id}
            renderItem = {renderCategoryItem}
        />

    );
}

export default HomeScreen;