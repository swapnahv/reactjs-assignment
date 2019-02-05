import React from 'react';
import {mount} from 'enzyme';
import Accordion from '../accordion';

describe('accordion component', function(){
  describe('Have props', function(){
    let component;
    let props = {
      productDetails:{
        prodCode: "LKSC",
        prodNo: "LS001",
        expiryDate: "20/02/2020",
        manufacturer: "Lakme",
        prodImg: "prod.png"
      }
    };
    beforeEach(function(){
      component = mount(<Accordion {...props}/>)
    });
    it('should render without error', function(){
      const wrapper = component.find('[data-test="accordionComponent"]');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Have no props', function(){
    let component;
    let props = {};
    beforeEach(function(){
      component = mount(<Accordion {...props}/>)
    });
    it('should not render the component', function(){
      const wrapper = component.find('[data-test="accordionComponent"]');
      expect(wrapper.length).toBe(0);
    });
  })
});