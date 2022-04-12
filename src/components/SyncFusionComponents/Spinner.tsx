import { createSpinner, showSpinner } from '@syncfusion/ej2-popups';
import {setSpinner} from "@syncfusion/ej2-react-popups";

const Spinner = () => {
    const element1 = document.getElementById('container');
    const element2 = document.getElementById('container2');

    setTimeout(() => {
    if (element1 && element2) {
        createSpinner({
            // Specify the target for the spinner to show
            target: element1,
        });
        // showSpinner() will make the spinner visible
        showSpinner(element1);

        createSpinner({
            // Specify the target for the spinner to show
            target: element2,
        });
        // showSpinner() will make the spinner visible
        showSpinner(element2);
        setSpinner({ type: 'Bootstrap' });
    }  } , 1000);

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Default</b>
                    <div className="control-pane">
                        <div id="container" className="control-section col-lg-12 spinner-target"></div>
                    </div>
                </div>
                <div className="col-md-4">
                    <b>Set Spinner</b>
                    <div id="container2" className="control-section col-lg-12 spinner-target"></div>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
                <div className="col-md-4">
                    <b></b>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
