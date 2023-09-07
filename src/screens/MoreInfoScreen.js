import { View, Text, StyleSheet } from 'react-native'
import { SIZEITEMS, CATEGORIES } from '../data/sizedata';
import Colors from '../../colors/Colors'
import SearchBar from '../components/SearchBar';

function MoreInfoScreen({ route, navigation }) {

    const itemId = route.params.itemId;
    const itemDetail = SIZEITEMS.find((theitem) => { return theitem.id == itemId })
    const regionid = itemDetail.regionIds[0];
    const category = CATEGORIES.find((acat) => { return acat.id === regionid });

    console.log('item id', itemId);
    return (
        <View>
            <View style={styles.topTextContainer}>
                <Text style={styles.detailTitle}>{itemDetail.name}</Text>
                <Text style={styles.detailText}>{category.region}</Text>
                <View style={styles.rowText}>
                    <Text style={styles.detailText}>width: {itemDetail.width}, </Text>
                    <Text style={styles.detailText}>length: {itemDetail.length}, </Text>
                    <Text style={styles.detailText}>unit: {itemDetail.unit}</Text>
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
        detailText: {
            fontSize: 18,
        },
        detailTitle: {
            fontSize: 20,
        }
    }
);
