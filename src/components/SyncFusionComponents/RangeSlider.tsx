import {
    SliderComponent,
    SliderTickEventArgs,
    SliderTooltipEventArgs,
    TicksDataModel,
    TooltipDataModel
} from '@syncfusion/ej2-react-inputs';

const RangeSlider = () => {

    const  tooltip: Object = { placement: 'After', isVisible: true, showOn: 'Always' };

    const tooltip2: TooltipDataModel = { placement: "Before", isVisible: true, showOn: "Always" };
    const value2 = 30;
        // Slider ticks customization
    const  ticks2: TicksDataModel = {
            placement: "After",
            largeStep: 20,
            smallStep: 10,
            showSmallTicks: true
        };

    const tooltip3: TooltipDataModel = { placement: "Before", isVisible: true };
    const value3 = 2;
    // Slider ticks customization
    const ticks3: TicksDataModel = { placement: "After", largeStep: 1 };

    const renderingTicksHandler = (args: SliderTickEventArgs) => {
// Weekdays Array
        let daysArr: string[] = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday"
        ];
// Customizing each ticks text into weeksdays
        args.text = daysArr[parseFloat(args.value.toString())];
    }

    const tooltipChangeHandler = (args: SliderTooltipEventArgs) => {
// Customizing tooltip to display the Day (in numeric) of the week
        args.text = "Day " + (Number(args.value) + 1).toString();
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <div className='wrap'>
                        <div className="sliderwrap">
                            <SliderComponent id='default' value={30} />
                        </div>
                    </div>

                    <b>Vertical</b>
                    <div className='wrap'>
                        <SliderComponent id='slider' orientation='Vertical' value={30} />
                    </div>
                </div>
                <div className="col-md-6">
                    <b></b>
                    <div className='wrap'>
                        <div className="sliderwrap">
                            <div className="labeltext">Default</div>
                            <SliderComponent id='default' value={30}/>
                        </div>
                        <div className="sliderwrap">
                            <div className="labeltext">MinRange</div>
                            <SliderComponent id='minrange' type='MinRange' value={30} />
                        </div>
                        <div className="sliderwrap">
                            <div className="labeltext">Range</div>
                            <SliderComponent id='range' type='Range' value={[30, 70]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Tooltip</b>
                    <div id='container'>
                        <div className='wrap'>
                            <SliderComponent id='slider' type="MinRange"  tooltip={tooltip}  value={30} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <b>Buttons</b>
                    <div id='container'>
                        <div className='wrap'>
                            <SliderComponent id='slider' showButtons={true} type='Range' value={[30, 70]} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Trick</b>
                    <div id="container">
                        <div className="wrap">
                            <SliderComponent id="slider" value={value2} tooltip={tooltip2} ticks={ticks2} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <b>Trick 2</b>
                    <div id="container">
                        <div className="wrap">
                            <SliderComponent
                                id="slider"
                                min={0}
                                max={6}
                                step={1}
                                value={value3}
                                tooltip={tooltip3}
                                ticks={ticks3}
                                tooltipChange={tooltipChangeHandler}
                                renderingTicks={renderingTicksHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;
