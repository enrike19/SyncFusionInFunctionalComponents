import { AutoComplete, ColorPicker, ComboBox, Inject, InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import { DateRangePicker, MultiSelect, Rte, Slider, TimePicker } from '@syncfusion/ej2-react-inplace-editor';


const Name = () => {

    const frameWorkList = ['Andrew Fuller', 'Janet Leverling', 'Laura Callahan', 'Margaret Hamilt', 'Michael Suyama', 'Nancy Davloio', 'Robert King'];
    const model = { dataSource: frameWorkList, placeholder: 'Select employee', popupHeight: '200px' };
    const url = "https://ej2services.syncfusion.com/development/web-services/api/Editor/UpdateData";

    const actionSuccess = (e: any) => {
        const newEle = document.getElementById('newValue');
        const oldEle = document.getElementById('oldValue');
        if (newEle && oldEle) {
            oldEle.textContent = newEle.textContent;
            newEle.textContent = e.value;
        }
    }

    const actionFailure = (e: any) => {
       // Handle the Error
    }

    const genderData = ['Male', 'Female'];
    const dateModel = { showTodayButton: true, placeholder: 'Select date of birth' };
    const dateValue = new Date('04/12/2018');
    const elementModel = { placeholder: 'Enter your name' };
    const genderModel = { dataSource: genderData, placeholder: 'Select gender' };

    const frameWorkList2 = ['Android', 'JavaScript', 'jQuery', 'TypeScript', 'Angular', 'React', 'Vue', 'Ionic'];
    const dateTimeValue = new Date('11/23/2018 12:30 PM');
    const dropdownModel = { dataSource: frameWorkList2, placeholder: 'Select frameworks' };
    const maskModel = { mask: '000-000-000' };
    const numericModel = { placeholder: 'Enter number' };
    const textboxModel = { placeholder: 'Enter some text' };
    const dateRangePickerValue = [new Date('11/12/2018'), new Date('11/15/2018')];
    const rteModel = { placeholder: 'Enter your content here' };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div id='container'>
                        <div className="control-group">
                            Best Employee of the year:
                            <InPlaceEditorComponent id='element' type="DropDownList" mode='Inline' value='Andrew Fuller' name='Employee' url={url} primaryKey="Employee" adaptor="UrlAdaptor" model={model} actionFailure={actionFailure} actionSuccess={actionSuccess}/>
                        </div>
                        <table style={{ 'margin': 'auto', 'width': '50%' }}>
                            <tr>
                                <td style={{ textAlign: 'left' }}>
                                    Old Value :
                                </td>
                                <td id="oldValue" style={{ textAlign: 'left' }}/>
                            </tr>
                            <tr>
                                <td style={{ textAlign: 'left' }}>
                                    New Value :
                                </td>
                                <td id="newValue" style={{ textAlign: 'left' }}>
                                    Andrew Fuller
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>


                <div className="col-md-6">
                    <div id='container'>
                        <div className="control-group">
                            <div className="e-heading">
                                <h3> Modify Basic Details </h3>
                            </div>
                            <table>
                                <tr>
                                    <td>Name</td>
                                    <td className='left'>
                                        <InPlaceEditorComponent id='element' mode='Inline' value='Andrew' model={elementModel}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td className='left'>
                                        <InPlaceEditorComponent id='dateofbirth' type="Date" mode='Inline' value={dateValue} model={dateModel}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Gender</td>
                                    <td className='left'>
                                        <InPlaceEditorComponent id='gender' type="DropDownList" mode='Inline' value='Male' model={genderModel}/>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 mt-20">
                    <div id='container'>
                        <h3> Built-in components </h3>
                        <table className="table-section">
                            <tbody>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DatePicker </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='date' mode='Inline' type='Date' value={dateValue} model={dateModel}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateTimePicker </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='dateTime' mode='Inline' type='DateTime' value={dateTimeValue} model={dateModel}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DropDownList </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='dropDowns' mode='Inline' type='DropDownList' value='Android' model={dropdownModel}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MaskedTextBox </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='masked' mode='Inline' type='Mask' value='123-345-678' model={maskModel}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> NumericTextBox </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='numeric' mode='Inline' type='Numeric' value={10} model={numericModel}/>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TextBox </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='textbox' mode='Inline' type='Text' value='Andrew' model={textboxModel}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <h3> Injectable Components </h3>
                        <table className="table-section">
                            <tbody>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> AutoComplete </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='autoComplete' mode='Inline' type='AutoComplete' value='Android' model={dropdownModel}>
                                        <Inject services={[AutoComplete]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ColorPicker </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='color' mode='Inline' type='Color' value='#81aefd'>
                                        <Inject services={[ColorPicker]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> ComboBox </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='comboBox' mode='Inline' type='ComboBox' value='Android' model={dropdownModel}>
                                        <Inject services={[ComboBox]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> DateRangePicker </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='dateRange' mode='Inline' type='DateRange' value={dateRangePickerValue} model={dateModel}>
                                        <Inject services={[DateRangePicker]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> MultiSelect </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='multiSelect' mode='Inline' type='MultiSelect' value='Android' model={dropdownModel}>
                                        <Inject services={[MultiSelect]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> RTE </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='rte' mode='Inline' type='RTE' value='<p>Enter your content here</p>' model={rteModel}>
                                        <Inject services={[Rte]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> Slider </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='slider' mode='Inline' type='Slider' value={20}>
                                        <Inject services={[Slider]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6 control-title"> TimePicker </td>
                                <td className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <InPlaceEditorComponent id='time' mode='Inline' type='Time' value={dateValue} model={dateModel}>
                                        <Inject services={[TimePicker]}/>
                                    </InPlaceEditorComponent>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Name;
