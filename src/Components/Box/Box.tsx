import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BOX_SIZE = 100;

interface BoxProps {
  text: string;
}

export const Box: FunctionComponent<BoxProps> = ({ text }) => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'green',
  },
});
