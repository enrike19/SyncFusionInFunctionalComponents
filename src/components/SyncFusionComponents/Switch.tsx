import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

enableRipple(true);

const Switch = () => {
    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Defalt</b>
                    <SwitchComponent />
                </div>
                <div className="col-md-6">
                    <b>Checked</b>
                    <SwitchComponent checked={true}/>
                </div>
            </div>
        </div>
    );
}

export default Switch;
