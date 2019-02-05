import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../profile';

describe('Profile component', function(){
    let component;
    beforeEach(function(){
        component = shallow(<Profile/>);
    });
    it('should render without error', function(){
        const wrapper  = component.find('[data-test="profileComponent"]');
        expect(wrapper.length).toBe(1);
    })
})