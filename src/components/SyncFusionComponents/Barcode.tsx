import {
    BarcodeGeneratorComponent,
    DataMatrixGeneratorComponent,
    QRCodeGeneratorComponent
} from '@syncfusion/ej2-react-barcode-generator';

const Barcode = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <BarcodeGeneratorComponent id="barcode" width={"200px"} height={"150px"} type='Codabar' value='123456789'></BarcodeGeneratorComponent>
            </div>

            <div className="col-md-4">
                <QRCodeGeneratorComponent id="barcode" width={"200px"} height={"150px"} value='Syncfusion'></QRCodeGeneratorComponent>
            </div>

            <div className="col-md-4">
                <DataMatrixGeneratorComponent id="barcode" width={"200px"} height={"150px"} value='Syncfusion'></DataMatrixGeneratorComponent>
            </div>

        </div>
    );
}

export default Barcode;
