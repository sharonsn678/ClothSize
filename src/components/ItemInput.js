import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';
import Colors from '../../colors/Colors'



function ItemInput(props) {
    const [enteredNameText, setEnteredNameText] = useState('');
    const [enteredWidthText, setEnteredWidthText] = useState('');
    const [enteredLengthText, setEnteredLengthText] = useState('');

    function goalInputNameHandler(enteredText) {
        setEnteredNameText(enteredText);
    }
    function goalInputWidthHandler(enteredText) {
        setEnteredWidthText(enteredText);
    }
    function goalInputLengthHandler(enteredText) {
        setEnteredLengthText(enteredText);
    }

    function addNewItemHandler() {
        props.onAddItem((enteredNameText + " width: " + enteredWidthText + " length: " + enteredLengthText));
        setEnteredLengthText('');
        setEnteredWidthText('');
        setEnteredNameText('');
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainter} >
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Fabric Description"
                    onChangeText={goalInputNameHandler}
                    value={enteredNameText} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Width"
                    onChangeText={goalInputWidthHandler}
                    vlaue={enteredWidthText} />
                <TextInput
                    style={styles.textInput}
                    placeholder="length"
                    onChangeText={goalInputLengthHandler}
                    value={enteredLengthText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Save" onPress={addNewItemHandler} style={styles.button} color={Colors.accent800} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Cancel" onPress={props.onCancel} color={Colors.accent800} />
                    </View>

            </View>

        </View>
        </Modal >

    );
}


export default ItemInput;

const styles = StyleSheet.create({
    inputContainter: {
        flex: 1,
        flexDirection: 'colume',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 26,
        backgroundColor:Colors.primary150,
        marginTop: 40,
    },
    textInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: Colors.accent700,
        marginRight: 8,
        padding: 5,
        marginTop: 20
    },
    buttonContainer: {
        margin: 1,
        flexDirection: "row"
    },
    button: {
        width: 100,
        marginHorizontal: 8
        
    }
});