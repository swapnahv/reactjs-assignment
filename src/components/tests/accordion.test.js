import React from 'react';
import {mount} from 'enzyme';
import Accordion from '../accordion';

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const accordionPanel = mount(<Accordion productDetails = '{}'/>);
  expect(accordionPanel).toHaveLength(1);
    console.log(accordionPanel);
    console.log("test");
  
});