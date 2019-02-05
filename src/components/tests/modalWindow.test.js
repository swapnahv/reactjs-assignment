import React from 'react';
import { shallow } from 'enzyme';
import LogoutModal from '../modalWindow';

describe('Modal window component', function(){
    let component;
    beforeEach(function(){
        component = shallow(<LogoutModal />);
    });
    it('should render without error', function(){
        const wrapper = component.find('[data-test="logoutModalComponent"]');
        expect(wrapper.length).toBe(1);
    })
    it('should call handleShow function on click of logout button', function(){
        const wrapper = component.find('[data-test="logOutButton"]');
        const handleShow = jest.spyOn(component.instance(), 'handleShow');
        wrapper.simulate('click');
        expect(handleShow).toBeCalled();
    })
});