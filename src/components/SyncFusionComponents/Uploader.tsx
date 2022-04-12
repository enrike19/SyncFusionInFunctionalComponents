import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

import './Common/css/Uploader.css';
import {ToastComponent} from "@syncfusion/ej2-react-notifications";

const Uploader = () => {

    let uploadObj: UploaderComponent;
    let  dropAreaRef: HTMLElement;

    const onCreated = (): void => {
        uploadObj.dropArea = dropAreaRef;
        uploadObj.dataBind();
    }

    const path: object = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }

    let template = '';
    let toastInstance: any;
    const position = { X: 'Right', Y: 'Top' };

    const onUploadSuccess = (args: any): void => {
        if (args.operation === 'upload') {
            toastInstance.template = 'File uploaded successfully';
            toastInstance.show();
        }
        if (args.operation === 'remove') {
            toastInstance.template = 'File removed successfully';
            toastInstance.show();
        }
    }
    const onUploadFailure = (args: any): void => {
        template = 'An error occurs...';
        toastInstance.template = template;
        toastInstance.show();
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <UploaderComponent  id="uploader" />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12 mt-40">
                    <b>Drag Area</b><br/>
                        <div id='droparea' ref={dropAreaEle => dropAreaRef = dropAreaEle!}>
                            Drop files here to upload
                        </div>
                        <div id='uploadfile' >
                            <UploaderComponent  id="uploader2" autoUpload={false}  ref = { upload => uploadObj = upload !} asyncSettings={path} created={onCreated} />
                        </div>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12 mt-40">
                    <b>Handle Success and Error</b><br/>
                    <div id='droparea' ref={dropAreaEle => dropAreaRef = dropAreaEle!}>
                        Drop files here to upload
                    </div>
                    <div id='uploadfile' >
                        <UploaderComponent autoUpload={false} asyncSettings={path} success={onUploadSuccess} failure={onUploadFailure}/>
                    </div>
                </div>
            </div>

            <ToastComponent id='template_toast' ref={toast => toastInstance = toast} template={template} position={position} extendedTimeout={0} timeOut={3000} />
        </div>
    );
}

export default Uploader;
