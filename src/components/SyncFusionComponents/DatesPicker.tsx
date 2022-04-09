import {
    DatePickerComponent,
    DateRangePickerComponent,
    DateTimePickerComponent,
    Inject,
    MaskedDateTime
} from '@syncfusion/ej2-react-calendars';


const DatesPicker = () => {

const dateValue: Date = new Date('05/11/2017');
const minDate: Date = new Date('05/09/2017');
const maxDate: Date = new Date('05/15/2017');

    return (
        <div className="container">
            <h5 className={"text-center"}> DatePicker Examples</h5>
            <div className={"row"}>
                <div className="col-md-3">
                    <b>Default</b><br/>
                    <DatePickerComponent id="datepicker1" placeholder="Enter date"/>
                </div>
                <div className="col-md-3">
                    <b>Max/Min Date</b><br/>
                    <DatePickerComponent id="datepicker2" value={dateValue} min={minDate} max={maxDate} />

                </div>
                <div className="col-md-3">
                    <b>Format Date</b><br/>
                    <DatePickerComponent id="datepicker3"  value={dateValue} format='yyyy-MM-dd' placeholder='Enter date' />
                </div>
                <div className="col-md-3">
                    <b>Mask</b><br/>
                    <DatePickerComponent enableMask={true}><Inject services={[MaskedDateTime]} /></DatePickerComponent>
                </div>
            </div>

            <h5 className={"text-center mt-20"}> RangeDatePicker Examples</h5>
            <div className={"row"}>
                <div className="col-md-4">
                    <b>Default</b><br/>
                    <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' />
                </div>
                <div className="col-md-4">
                    <b>Max/Min Date</b><br/>
                    <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' startDate={minDate} endDate={maxDate} />

                </div>
                <div className="col-md-4">
                    <b>Format Date</b><br/>
                    <DateRangePickerComponent id="daterangepicker" placeholder='Select a range' min={minDate} max={maxDate} />
                </div>
            </div>

            <h5 className={"text-center mt-20"}> DateTimePicker Examples</h5>
            <div className={"row"}>
                <div className="col-md-4">
                    <b>Default</b><br/>
                    <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time"/>;
                </div>
                <div className="col-md-4">
                    <b>Max/Min Time</b><br/>
                    <DateTimePickerComponent id="datetimepicker" min={minDate} max={maxDate} />

                </div>
                <div className="col-md-4">
                    <b>Format Time</b><br/>
                    <DateTimePickerComponent id="datetimepicker" value={dateValue} min={minDate} strictMode={true} max={maxDate} />
                </div>
            </div>
        </div>


    );
}

export default DatesPicker;
