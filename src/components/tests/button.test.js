import React from "react";
import {shallow} from "enzyme";
import Button from "../button";


describe('button component', function(){
        let component;
        let props = {disabledProps: true, btnValue: 'login', handleSubmitProps: function(){}};
        beforeEach(function(){
            component = shallow(<Button {...props}/>)
        });
        it('should render button without error', function(){
            const wrapper = component.find('[data-test="buttonComponent"]');
            expect(wrapper.length).toBe(1);
        });
        it('should be disabled', function(){
            expect(component.prop('disabled')).toBeTruthy();
        });
        it('should have text', function(){
            expect(component.text()).toBe("login");
        });
        it('should have onclick', function(){
            expect(component.prop('onClick')).toBeDefined();
        });
});


