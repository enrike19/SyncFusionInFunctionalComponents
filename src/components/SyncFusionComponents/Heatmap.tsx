import {
    HeatMapComponent,
    Legend,
    Tooltip,
    Inject,
    ITooltipEventArgs,
    ILoadedEventArgs, HeatMapTheme, Adaptor
} from '@syncfusion/ej2-react-heatmap';
import calendarDataSource from './Common/DataLocal/Heatmap';
import { Internationalization } from "@syncfusion/ej2-base";
const Heatmap = () => {

    console.log(calendarDataSource.calendarDataSource);

    const heatmapData: any[] = [
        [52, 65, 67, 45, 37, 52, 32, 76, 60, 64, 82, 91],
        [68, 52, 63, 51, 30, 51, 51, 81, 70, 60, 88, 80],
        [60, 50, 42, 53, 66, 70, 41, 69, 76, 74, 86, 97],
        [66, 64, 46, 40, 47, 41, 45, 76, 83, 69, 92, 84],
        [65, 42, 58, 32, 36, 44, 49, 79, 83, 69, 83, 93],
        [54, 46, 61, 46, 40, 39, 41, 69, 61, 84, 84, 87],
        [48, 46, 61, 47, 49, 41, 41, 67, 78, 83, 98, 87],
        [69, 52, 41, 44, 41, 52, 46, 71, 63, 84, 83, 91],
        [50, 59, 44, 43, 27, 42, 26, 64, 76, 65, 81, 86],
        [47, 49, 66, 53, 50, 34, 31, 79, 78, 79, 89, 95],
        [61, 40, 62, 26, 34, 54, 56, 74, 83, 78, 95, 98]
    ];

    const heatmapData2: any[] = [
        [73, 39, 26, 39, 94, 0],
        [93, 58, 53, 38, 26, 68],
        [99, 28, 22, 4, 66, 90],
        [14, 26, 97, 69, 69, 3],
        [7, 46, 47, 47, 88, 6],
        [41, 55, 73, 23, 3, 79],
        [56, 69, 21, 86, 3, 33],
        [45, 7, 53, 81, 95, 79],
        [60, 77, 74, 68, 88, 51],
        [25, 25, 10, 12, 78, 14],
        [25, 56, 55, 58, 12, 82],
        [74, 33, 88, 23, 86, 59]
    ];

    const heatmapData3 = [
        [0, 0, 10.75],
        [0, 1, 14.5],
        [0, 2, 25.5],
        [0, 3, 39.5],
        [0, 4, 59.75],
        [0, 5, 35.5],
        [0, 6, 75.5],
        [1, 0, 20.75],
        [1, 1, 35.5],
        [1, 2, 29.5],
        [1, 3, 75.5],
        [1, 4, 80],
        [1, 5, 65],
        [1, 6, 85],
        [2, 0, 6],
        [2, 1, 18.5],
        [2, 2, 30.05],
        [2, 3, 35.5],
        [2, 4, 40.75],
        [2, 5, 50.75],
        [2, 6, 65],
        [3, 0, 30.5],
        [3, 1, 20.5],
        [3, 2, 45.3],
        [3, 3, 50],
        [3, 4, 55],
        [3, 5, 85.8],
        [3, 6, 87.5],
        [4, 0, 10.5],
        [4, 1, 20.75],
        [4, 2, 35.5],
        [4, 3, 35.5],
        [4, 4, 45.5],
        [4, 5, 65],
        [4, 6, 75.5],
        [5, 0, 45.5],
        [5, 1, 20.75],
        [5, 2, 45.5],
        [5, 3, 50.75],
        [5, 4, 79.3],
        [5, 5, 84.2],
        [5, 6, 87.36],
        [6, 0, 26.82],
        [6, 1, 70],
        [6, 2, 75],
        [6, 3, 79.5],
        [6, 4, 88.5],
        [6, 5, 89.5],
        [6, 6, 91.75],
        [7, 0, 15.75],
        [7, 1, 20.75],
        [7, 2, 25.5],
        [7, 3, 42.35],
        [7, 4, 45.15],
        [7, 5, 76.5],
        [7, 6, 80.5],
        [8, 0, 1.98],
        [8, 1, 15.23],
        [8, 2, 43],
        [8, 3, 49],
        [8, 4, 63.8],
        [8, 5, 67.97],
        [8, 6, 70.52],
        [9, 0, 14.31],
        [9, 1, 42.87],
        [9, 2, 77.28],
        [9, 3, 77.82],
        [9, 4, 81.44],
        [9, 5, 81.92],
        [9, 6, 83.75],
        [10, 0, 25.5],
        [10, 1, 35.5],
        [10, 2, 40.5],
        [10, 3, 45.05],
        [10, 4, 50.5],
        [10, 5, 75.5],
        [10, 6, 90.58]
    ];

    const tooltipTemplate = (args: ITooltipEventArgs): void => {
        let intl: Internationalization = new Internationalization();
    let format: Function = intl.getDateFormat({ format: 'EEE MMM dd, yyyy' });
    let newDate: Date = new Date(args.xValue as Date);
    let date: Date = new Date(newDate.getTime());
    let axisLabel: string[] = args.heatmap.axisCollections[1].axisLabels;
    let index: number = axisLabel.indexOf(args.yLabel);
    (date).setDate((date).getDate() + index);
    let value: Date = format(date);
    args.content = [(args.value === 0 ? 'No' : args.value) + ' ' + 'contributions' + '<br>' + value];
};
    const load = (args: ILoadedEventArgs): void => {
        // eslint-disable-next-line no-restricted-globals
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.heatmap.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark") as HeatMapTheme;
};

    const tooltipTemplate2 = (args: any) => {
        args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' %'];
    }


    const tooltipTemplate3 = (args: any) => {
        args.content = [
            'Year ' +
            ' : ' +
            args.xLabel +
            '<br/>' +
            'Months ' +
            ' : ' +
            args.yLabel +
            '<br/>' +
            'Accidents ' +
            ' : ' +
            args.value[0].bubbleData +
            '<br/>' +
            'Fatalities ' +
            ' : ' +
            args.value[1].bubbleData
        ];
    }

    const heatmapData4 = [
        [[4, 39], [3, 8], [1, 3], [1, 10], [4, 4], [2, 15]],
        [[4, 28], [5, 92], [5, 73], [3, 1], [3, 4], [4, 126]],
        [[4, 45], [5, 152], [0, 44], [4, 54], [5, 243], [2, 45]]
    ];




    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <HeatMapComponent id='heatmap'
                                      titleSettings = { {
                                          text: 'Product wise Monthly sales revenue for a e-commerce website',
                                          textStyle: {
                                              size: '15px',
                                              fontWeight: '500',
                                              fontStyle: 'Normal',
                                              fontFamily: 'Segoe UI'
                                          }
                                      } }
                                      xAxis = { {
                                          labels: ['Laptop', 'Mobile', 'Gaming', 'Cosmetics', 'Fragnance', 'Watches', 'Handbags', 'Apparels',
                                              'Kitchenware', 'Furniture', 'Home Decor'],
                                          multiLevelLabels: [
                                              {
                                                  textStyle: {
                                                      color: 'black',
                                                      fontWeight: 'Bold'
                                                  },
                                                  categories: [
                                                      { start: 0, end: 2, text: 'Electronics', },
                                                      { start: 3, end: 4, text: 'Beauty and personal care', maximumTextWidth: 50},
                                                      { start: 5, end: 7, text: 'Fashion', },
                                                      { start: 8, end: 10, text: 'Household' },
                                                  ]
                                              },
                                          ]
                                      } }
                                      yAxis = { {
                                          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                          multiLevelLabels: [
                                              {
                                                  categories: [
                                                      { start: 0, end: 2, text: 'Q1' },
                                                      { start: 3, end: 5, text: 'Q2' },
                                                      { start: 6, end: 8, text: 'Q3' },
                                                      { start: 9, end: 11, text: 'Q4' }
                                                  ]
                                              },
                                          ]
                                      } }
                                      paletteSettings = { {
                                          palette: [
                                              { color: '#F0C27B' },
                                              { color: '#4B1248' }
                                          ],
                                      } }
                                      dataSource={heatmapData}>
                        <Inject services={[Tooltip]} />
                    </HeatMapComponent>
                </div>

            </div>
            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <div className='control-pane'>

                        <div className='control-section'>
                            <HeatMapComponent id='heatmap-container'
                                              titleSettings={{
                                                  text: 'Annual Summary of User Activities in GitLab',
                                                  textStyle: {
                                                      size: '15px',
                                                      fontWeight: '500',
                                                      fontStyle: 'Normal',
                                                      fontFamily: 'Segoe UI'
                                                  }
                                              }}
                                              height={'300px'}
                                              xAxis={{
                                                  opposedPosition: true,
                                                  valueType: 'DateTime',
                                                  minimum: new Date(2017, 6, 23),
                                                  maximum: new Date(2018, 6, 30),
                                                  intervalType: 'Days',
                                                  showLabelOn: 'Months',
                                                  labelFormat: 'MMM',
                                                  increment: 7,
                                                  labelIntersectAction: 'Rotate45',
                                              }}
                                              yAxis={{
                                                  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                                                  isInversed: true,
                                              }}
                                              dataSource={calendarDataSource.calendarDataSource}
                                              cellSettings={{
                                                  showLabel: false,
                                                  border: { color: 'white' }
                                              }}
                                              tooltipRender={tooltipTemplate}
                                              paletteSettings={{
                                                  palette: [{ value: 0, color: 'rgb(238,238,238)', label: 'no contributions' },
                                                      { value: 1, color: 'rgb(172, 213, 242)', label: '1-15 contributions' },
                                                      { value: 16, color: 'rgb(127, 168, 201)', label: '16-31 contributions' },
                                                      { value: 32, color: 'rgb(82, 123, 160)', label: '31-49 contributions' },
                                                      { value: 50, color: 'rgb(37, 78, 119)', label: '50+ contributions' },
                                                  ],
                                                  type: 'Fixed',
                                                  emptyPointColor: 'white'
                                              }}
                                              load={load}
                                              legendSettings={{
                                                  position: 'Bottom',
                                                  width: '20%',
                                                  alignment: 'Near',
                                                  showLabel: true,
                                                  labelDisplayType: 'None',
                                                  enableSmartLegend: true
                                              }}>
                                <Inject services={[Legend, Tooltip]} />
                            </HeatMapComponent>
                        </div>
                    </div >
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <HeatMapComponent id='heatmap' dataSource={heatmapData2}>
                        <Inject services={[Legend, Tooltip]}/>
                    </HeatMapComponent>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <HeatMapComponent id="heatmap" titleSettings={{
                        text: 'Percentage of Individuals Using Internet by Country',
                        textStyle: {
                            size: '15px',
                            fontWeight: '500',
                            fontStyle: 'Normal',
                            fontFamily: 'Segoe UI'
                        }
                    }} xAxis={{
                        labels: [
                            'China',
                            'Australia',
                            'Mexico',
                            'Canada',
                            'Brazil',
                            'USA',
                            'UK',
                            'Germany',
                            'Russia',
                            'France',
                            'Japan'
                        ]
                    }} yAxis={{
                        labels: ['2000', '2005', '2010', '2011', '2012', '2013', '2014']
                    }} dataSource={heatmapData3} dataSourceSettings={{
                        isJsonData: false,
                        adaptorType: 'Cell'
                    }} paletteSettings={{
                        palette: [{ color: '#3498DB' }, { color: '#2C3E50' }]
                    }} cellSettings={{
                        border: {
                            width: 0
                        },
                        textStyle: {
                            color: 'white'
                        },
                        format: '{value} %'
                    }} legendSettings={{
                        visible: false
                    }} tooltipRender={tooltipTemplate}>
                        <Inject services={[Legend, Tooltip, Adaptor]}/>
                    </HeatMapComponent>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">

                    <HeatMapComponent id="heatmap2" titleSettings={{
                        text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
                        textStyle: {
                            size: '15px',
                            fontWeight: '500',
                            fontStyle: 'Normal',
                            fontFamily: 'Segoe UI'
                        }
                    }} xAxis={{
                        labels: ['2017', '2016', '2015']
                    }} yAxis={{
                        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
                    }} paletteSettings={{
                        palette: [{ color: '#C06C84' }, { color: '#6C5B7B' }, { color: '#355C7D' }],
                        type: 'Gradient'
                    }} legendSettings={{
                        visible: true
                    }} cellSettings={{
                        border: {
                            width: 1
                        },
                        tileType: 'Bubble',
                        bubbleType: 'SizeAndColor'
                    }} tooltipRender={tooltipTemplate3} dataSource={heatmapData4}>
                        <Inject services={[Legend, Adaptor, Tooltip]}/>
                    </HeatMapComponent>

                </div>
            </div>
        </div>
    );
}

export default Heatmap;
