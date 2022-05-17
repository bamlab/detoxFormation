import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Category } from '../Category';

describe('[Component] Category', () => {
  test('renders correctly', () => {
    const tree = render(
      <Category
        category={{
          strCategory: 'Category A',
          strCategoryThumb: 'Link to the category A image',
        }}
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
