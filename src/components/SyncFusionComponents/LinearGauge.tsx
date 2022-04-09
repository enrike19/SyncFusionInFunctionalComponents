import { LinearGaugeComponent, Annotations, GaugeTooltip, AxesDirective, AxisDirective, PointersDirective, PointerDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-lineargauge';
import {Inject} from "@syncfusion/ej2-react-charts";

const LinearGauge = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <LinearGaugeComponent></LinearGaugeComponent>
                </div>
                <div className="col-md-4">
                    <LinearGaugeComponent id='gauge'>
                        <Inject services={[Annotations, GaugeTooltip]}/>
                    </LinearGaugeComponent>,
                </div>
                <div className="col-md-4">
                    <LinearGaugeComponent id='gauge3'>
                        <AxesDirective>
                            <AxisDirective minimum={0} maximum={200}>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <LinearGaugeComponent id='gauge4'>
                        <AxesDirective>
                            <AxisDirective minimum={0} maximum={200} labelStyle={{ format: '{value}°C' }}>
                                <PointersDirective>
                                    <PointerDirective value={140}>
                                    </PointerDirective>
                                </PointersDirective>
                                <RangesDirective>
                                    <RangeDirective start={0} end={80} startWidth={15} endWidth={15}>
                                    </RangeDirective>
                                    <RangeDirective start={80} end={120} startWidth={15} endWidth={15}>
                                    </RangeDirective>
                                    <RangeDirective start={120} end={140} startWidth={15} endWidth={15}>
                                    </RangeDirective>
                                    <RangeDirective start={140} end={200} startWidth={15} endWidth={15}>
                                    </RangeDirective>
                                </RangesDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
                <div className="col-md-4">
                    <LinearGaugeComponent id='gauge5'>
                        <AxesDirective>
                            <AxisDirective minimum={0} maximum={200}>
                                <PointersDirective>
                                    <PointerDirective value={140} color='green'>
                                    </PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
                <div className="col-md-4">
                    <LinearGaugeComponent id='gauge6' container={{ width: 30 }}>
                        <AxesDirective>
                            <AxisDirective>
                                <PointersDirective>
                                    <PointerDirective value={50} width={15} type='Bar'>
                                    </PointerDirective>
                                </PointersDirective>
                            </AxisDirective>
                        </AxesDirective>
                    </LinearGaugeComponent>
                </div>
            </div>

        </div>
    );
}

export default LinearGauge;
