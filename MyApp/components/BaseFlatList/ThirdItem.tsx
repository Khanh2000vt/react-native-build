/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
export default function ThirdItem(item: any, onPress: any) {
  const handlePress = () => {
    onPress(item);
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
            uri: item.url,
          }}
      />
      <View style={styles.text}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  text: {
      marginLeft: 20
  }
});
