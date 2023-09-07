import React from "react";
import{ View, TextInput, StyleSheet} from 'react-native'
import Colors from "../../colors/Colors";
import { Feather } from '@expo/vector-icons'

const SearchBar = ()=>{
    return (
        <View style = {styles.background} >
            <Feather name = 'search' style={styles.iconStyle}/>
        <TextInput placeholder="Search" style = {styles.inputStyle}></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flexDirection: 'row',
        backgroundColor: Colors.primary50,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
    },
    inputStyle:{
        flex: 1,
        borderColor: Colors.accent800,
        borderWidth: 1,
        fontSize: 18,
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;