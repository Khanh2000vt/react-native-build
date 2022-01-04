/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
interface TopBarProps {
  pressTab: any;
}

const TopBar = ({pressTab}: TopBarProps) => {
  const tabID = {
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
  };
  const handlePressTab = (key: number) => {
    setActives(key);
    pressTab(key);
  };

  const [actives, setActives] = useState(tabID.FIRST);
  return (
    <View style={styles.topBar}>
      <TouchableHighlight
        style={actives === tabID.FIRST ? styles.itemBarActive : styles.itemBar}
        onPress={() => handlePressTab(tabID.FIRST)}>
        <View>
          <Text style={styles.titleBar}>List 1</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={actives === tabID.SECOND ? styles.itemBarActive : styles.itemBar}
        onPress={() => handlePressTab(tabID.SECOND)}>
        <View>
          <Text style={styles.titleBar}>List 2</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={actives === tabID.THIRD ? styles.itemBarActive : styles.itemBar}
        onPress={() => handlePressTab(tabID.THIRD)}>
        <View>
          <Text style={styles.titleBar}>List 3</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    height: 40,
  },
  itemBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    height: '100%',
    backgroundColor: 'red',
  },
  itemBarActive: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    height: '100%',
    backgroundColor: '#009688',
    elevation: 15,
  },
  titleBar: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    color: 'white',
  },
});
