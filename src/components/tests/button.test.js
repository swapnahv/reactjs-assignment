import React from "react";
import Button from "../button";

test('button', function(){
    const props = {disabledProps: true, btnValue: 'login'}
    const values = Button(props);
    console.log(values);
})
