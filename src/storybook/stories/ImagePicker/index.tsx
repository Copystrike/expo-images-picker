import React from 'react';
import { node, func } from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Button({ onPress, children }) {
    return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
    children: null,
    onPress: () => {},
};

Button.propTypes = {
    children: node,
    onPress: func,
};
