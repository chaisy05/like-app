import React from 'react';
import { View as DefaultView, Text as DefaultText } from 'react-native';

export function View(props) {
  return <DefaultView {...props} style={[props.style]} />;
}

export function Text(props) {
  return <DefaultText {...props} style={[props.style]} />;
}
