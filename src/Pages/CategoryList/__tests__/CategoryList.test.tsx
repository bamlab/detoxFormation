import 'react-native';
import React from 'react';
import {
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import nock from 'nock';

import { API_BASE_URL, CategoryList } from '../CategoryList';
import categoryFixture from './category.fixture.json';

describe('[Page] CategoryList', () => {
  test('renders correctly with correct api data', async () => {
    nock(API_BASE_URL).get('/categories.php').reply(200, categoryFixture);

    const component = render(<CategoryList />);
    await waitForElementToBeRemoved(() => component.getByText('Loading...'));

    expect(component).toMatchSnapshot();
  });

  test('renders correctly with some undefined value', async () => {
    nock(API_BASE_URL)
      .get('/categories.php')
      .reply(200, {
        categories: [
          {
            idCategory: '1',
            strCategory: undefined,
            strCategoryThumb:
              'https://www.themealdb.com/images/category/beef.png',
            strCategoryDescription:
              'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
          },
          {
            idCategory: '2',
            strCategory: 'Chicken',
            strCategoryThumb:
              'https://www.themealdb.com/images/category/chicken.png',
            strCategoryDescription:
              'Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.',
          },
        ],
      });

    const component = render(<CategoryList />);
    await waitForElementToBeRemoved(() => component.getByText('Loading...'));

    expect(component).toMatchSnapshot();
  });

  test('renders correctly with an undefined/null response from the api', async () => {
    nock(API_BASE_URL).get('/categories.php').reply(200, undefined);

    const component = render(<CategoryList />);
    await waitForElementToBeRemoved(() => component.getByText('Loading...'));

    expect(component).toMatchSnapshot();
  });
});
