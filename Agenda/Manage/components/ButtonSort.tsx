/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface ButtonSortProps {
    onPressButton: any,
}
const ButtonSort = ({onPressButton}: ButtonSortProps) => {
    const initColor = {
        active: 'red',
        normal: 'gray',
    };
    const getColor = (index: number) => {
        if (index === 1) {
            return {
                above: initColor.normal,
                below: initColor.active,
            };
        }
        else if (index === 2) {
            return {
                above: initColor.active,
                below: initColor.normal,
            };
        }
        else {
            return {
                above: initColor.normal,
                below: initColor.normal,
            };
        }
    };
    const [option, setOption] = useState(0);
    const handlePress = () => {
        onPressButton(option);
        if (option === 2) {
            setOption(0);
        }
        else {
            setOption(option + 1);
        }
    };
  return (
    <TouchableOpacity style={styles.buttonSort} onPress={handlePress}>
      <View>
        <Ionicons name="caret-up" size={20} style={{color: getColor(option).above}}/>
        <Ionicons name="caret-down" size={20} style={{color: getColor(option).below}} />
      </View>
      <Text> Sort</Text>
    </TouchableOpacity>
  );
};
export default ButtonSort;

const styles = StyleSheet.create({
  buttonSort: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      // backgroundColor: '#a2dcf1',
      width: 60,
      height: 40,
      backgroundColor: '#fff',
      paddingRight: 8,
      // borderRadius: 8,
  },
});
