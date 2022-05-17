import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { Box } from '../Box';

describe('[Component] Box', () => {
  test('renders correctly', () => {
    const tree = render(<Box text="Hello" />);
    expect(tree).toMatchSnapshot();
  });
});
