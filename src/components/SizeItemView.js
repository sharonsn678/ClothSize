import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Colors from '../../colors/Colors';

function SizeItemView({ id, name, width, length, unit}) {

    const navigation = useNavigation();

    function selectItemHandler() {
        navigation.navigate('MoreInfoScreen', {
            itemId: id,
            itemName: name,
            itemWidth: width,
            itemLength: length,
            itemLength: unit
        });
    }

    return (<View style={styles.itemContainer}>
        <Pressable
            android_ripple={{ color: '#ccc' }}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
            onPress={selectItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>width: {width}</Text>
                    <Text style={styles.detailItem}>length: {length}</Text>
                    <Text style={styles.detailItem}>unit: {unit} </Text>
                </View>
            </View>
        </Pressable >
    </View>);
}

export default SizeItemView;

const styles = StyleSheet.create({
    itemContainer: {
        margin: 8,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: Colors.primary20,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75,
      },
});