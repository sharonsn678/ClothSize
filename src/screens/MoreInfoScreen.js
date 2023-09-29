import { useContext, useLayoutEffect, useReducer, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable, FlatList } from 'react-native'
import { SIZEITEMS, CATEGORIES } from '../data/sizedata';
import Colors from '../../colors/Colors'
//import SearchBar from '../components/SearchBar';
import NumberPicker from '../components/NumberPicker';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../storage/MyContext';
import { sizeReducer } from '../reducers/sizeConversion.js'
import SizeItemView from '../components/SizeItemView'
import SearchBar from '../components/SearchBar';



function MoreInfoScreen({ route, navigation }) {

    const itemId = route.params.itemId;
    const itemDetail = SIZEITEMS.find((theitem) => { return theitem.id == itemId })
    const regionid = itemDetail.regionIds[0];
    const category = CATEGORIES.find((acat) => { return acat.id === regionid });

    const favoriteItemCtx = useContext(FavoritesContext);
    const isFavorite = favoriteItemCtx.ids.includes(itemId);
    const [itemIsFavorite, setItemIsFavorite] = useState(isFavorite);

    const [searchArray, setSearchArrray] = useState([])
    const [term, SetTerm] = useState('')


    function headerButtonPressHandler() {
        setItemIsFavorite(!itemIsFavorite);
        if (itemIsFavorite) {
            favoriteItemCtx.removeFavorite(itemId);
        }
        else {
            favoriteItemCtx.addFavorite(itemId);
        }
    }

    function handleTermChanges(proximity) {
        //const proximity = 10;
        //console.log("handleTerm:",props);

        if (proximity > 0 && proximity < 100) {

            const result = [];
            let width = itemDetail.width;
            let length = itemDetail.length;

            if (itemDetail.unit == "in") {
                width = width * 2.54;
                length = length * 2.54;
            }

            for (const index in SIZEITEMS) {
                const item = SIZEITEMS[index]
                if (item.id != itemDetail.id) {
                    let width2 = item.width;
                    let length2 = item.length;
                    if(item.unit == 'in'){
                        width2 = item.width * 2.54;
                        length2 = item.length * 2.54
                    }
                    const widthDiff = Math.abs(width2 - width);
                    const lengthDiff = Math.abs(length2 - length);
                    if (widthDiff <= proximity && lengthDiff <= proximity) {
                        result.push(item)
                    }
                }
            }
            setSearchArrray(result)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                //return <Button title='Save' onPress={headerButtonPressHandler}/>
                return <IconButton icon={itemIsFavorite ? "star" : "save"} onPress={headerButtonPressHandler} />
            }
        });
    }, [navigation, headerButtonPressHandler]);

    const [state, dispatch] = useReducer(sizeReducer, itemDetail);

    function renderSizeItem(itemData){
        const item = {
            id: itemData.item.id,
            name: itemData.item.name,
            width: itemData.item.width,
            length: itemData.item.length,
            unit: itemData.item.unit,
        }

        return (
            <SizeItemView {...item}
            />
        );
    }

    return (
        <View>
            <View style={styles.topTextContainer}>
                <Text style={styles.detailTitle}>{itemDetail.name}</Text>
                <Text style={styles.detailText}>{category.region}</Text>
                <View style={styles.rowText}>
                    <Text style={styles.detailText}>width: {state.width}, </Text>
                    <Text style={styles.detailText}>length: {state.length}, </Text>

                    <Pressable
                        style={styles.ConvertButton}
                        onPress={() => dispatch({ unitToChange: true })}>
                        <Text>{state.unit.toUpperCase()}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.topTextContainer}>
                <Text>Choose the approximated difference in centimeters</Text>
                <SearchBar term={term} onTermChange={handleTermChanges}/>
                
            </View>
            <View>
                <FlatList
                data={searchArray}
                keyExtractor={(item)=>{
                    return item.id;
                    }}
                renderItem={renderSizeItem}
                />
            </View>

        </View>

    );
}

export default MoreInfoScreen;

const styles = StyleSheet.create(
    {
        topTextContainer: {
            alignItems: 'center',
            overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
            backgroundColor: Colors.primary20,
            margin: 4,
            padding: 8
        },
        rowText: {
            flexDirection: 'row'
        },
        ConvertButton: {
            width: 40,
            alignItems: 'center',
            borderColor: Colors.accentgreen,
            borderWidth: 1,
            fontSize: 40,
            borderRadius: 3,
            margin: 3
        },
        detailText: {
            fontSize: 20,
        },
        detailTitle: {
            fontSize: 20,
        }
    }
);
