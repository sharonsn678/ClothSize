import { useContext, useLayoutEffect, useReducer, useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import { SIZEITEMS, CATEGORIES } from '../data/sizedata';
import Colors from '../../colors/Colors'
import SearchBar from '../components/SearchBar';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../storage/MyContext';
import { sizeReducer } from '../reducers/sizeConversion.js'



function MoreInfoScreen({ route, navigation }) {

    const itemId = route.params.itemId;
    const itemDetail = SIZEITEMS.find((theitem) => { return theitem.id == itemId })
    const regionid = itemDetail.regionIds[0];
    const category = CATEGORIES.find((acat) => { return acat.id === regionid });

    const favoriteItemCtx = useContext(FavoritesContext);
    const isFavorite = favoriteItemCtx.ids.includes(itemId);
    const [itemIsFavorite, setItemIsFavorite] = useState(isFavorite);


    function headerButtonPressHandler(){
        setItemIsFavorite(!itemIsFavorite);
        if (itemIsFavorite){
            favoriteItemCtx.removeFavorite(itemId);
        }
        else{
            favoriteItemCtx.addFavorite(itemId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => {
            //return <Button title='Save' onPress={headerButtonPressHandler}/>
            return <IconButton icon={itemIsFavorite?"star":"save"} onPress={headerButtonPressHandler} />
          }
        });
      }, [navigation, headerButtonPressHandler]);

      const [state, dispatch] = useReducer(sizeReducer, itemDetail);

    return (
        <View>
            <View style={styles.topTextContainer}>
                <Text style={styles.detailTitle}>{itemDetail.name}</Text>
                <Text style={styles.detailText}>{category.region}</Text>
                <View style={styles.rowText}>
                    <Text style={styles.detailText}>width: {state.width}, </Text>
                    <Text style={styles.detailText}>length: {state.length}, </Text>
                  
                    <Pressable 
                    style = {styles.ConvertButton}
                    onPress={() => dispatch({unitToChange: true})}>
                        <Text>{state.unit.toUpperCase()}</Text>
                    </Pressable>
                </View>
            </View>
            <SearchBar/>

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
