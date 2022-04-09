import {useState} from "react";
import {DialogComponent} from "@syncfusion/ej2-react-popups";


const Dialog = () => {

    const [state, setState ] = useState({hideDialog: false});

    const dialogClose = () => {
        setState({ hideDialog: false });
    };

    const handleClick = () => {
        setState({ hideDialog: true });
    }

    const mystyle = {
        height: '150%',
    };


    /* dialog 3 */

    const [state2, setState2] = useState({ hideDialog: false })

    const buttons = [{
        buttonModel: {
            content: 'OK',
            cssClass: 'e-flat',
            isPrimary: true,
        },
        'click': () => {
            setState2({ hideDialog: false });
        }
    },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat'
            },
            'click': () => {
                setState2({ hideDialog: false });
            }
        }];
    const dialogClose2 = () => {
        setState2({ hideDialog: false });
    };

    const handleClick2 = () => {
        setState2({ hideDialog: true });
    }


    return (
        <div className="container" style={mystyle}>
            <div className="row">
                <div className="col-md-6">
                    <div className="App" id='dialog-target'>
                        <button className='e-control e-btn' id='targetButton1' role='button' onClick={ handleClick }>Open</button>
                        <DialogComponent width='250px' content='This is a Dialog with content' target='#dialog-target' visible={state.hideDialog} close={dialogClose}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="App" id='dialog-target1'>
                        <DialogComponent width='250px' target='#dialog-target1' showCloseIcon={true} header='Dialog' closeOnEscape={false}>
                            This is a dialog with header </DialogComponent>
                    </div>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-6 mt-20">
                    <div className="App" id='dialog-target'>
                        <button className='e-control e-btn' id='targetButton1' role='button' onClick={ handleClick2 }>Open</button>
                        <DialogComponent width='250px' target='#dialog-target' close={dialogClose2} header='Dialog' visible={state2.hideDialog} showCloseIcon={true} buttons={buttons}>
                            This is a Dialog with button and primary button </DialogComponent>
                    </div>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>

    );
}

export default Dialog;
