import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';
import Colors from '../../colors/Colors'



function ItemInput(props) {
    const [enteredNameText, setEnteredNameText] = useState('');
    const [enteredWidthText, setEnteredWidthText] = useState('');
    const [enteredLengthText, setEnteredLengthText] = useState('');
    const [enteredUnitText, setEnteredUnitText] = useState('');

    function sizeInputNameHandler(enteredText) {
        setEnteredNameText(enteredText);
    }
    function sizeInputWidthHandler(enteredText) {
        setEnteredWidthText(enteredText);
    }
    function sizeInputLengthHandler(enteredText) {
        setEnteredLengthText(enteredText);
    }
    function sizeInputUnitHandler(enteredText) {
        setEnteredUnitText(enteredText);
    }

    function addNewItemHandler() {
        props.onAddItem(({enteredNameText, enteredLengthText, enteredWidthText}));
        setEnteredLengthText('');
        setEnteredWidthText('');
        setEnteredNameText('');
        setEnteredUnitText('');
    }


    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainter} >
                
                <TextInput
                    style={styles.textInput}
                    placeholder="Name / Description"
                    placeholderTextColor= {Colors.accent100}
                    onChangeText={sizeInputNameHandler}
                    value={enteredNameText} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Width"
                    placeholderTextColor= {Colors.accent100}
                    onChangeText={sizeInputWidthHandler}
                    vlaue={enteredWidthText} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Length"
                    placeholderTextColor= {Colors.accent100}
                    onChangeText={sizeInputLengthHandler}
                    value={enteredLengthText} />
                <TextInput
                    style={styles.textInput}
                    placeholder="Unit"
                    placeholderTextColor= {Colors.accent100}
                    onChangeText={sizeInputUnitHandler}
                    value={enteredUnitText} />
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
     
        alignItems: 'center',
        padding: 26,
        backgroundColor:Colors.primary150,
        marginTop: 40,
    },
    textInput: {
        width: '90%',
        height: 50,
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