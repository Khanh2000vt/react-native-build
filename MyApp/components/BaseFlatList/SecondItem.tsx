/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
interface Props {
  item: any;
  onPress: any;
}
export default function SecondItem(item: any, onPress: any) {
  // const [a, setA] = useState(1);
  const handlePress = () => {
    onPress(item);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.firstItem}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  firstItem: {
    width: '100%',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
