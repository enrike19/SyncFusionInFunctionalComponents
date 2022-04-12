import { SmithchartComponent, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, Inject, SmithchartLegend } from '@syncfusion/ej2-react-charts';

const SmithChart = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <SmithchartComponent id="smithchart1"></SmithchartComponent>
                </div>
                <div className="col-md-6">
                    <SmithchartComponent id='smithchart2'>
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                            ]} name='Transmission1'>
                            </SmithchartSeriesDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                            ]} name='Transmission2'>
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
                    </SmithchartComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <SmithchartComponent id='smithchart3' title={'Transmission lines applied for both impedance and admittance'}>
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                            ]} name='Transmission1'>
                            </SmithchartSeriesDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                            ]} name='Transmission2'>
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
                    </SmithchartComponent>
                </div>
                <div className="col-md-6">
                    <SmithchartComponent id='smithchart4' title={'Transmission lines applied for both impedance and admittance'}>
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                            ]} name='Transmission1'>
                            </SmithchartSeriesDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                            ]} name='Transmission2' marker={{ shape: 'Circle', visible: true, border: { width: 2 } }}>
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
                    </SmithchartComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <SmithchartComponent id="smithchart5">
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                            ]} name='Transmission1' marker={{ shape: 'Circle', dataLabel: { visible: true }, visible: true, border: { width: 2 } }}>
                            </SmithchartSeriesDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                            ]} name='Transmission2'>
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
                    </SmithchartComponent>
                </div>
                <div className="col-md-6">
                    <SmithchartComponent id='smithchart' legendSettings={{ visible: true, shape: 'Circle' }} title={'Transmission lines applied for both impedance and admittance'}>
                        <Inject services={[SmithchartLegend]}/>
                        <SmithchartSeriesCollectionDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
                            ]} name='Transmission1' marker={{ shape: 'Circle', dataLabel: { visible: true }, visible: true, border: { width: 2 } }}>
                            </SmithchartSeriesDirective>
                            <SmithchartSeriesDirective points={[
                                { resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
                                { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
                                { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
                                { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
                                { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
                                { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
                                { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
                                { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 },
                            ]} name='Transmission2'>
                            </SmithchartSeriesDirective>
                        </SmithchartSeriesCollectionDirective>
                    </SmithchartComponent>
                </div>
            </div>

        </div>
    );
}

export default SmithChart;
