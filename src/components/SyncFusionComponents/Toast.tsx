import { ToastComponent  } from '@syncfusion/ej2-react-notifications';

const Toast = () => {

    let toastInstance: any;

    const toastCreated = (): void => {
        toastInstance.show();
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <ToastComponent ref={toast => toastInstance = toast!} title="Sample Toast Title" content="Sample Toast Content" created={toastCreated} />
                </div>
                <div className="col-md-6">
                    <b></b>
                </div>
            </div>
        </div>
    );
}

export default Toast;
