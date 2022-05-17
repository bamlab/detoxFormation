import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

type Category = { strCategory: string; strCategoryThumb: string };

interface CategoryProps {
  category: Category;
}

export const Category: FunctionComponent<CategoryProps> = ({
  category: { strCategory, strCategoryThumb },
}) => {
  return (
    <View style={styles.category}>
      <Text style={styles.text}>{strCategory}</Text>
      <Image style={styles.img} source={{ uri: strCategoryThumb }} />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 20,
    color: 'black',
    backgroundColor: '#FFF8',
    position: 'absolute',
    zIndex: 1,
  },
  img: {
    width: '100%',
    height: 75,
  },
});
