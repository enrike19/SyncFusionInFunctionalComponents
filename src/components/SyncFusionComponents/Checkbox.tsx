import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

const Checkbox = () => {
    return (
        <>
            <div className="mt-20"></div>
            <div className='row '>
                <div className='col-md-3'>
                    <b>Default example</b><br/>
                    <CheckBoxComponent label="Default"/>
                </div>
                <div className='col-md-3'>
                    <b>States </b><br/>
                    <ul>
                        <li><CheckBoxComponent label="Checked State" checked={true}/></li>
                        <li><CheckBoxComponent label="Unchecked State"/></li>
                        <li><CheckBoxComponent label="Indeterminate State" indeterminate={true}/></li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <b>Left/Right </b><br/>
                    <ul>
                        <li><CheckBoxComponent label="Left Side Label" labelPosition="Before"/></li>
                        <li><CheckBoxComponent label="Right Side Label" checked={true}/></li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <b>Small/Big </b><br/>
                    <ul>
                        <li><CheckBoxComponent label="Small" cssClass="e-small"/></li>
                        <li><CheckBoxComponent label="Default"/></li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
                <div className='col-md-2'></div>
            </div>
        </>
    );
}

export default Checkbox;
