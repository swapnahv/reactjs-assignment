import React from "react";
import Button from "../button";

test('button', function(){
    const props = {disabledProps: true, btnValue: 'login'}
    const value = Button(props);
    expect(value).toBeDefined();
})

