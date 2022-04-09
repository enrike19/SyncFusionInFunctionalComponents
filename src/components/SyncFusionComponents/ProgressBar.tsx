import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

const ProgressBar = () => {
    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <ProgressBarComponent id="linear"
                                          type='Linear'
                                          height='60'
                                          value={40}
                                          animation={{
                                              enable: true,
                                              duration: 2000,
                                              delay: 0,
                                          }}>
                    </ProgressBarComponent>,
                </div>
                <div className="col-md-6">
                    <b>Circular</b>
                    <ProgressBarComponent
                        id="circular-container"
                        type="Circular"
                        height="160px"
                        value={100}
                        animation={{
                            enable: true,
                            duration: 2000,
                            delay: 0
                        }}
                    >
                    </ProgressBarComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Indeterminate</b>
                    <ProgressBarComponent
                        id="Indeterminate"
                        type="Linear"
                        height="60"
                        value={20}
                        isIndeterminate={true}
                        animation={{
                            enable: true,
                            duration: 2000,
                            delay: 0
                        }}
                    >
                    </ProgressBarComponent>
                </div>
                <div className="col-md-6">
                    <b>Buffer</b>
                    <ProgressBarComponent
                        id="buffer"
                        type="Linear"
                        height="60"
                        value={40}
                        secondaryProgress={60}
                        animation={{
                            enable: true,
                            duration: 2000,
                            delay: 0
                        }}
                    >
                    </ProgressBarComponent>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
