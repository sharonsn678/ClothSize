import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../../colors/Colors';



function CategoryTile({ itemdata, onPress }) {
    
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: Colors.primary20}]}>
                    <Text style={styles.title}>{itemdata}</Text>
                </View>

            </Pressable>
        </View>
    );
}

export default CategoryTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 1,
        backgroundColor: 'white',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});