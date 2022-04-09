import { DateTime, StepLineSeries, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip } from '@syncfusion/ej2-react-charts';

let data: any[] = [];
let data2: any[] = [];
const data3 = [
    { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
    { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
    { xData: 50, yData: 40 }
];
const tooltip = { enable: true };
const majorgridLines = { width: 4, color: 'blue', dashArray: '5,5' };
const majortickLines2 = { width: 3, color: 'red' };

function chartLoad() {
    let value = 0;
    let point = {};
    for (let j = 1; j < 1090; j++) {
        value += (Math.random() * 10 - 5);
        value = value < 0 ? Math.abs(value) : value;
        point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
        data.push(point);
    }
}

const chartLoad2 = () => {
    let value = 0;
    let point = {};
    for (let j = 1; j < 1090; j++) {
        value += (Math.random() * 10 - 5);
        value = value < 0 ? Math.abs(value) : value;
        point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
        data2.push(point);
    }
}

const RangeNavigator = () => {

    chartLoad();
    chartLoad2();

    return (
        <>
            <div className='row'>
                <div className='col-md-6'>
                    <RangeNavigatorComponent></RangeNavigatorComponent>
                </div>
                <div className='col-md-6'>
                    <RangeNavigatorComponent id='charts1' valueType='DateTime' intervalType='Quarter' enableGrouping={true} value={[new Date('2001-01-01'), new Date('2002-01-01')]} dataSource={data} xName='x' yName='y'>
                        <Inject services={[DateTime]}/>
                    </RangeNavigatorComponent>
                </div>
            </div>
            <hr/>
            <div className='row mt-20'>
                <div className='col-md-6'>
                    <RangeNavigatorComponent id='charts2' valueType='DateTime' intervalType='Months' labelFormat='MMM' value={[new Date('2001-01-01'), new Date('2002-01-01')]} dataSource={data2} xName='x' yName='y'>
                        <Inject services={[DateTime]}/>
                    </RangeNavigatorComponent>
                </div>
                <div className='col-md-6'>
                    <RangeNavigatorComponent id='charts3' labelPosition='Outside' tooltip={tooltip} majorGridLines={majorgridLines} value={[25, 40]}>
                        <Inject services={[RangeTooltip, StepLineSeries]}/>
                        <RangenavigatorSeriesCollectionDirective>
                            <RangenavigatorSeriesDirective dataSource={data3} xName='xData' yName='yData'>
                            </RangenavigatorSeriesDirective>
                        </RangenavigatorSeriesCollectionDirective>
                    </RangeNavigatorComponent>
                </div>
            </div>
            <hr/>
            <div className='row'>
                <div className='col-md-6'>
                    <RangeNavigatorComponent id='charts4' labelPosition='Outside' tooltip={tooltip} majorTickLines={majortickLines2} value={[25, 40]}>
                        <Inject services={[RangeTooltip, StepLineSeries]}/>
                        <RangenavigatorSeriesCollectionDirective>
                            <RangenavigatorSeriesDirective dataSource={data3} xName='xData' yName='yData'>
                            </RangenavigatorSeriesDirective>
                        </RangenavigatorSeriesCollectionDirective>
                    </RangeNavigatorComponent>
                </div>
                <div className='col-md-6'>
                    <RangeNavigatorComponent id='charts5' labelPosition='Outside' tooltip={tooltip} majorTickLines={majortickLines2} value={[25, 40]}>
                        <Inject services={[RangeTooltip, StepLineSeries]}/>
                        <RangenavigatorSeriesCollectionDirective>
                            <RangenavigatorSeriesDirective dataSource={data3} xName='xData' yName='yData'>
                            </RangenavigatorSeriesDirective>
                        </RangenavigatorSeriesCollectionDirective>
                    </RangeNavigatorComponent>
                </div>
            </div>
        </>
    );
}

export default RangeNavigator;
