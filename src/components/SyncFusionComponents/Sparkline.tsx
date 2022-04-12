import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const Sparkline = () => {
    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <SparklineComponent id='sparkline' height='100px' width='70%' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]} xName='xval' yName='yval'>
                    </SparklineComponent>
                </div>
                <div className="col-md-6">
                    <b>Background</b>
                    <SparklineComponent id='sparkline2' height='100px' width='70%' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]} xName='xval' yName='yval' type='Area'>
                    </SparklineComponent>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Tooltips</b>
                    <SparklineComponent id='sparkline3' height='100px' width='70%' tooltipSettings={{
                        visible: true, format: '${xval} : ${yval}',
                    }} dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]} xName='xval' yName='yval' type='Area'>
                        <Inject services={[SparklineTooltip]}/>
                    </SparklineComponent>

                </div>
                <div className="col-md-6">
                    <b>Dimensions</b>
                    <SparklineComponent id='sparkline4' height='350px' width='350px' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]}
                        // Assign the dataSource values to series of sparkline 'xName and yName'
                                        xName='xval' yName='yval'>
                    </SparklineComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Columns</b>
                    <SparklineComponent id='sparkline5' height='150px' width='200px' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]}
                        // Assign the dataSource values to series of sparkline 'xName and yName'
                                        xName='xval' yName='yval'
                        // Assign 'Column' as type of the sparkline
                                        type='Column'>
                    </SparklineComponent>

                </div>
                <div className="col-md-6">
                    <b>Pie</b>
                    <SparklineComponent id='sparkline6' height='200px' width='70%' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: 20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: 21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: 22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]}
                        // Assign the dataSource values to series of sparkline 'xName and yName'
                                        xName='xval' yName='yval'
                        // Assign 'Pie' as type of the sparkline
                                        type='Pie'>
                    </SparklineComponent>

                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Win Loss</b>
                    <SparklineComponent id='sparkline7' height='100px' width='70%' dataSource={[
                        { x: 0, xval: '2005', yval: 20090440 },
                        { x: 1, xval: '2006', yval: 20264080 },
                        { x: 2, xval: '2007', yval: -20434180 },
                        { x: 3, xval: '2008', yval: 21007310 },
                        { x: 4, xval: '2009', yval: 21262640 },
                        { x: 5, xval: '2010', yval: -21515750 },
                        { x: 6, xval: '2011', yval: 21766710 },
                        { x: 7, xval: '2012', yval: 22015580 },
                        { x: 8, xval: '2013', yval: -22262500 },
                        { x: 9, xval: '2014', yval: 22507620 },
                    ]}
                        // Assign the dataSource values to series of sparkline 'xName and yName'
                                        xName='xval' yName='yval'
                        // Assign 'WinLoss' as type of the sparkline
                                        type='WinLoss'>
                    </SparklineComponent>

                </div>
                <div className="col-md-6">
                    <b>Range Band</b>
                    <SparklineComponent id='sparkline8' height='200px' width='150px' lineWidth={2} fill='#0d3c9b' dataSource={[0, 6, 4, 1, 3, 2, 5]}
                        // To configure range band settings
                        rangeBandSettings={[
                            {
                                startRange: 1,
                                endRange: 3,
                                color: '#bfd4fc',
                                opacity: 0.4
                            }
                        ]}>
                    </SparklineComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Border</b>
                    <SparklineComponent id='sparkline9' height='200px' width='350px' containerArea={{
                        border: { color: '#033e96', width: 2 }
                    }} border={{
                        color: '#033e96', width: 1
                    }} type='Area' fill='#b2cfff' dataSource={[3, 6, 4, 1, 3, 2, 5]}>
                    </SparklineComponent>

                </div>
                <div className="col-md-6">
                    <b>Theme</b>
                    <SparklineComponent id='sparkline10' height='200px' width='350px'
                        // To specify theme
                                        theme={'Material'} dataLabelSettings={{ visible: ['All'] }} tooltipSettings={{
                        trackLineSettings: { visible: true }
                    }} axisSettings={{
                        minX: -1, maxX: 7
                    }} lineWidth={3} border={{
                        color: 'transparent', width: 2
                    }} type='Line' fill='#007dd1' dataSource={[3, 6, 4, 1, 3, 2, 5]}>
                        <Inject services={[SparklineTooltip]}/>
                    </SparklineComponent>
                </div>
            </div>
        </div>
    );
}


export default Sparkline;
