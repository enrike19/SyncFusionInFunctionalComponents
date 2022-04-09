import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

const NumericTextbox = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <b>Default</b>
                    <NumericTextBoxComponent value={10} />
                </div>
                <div className="col-md-4">
                    <b>Range Validation</b>
                    <NumericTextBoxComponent min={10} max={20} value={16} step={2} />
                </div>
                <div className="col-md-4">
                    <b>Format</b>
                    <NumericTextBoxComponent format='c2' value={10} />
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Presicion</b>
                    <NumericTextBoxComponent validateDecimalOnType={true} decimals={3} format='n3' value={10} placeholder='ValidateDecimalOnType Enabled' floatLabelType='Auto' />
                </div>
                <div className="col-md-4">
                    <b>Custom Formats</b>
                    <NumericTextBoxComponent format='###.##' value={10} placeholder='Custom format string #' floatLabelType='Auto'  />
                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>
    );
}

export default NumericTextbox;
