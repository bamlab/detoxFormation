import React, { FunctionComponent, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { Category } from '../../Components/Category/Category';

export const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

type RawCategory = {
  idCategory?: string;
  strCategory?: string;
  strCategoryThumb?: string;
  strCategoryDescription?: string;
};

export const CategoryList: FunctionComponent = () => {
  const [categories, setCategories] = useState<RawCategory[]>([]);
  const [isLoading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories.php`);
      const json: { categories: RawCategory[] } = await response.json();
      if (json.categories) {
        setCategories(json.categories);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    void getCategories();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.title}>The Meal App</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        categories.map(category => {
          const { strCategory, strCategoryThumb } = category;

          if (strCategory && strCategoryThumb) {
            return (
              <Category
                key={category.idCategory}
                category={{ strCategory, strCategoryThumb }}
              />
            );
          }
          return null;
        })
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    padding: 10,
  },
});
