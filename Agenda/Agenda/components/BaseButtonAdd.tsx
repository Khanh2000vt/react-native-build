/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
    onPress: any
}

export default function BaseButtonAdd({onPress}: Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Ionicons name="add-circle-outline" size={20} color="black"/>
        </TouchableOpacity>
    );
}
