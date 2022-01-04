/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
    icon: string;
    title: string;
    iconSize?: number;
    style?: any;
    styleTitle?: any
}
export default function BaseButton({
    icon,
    title,
    iconSize,
    style,
    styleTitle,
}: Props) {
  return (
      <View style={[styles.container, style]}>
          <Ionicons name={icon} size={iconSize ? iconSize : 20}/>
          <Text style={[styles.text, styleTitle]}>{title}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // borderWidth: 1,
        // justifyContent: 'space-around'
    },
    text: {
        alignItems: 'center',
    }
});
