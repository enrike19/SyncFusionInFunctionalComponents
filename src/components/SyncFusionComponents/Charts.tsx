import {
    Category,
    ChartComponent,
    ColumnSeries,
    DataLabel,
    Inject,
    Legend,
    LineSeries,
    SeriesCollectionDirective,
    SeriesDirective,
    Tooltip,
    StripLine,
    DateTime,
    AxesDirective, RowDirective, AxisDirective, RowsDirective, ColumnsDirective, ColumnDirective, StepLineSeries,
} from '@syncfusion/ej2-react-charts';


let chartInstance: any;

function clickHandler() {
    chartInstance.print();
}

function clickHandler2() {
    alert();
    chartInstance.exportModule.export('PNG', 'sample');
}

const Charts = () => {
    const data = [
        {month: 'Jan', sales: 35}, {month: 'Feb', sales: 28},
        {month: 'Mar', sales: 34}, {month: 'Apr', sales: 32},
        {month: 'May', sales: 40}, {month: 'Jun', sales: 32},
        {month: 'Jul', sales: 35}, {month: 'Aug', sales: 55},
        {month: 'Sep', sales: 38}, {month: 'Oct', sales: 30},
        {month: 'Nov', sales: 25}, {month: 'Dec', sales: 32}
    ];
    const data2 = [
        {month: 'Jan', sales: 35}, {month: 'Feb', sales: null},
        {month: 'Mar', sales: 34}, {month: 'Apr', sales: 32},
        {month: 'May', sales: 40}, {month: 'Jun', sales: undefined},
        {month: 'Jul', sales: 35}, {month: 'Aug', sales: 55},
        {month: 'Sep', sales: 38}, {month: 'Oct', sales: 30},
        {month: 'Nov', sales: 25}, {month: 'Dec', sales: 32}
    ];
    const data3 = [
        { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
        { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
        { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
        { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
    ];
    const data4 = [
        { country: "USA", gold: 50, silver: 70, bronze: 45 },
        { country: "China", gold: 40, silver: 60, bronze: 55 },
        { country: "Japan", gold: 70, silver: 60, bronze: 50 },
        { country: "Australia", gold: 60, silver: 56, bronze: 40 },
        { country: "France", gold: 50, silver: 45, bronze: 35 },
        { country: "Germany", gold: 40, silver: 30, bronze: 22 },
        { country: "Italy", gold: 40, silver: 35, bronze: 37 },
        { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
    ];
    const data5 = [
        { x: new Date(1975, 0, 1), y: 16, y1: 10, y2: 4.5 },
        { x: new Date(1980, 0, 1), y: 12.5, y1: 7.5, y2: 5 },
        { x: new Date(1985, 0, 1), y: 19, y1: 11, y2: 6.5 },
        { x: new Date(1990, 0, 1), y: 14.4, y1: 7, y2: 4.4 },
        { x: new Date(1995, 0, 1), y: 11.5, y1: 8, y2: 5 },
        { x: new Date(2000, 0, 1), y: 14, y1: 6, y2: 1.5 },
        { x: new Date(2005, 0, 1), y: 10, y1: 3.5, y2: 2.5 },
        { x: new Date(2010, 0, 1), y: 16, y1: 7, y2: 3.7 }
    ];
    const chartData = [
        {month: 'Jan', sales: 35, sales1: 28}, {month: 'Feb', sales: 28, sales1: 35},
        {month: 'Mar', sales: 34, sales1: 32}, {month: 'Apr', sales: 32, sales1: 34},
        {month: 'May', sales: 40, sales1: 32}, {month: 'Jun', sales: 32, sales1: 40},
        {month: 'Jul', sales: 35, sales1: 55}, {month: 'Aug', sales: 55, sales1: 35},
        {month: 'Sep', sales: 38, sales1: 30}, {month: 'Oct', sales: 30, sales1: 38},
        {month: 'Nov', sales: 25, sales1: 32}, {month: 'Dec', sales: 32, sales1: 25}
    ];
    const chartData2 = [{x: 1, y: 5}, {x: 2, y: 39}, {x: 3, y: 21}, {x: 4, y: 51}, {x: 5, y: 30},
        {x: 6, y: 25}, {x: 7, y: 10}, {x: 8, y: 40}, {x: 9, y: 50}, {x: 10, y: 20}];

    const chartData3 = [{x: new Date(2000, 0, 1), y: 10}, {x: new Date(2002, 0, 1), y: 40},
        {x: new Date(2004, 0, 1), y: 20}, {x: new Date(2006, 0, 1), y: 50},
        {x: new Date(2008, 0, 1), y: 15}, {x: new Date(2010, 0, 1), y: 30}];

    const tooltip = {enable: true, shared: false};
    const primaryyAxis = {labelFormat: '${value}K'};
    const legendSettings = {visible: true};
    const marker = {dataLabel: {visible: true}};
    const palette = ["#E94649", "#F6B53F", "#6FAAB0", "#C4C24A"];

    return (
        <>
            <div className='row'>
                <div className='col-md-12'>
                    <b>Chart with Data</b>
                    <ChartComponent id="charts" primaryXAxis={{valueType: 'Category'}} title='Sales Analysis'>
                        <Inject services={[ColumnSeries, Tooltip, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <b>Tooltips</b>
                    <ChartComponent id="charts2" primaryXAxis={{valueType: 'Category'}} legendSettings={legendSettings}
                                    primaryYAxis={primaryyAxis} tooltip={tooltip}>
                        <Inject services={[ColumnSeries, DataLabel, Tooltip, Legend, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='month' yName='sales' name='Sales'
                                             marker={marker}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>

            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <b>Bar (local Data)</b>
                    <ChartComponent id='charts3' primaryXAxis={{valueType: 'Category'}}>
                        <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales'/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <b>Double Bar (local Data)</b>
                    <ChartComponent id='charts4' primaryXAxis={{valueType: 'Category'}} dataSource={chartData}>
                        <Inject services={[ColumnSeries, Legend, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective xName='month' type='Column' yName='sales'/>
                            <SeriesDirective xName='month' type='Column' yName='sales1'/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Two Sequences (local Data)</b>
                    <ChartComponent id='charts5' primaryXAxis={{valueType: 'Category'}}>
                        <Inject services={[ColumnSeries, LineSeries, ColumnSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data2} xName='month' type='Column' yName='sales' name='Sales'
                                             emptyPointSettings={{mode: 'Average', fill: 'pink'}}/>
                            <SeriesDirective dataSource={data2} xName='month' type='Line' yName='sales' name='Sales'
                                             emptyPointSettings={{mode: 'Zero', fill: 'green'}}/>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Stripline</b>
                    <ChartComponent id='charts6' primaryXAxis={{
                        stripLines: [{
                            start: 1,
                            size: 1,
                            isRepeat: true,
                            repeatEvery: 2,
                            color: 'rgba(167,169,171, 0.3)'
                        }]
                    }}>
                        <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={chartData2} xName='x' yName='y' type='Line' marker={marker}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Stripline especific columns</b>
                    <ChartComponent id='charts7' primaryYAxis={{minimum: 0, maximum: 60, interval: 10}}
                                    primaryXAxis={{
                                        valueType: 'DateTime',
                                        intervalType: 'Years',
                                        stripLines: [{
                                            start: new Date(2002, 0, 1),
                                            size: 2,
                                            sizeType: 'Years',
                                            color: 'rgba(167,169,171, 0.3)'
                                        }]
                                    }}>
                        <Inject services={[ColumnSeries, Legend, LineSeries, Tooltip, DataLabel, DateTime, StripLine]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={chartData3} xName='x' yName='y' type='Line' marker={marker}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Segments</b>
                    <ChartComponent id='charts8' primaryYAxis={{ stripLines: [{ start: 20, end: 40, isSegmented: true, segmentStart: 2, segmentEnd: 4,color: 'rgba(167,169,171, 0.3)' } ]}}>
                        <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category, StripLine]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={chartData2} xName='x' yName='y' type='Line' marker={marker}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Multiple Panes</b>
                    <ChartComponent id='charts9' primaryXAxis={ { valueType: 'Category', title: 'Months', interval: 1 }} primaryYAxis={{
                        title: 'Temperature (Fahrenheit)', minimum: 0, maximum: 90, interval: 20,
                        lineStyle: { width: 0 }, labelFormat: '{value}°F'
                    }} title='Weather Condition'>
                        <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
                        <AxesDirective>
                            <AxisDirective rowIndex={1} name='yAxis1' opposedPosition={true} title='Temperature (Celsius)' labelFormat='{value}°C' minimum={24} maximum={36} interval={2} majorGridLines={{ width: 0 }} lineStyle={{ width: 0 }}>
                            </AxisDirective>
                        </AxesDirective>
                        <RowsDirective>
                            <RowDirective height='50%'></RowDirective>
                            <RowDirective height='50%'></RowDirective>
                        </RowsDirective>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data3} xName='x' yName='y' name='Germany' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data3} xName='x' yName='y1' name='Japan' type='Line' marker={{ visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } }} yAxisName='yAxis1'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Multiple Panes</b>
                    <ChartComponent id='charts10' primaryXAxis={ { valueType: 'Category', title: 'Months', interval: 1 }} primaryYAxis={ {
                        title: 'Temperature (Fahrenheit)', minimum: 0, maximum: 90, interval: 20,
                        lineStyle: { width: 0 }, labelFormat: '{value}°F'
                    }} title='Weather Condition'>
                        <Inject services={[ColumnSeries, LineSeries, Legend, Tooltip, DataLabel, Category]}/>
                        <AxesDirective>
                            <AxisDirective columnIndex={1} name='xAxis1' opposedPosition={true} valueType='Category' majorGridLines={{ width: 0 }} lineStyle={{ width: 0 }}>
                            </AxisDirective>
                        </AxesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width='50%'></ColumnDirective>
                            <ColumnDirective width='50%'></ColumnDirective>
                        </ColumnsDirective>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data3} xName='x' yName='y' name='Germany' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data3} xName='x' yName='y1' name='Japan' type='Line' marker={{ visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } }} xAxisName='xAxis1'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Export function</b>
                    <button value='print' onClick={clickHandler}>Print PDF</button>
                    <button value='print' onClick={clickHandler2}>Export PNG</button>
                    <ChartComponent id='charts11' ref={chart => chartInstance = chart} primaryXAxis={ { valueType: 'Category' }}>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} xName='month' yName='sales' type='Column' name='Sales'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Multicolor</b>
                    <ChartComponent id='charts12' primaryXAxis={{ valueType: 'Category', title: 'Countries' }} primaryYAxis={{ minimum: 0, maximum: 80, interval: 20, title: 'Medals' }} palettes={palette} title='Olympic Medals'>
                        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data4} xName='country' yName='gold' name='Gold' legendShape='Circle' type='Column'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data4} xName='country' yName='silver' type='Column' name='Silver' legendShape='Rectangle'>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data4} xName='country' yName='bronze' name='Bronze' legendShape='Rectangle' type='Column'>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-12'>
                    <b>Multilines</b>
                    <ChartComponent id='charts13' primaryXAxis={{ title: 'Years', lineStyle: { width: 0 }, labelFormat: 'y',
                        intervalType: 'Years', valueType: 'DateTime', edgeLabelPlacement: 'Shift' }} primaryYAxis={{ title: 'Percentage (%)', labelFormat: '{value}%',
                        minimum: 0, maximum: 20, interval: 2 }} title='Unemployment Rates 1975-2010' titleStyle={{ fontFamily: "Arial", fontStyle: 'italic', fontWeight: 'regular',
                        color: "#E27F2D", size: '23px' }}>
                        <Inject services={[StepLineSeries, Legend, Tooltip, DataLabel, DateTime]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data5} xName='x' yName='y' name='China' width={2} type='StepLine' marker={{ visible: true, width: 10, height: 10 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data5} xName='x' yName='y1' name='Australia' width={2} type='StepLine' marker={{ visible: true, width: 10, height: 10 }}>
                            </SeriesDirective>
                            <SeriesDirective dataSource={data5} xName='x' yName='y2' name='Japan' width={2} type='StepLine' marker={{ visible: true, width: 10, height: 10 }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </>
    );
}
export default Charts;
