import {useState} from "react";
import{ View, TextInput, StyleSheet, Pressable,Text,Keyboard} from 'react-native'
import Colors from "../../colors/Colors";
import { Feather } from '@expo/vector-icons'


const SearchBar = ({term, onTermChange})=>{
    const [enteredText, setEnteredText] = useState(term)
    return (
        <View style = {styles.background} >
            <Feather name = 'search' style={styles.iconStyle}/>
        <TextInput 
            placeholder="number 1 to 20"
            autoCapitalize="none"
            autoCorrect={false}
            style = {styles.inputStyle}
            value = {enteredText}
            onChangeText={newTerm=>{setEnteredText(newTerm)}}
        ></TextInput>
        <Pressable 
            android_ripple={{ color: '#ccc' }}
            style = {styles.submitButton}
            onPress={() => {
                Keyboard.dismiss();
                onTermChange(enteredText);
                }}>
                <Text style={styles.text}>Submit</Text>
        </Pressable>      
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
        fontSize: 18,
    },
    iconStyle:{

        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    },
    submitButton:{
        flex: 0.35,
        alignItems:'baseline'
  
    },
    text:{
        fontSize: 20,
        color: Colors.primary200,
        marginTop:10,
    }

});

export default SearchBar;