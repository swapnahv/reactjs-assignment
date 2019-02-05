import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('Header Component', function(){
    let component;
    beforeEach(function(){
        component = shallow(<Header/>);
    });
    it('should render without error', function(){
        const wrapper  = component.find('[data-test="headerComponent"]');
        expect(wrapper.length).toBe(1);
    })
})