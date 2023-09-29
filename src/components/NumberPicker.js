import { Picker, StyleSheet } from "react-native"
import { useState } from "react";
//import { SelectList } from "react-native-dropdown-select-list";


const NumberPicker = ()=> {

    const numbers =[
    {key:"1",value:"1"},
    {key:"2",value:"2"},
    {key:"3",value:"3"},
    {key:"4",value:"4"},
    {key:"5",value:"5"},
    {key:"6",value:"16"}
    ];

const [selected, setSelected] = useState('');

return(
  <Picker
    style = {styles.frame}
    selectedValue = {this.props.shift}
    onValueChange={(value)=> {this.props.setSelected(value)}}
  >
    <Picker.Item label="1" value="1"/>
    <Picker.Item label="2" value="2"/>
    <Picker.Item label="3" value="3"/>
  </Picker>
);
  // return (<SelectList
  //   maxHeight= {6}
  //   setSelected={(val)=>setSelected(val)}
  //       data = {numbers}
  //       save = "key"
  // />);

}

const styles= StyleSheet.create({
  frame:{
    width: 50,
    height: 100,
  },

});



export default NumberPicker;
