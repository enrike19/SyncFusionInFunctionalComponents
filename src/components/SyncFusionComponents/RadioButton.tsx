import { enableRipple } from '@syncfusion/ej2-base';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';

import './Common/css/RadioButtons.css';

enableRipple(true);

const Radiobutton = () => {
    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Default</b>
                    <ul>
                        <li><RadioButtonComponent label="Option 1" name="default"/></li>
                        <li><RadioButtonComponent label="Option 2" name="default"/></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <b>Right / Left</b>
                    <ul>
                        <li><RadioButtonComponent label="Left Side Label" name="position" labelPosition="Before"/></li>
                        <li><RadioButtonComponent label="Right Side Label" name="position" checked={true}/></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <b>Big / small</b>
                    <ul>
                        <li><RadioButtonComponent label="Small" name="size" cssClass="e-small"/></li>
                        <li><RadioButtonComponent label="Default" name="size"/></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Radiobutton;




