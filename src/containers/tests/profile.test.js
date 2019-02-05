import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../profile';

describe('Profile component', function(){
    it('passing test case to include in coverage',function(){
        expect(1+3).toBe(4);
    });
    let component;
    beforeEach(function(){
        component = shallow(<Profile/>);
    });
    it('should render without error', function(){
        const wrapper  = component.find('[data-test="profileComponent"]');
        expect(wrapper.length).toBe(1);
    })
})