import { useContext, useLayoutEffect, useReducer, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import { SIZEITEMS, CATEGORIES } from '../data/sizedata';
import Colors from '../../colors/Colors'
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../storage/MyContext';
import { sizeReducer } from '../reducers/sizeConversion.js'
import SizeItemView from '../components/SizeItemView'
import SearchBar from '../components/SearchBar';



function MoreInfoScreen({ route, navigation }) {

    const itemId = route.params.itemId;
    const itemDetail = SIZEITEMS.find((theitem) => { return theitem.id == itemId })
    const regionid = itemDetail.regionIds[0];

    const [state, dispatch] = useReducer(sizeReducer, itemDetail);

    [category, setCategory] = useState('');
    useEffect(()=>{
        setCategory(CATEGORIES.find((acat) => { return acat.id === regionid }));
        dispatch({ unitToChange: false, payload: itemDetail });
        handleTermChanges(term);
        setItemIsFavorite(favoriteItemCtx.ids.includes(itemId));
         }, 

        [itemDetail]);


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
        SetTerm(proximity);

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



    function renderSizeItem(itemData){
        const item = {
            id: itemData.item.id,
            name: itemData.item.name,
            width: itemData.item.width,
            length: itemData.item.length,
            unit: itemData.item.unit
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
                        onPress={() => dispatch({ unitToChange: true})}>
                        <Text style ={styles.buttonText}>{state.unit.toUpperCase()}</Text>
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
                <Text style={styles.notFoundText}>{ (searchArray.length==0) ? "No items found" : "" }</Text>
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
            flexDirection: 'row',
            alignItems: 'baseline',
        },
        ConvertButton: {
            width: 60,
            height: 28,
            alignItems: 'center',
            borderColor: Colors.accentgreen,
            borderWidth: 1,
            borderRadius: 3,
            margin: 3,
        },
        buttonText:{
            fontSize: 18,
            paddingBottom: 2,
        },
        detailText: {
            fontSize: 20,
        },
        detailTitle: {
            fontSize: 20,
        },
        notFoundText:{
            flex: 1,
            padding: 30,
            fontSize: 20
        },
        
    }
);