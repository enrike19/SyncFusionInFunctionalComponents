import { DetailsView, FileManagerComponent, NavigationPane, Toolbar, Inject } from '@syncfusion/ej2-react-filemanager';

const FileManager = () => {
    const hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="control-section">
                        <FileManagerComponent id="file" ajaxSettings={{
                            url: hostUrl + "api/FileManager/FileOperations"
                        }}/>
                    </div>
                </div>
                <div className="col-md-12 mt-20">
                    <div className="control-section">
                        <FileManagerComponent id="file2" view="LargeIcons" ajaxSettings={{
                            getImageUrl: hostUrl + "api/FileManager/GetImage",
                            url: hostUrl + "api/FileManager/FileOperations"
                        }}>
                            <Inject services={[NavigationPane, DetailsView, Toolbar]}/>
                        </FileManagerComponent>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default FileManager;
