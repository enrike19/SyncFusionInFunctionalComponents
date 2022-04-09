import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ProgressButtonComponent, SpinSettingsModel, AnimationSettingsModel } from '@syncfusion/ej2-react-splitbuttons';

import './Common/css/Button.css';

enableRipple(true);

let state = { content: 'Play', iconCss: 'e-btn-sb-icon e-play-icon' };

const Button = () => {

    let contractBtn: any;

    const duration = 4000;

    const contractBegin =() => {
        contractBtn.element.classList.add('e-round');
    }
    const contractEnd = () => {
        contractBtn.element.classList.remove('e-round');
    }



    return (
        <>
            <div className={'row'}>
                <div className={'col-md-2'}>
                    <ButtonComponent>Button</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-primary'>Primary</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-success'>Success</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-info'>Info</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-warning'>Warning</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-danger'>Danger</ButtonComponent>
                </div>
            </div>
            <br/>
            <div className={'row'}>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-link'>Link</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-flat'>Flat</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-outline'>OutLine</ButtonComponent>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-round'  iconCss='e-icons e-plus-icon' content={''} isPrimary={true}/>
                </div>
                <div className={'col-md-2'}>
                    <ButtonComponent cssClass='e-flat' iconCss={state.iconCss} content={state.content} isToggle={true} onClick={btnClick}/>
                </div>
                <div className={'col-md-2'}>
                    <div>
                        <ButtonComponent iconCss='e-search-icon'/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="switch-content">
                        <div className="container switch-control">
                            <div>
                                <h4 className="heading">Hotspot & tethering</h4>
                            </div>
                            <div>
                                <label htmlFor="checked" style={{ padding: "10px 72px 10px 0" }}> USB Tethering </label>
                                <SwitchComponent id="checked" checked={true}></SwitchComponent>
                            </div>
                            <div>
                                <label htmlFor="unchecked" style={{ padding: "10px 24px 10px 0" }}> Portable Wi-Fi hotspot </label>
                                <SwitchComponent id="unchecked"></SwitchComponent>
                            </div>
                            <div>
                                <label htmlFor="disabled" className="e-disabled" style={{ padding: "10px 40px 10px 0" }}>
                                    Bluetooth Tethering </label>
                                <SwitchComponent id="disabled" disabled={true} ></SwitchComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='progress-button-section'>
                <div id='progress-button-control'>
                    <div className='row'>
                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Spin Left" isPrimary></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Spin Right" isPrimary spinSettings={{ position: 'Right' }}></ProgressButtonComponent>
                            </div>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Spin Top" isPrimary spinSettings={{ position: 'Top' }}></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Spin Bottom" isPrimary spinSettings={{ position: 'Bottom' }}></ProgressButtonComponent>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent id="roundbtn" spinSettings={{ position: 'Center' }} animationSettings={{ effect: 'ZoomOut' }} cssClass="e-round e-small e-success"
                                                         iconCss="e-btn-sb-icons e-play-icon"></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent id="contract" content="Contract" ref={(scope) => { contractBtn = scope; }} enableProgress cssClass="e-success e-small" begin={contractBegin}
                                                         end={contractEnd}></ProgressButtonComponent>
                            </div>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Slide Left" enableProgress spinSettings={{ position: 'Center' }} animationSettings={{ effect: 'SlideLeft' }}
                                                         cssClass="e-flat e-success"></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Slide Right" enableProgress spinSettings={{ position: 'Center' }} animationSettings={{ effect: 'SlideRight' }}
                                                         cssClass="e-outline e-success"></ProgressButtonComponent>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent id="zoomin" content="Zoom In" enableProgress spinSettings={{ position: 'Center' }} animationSettings={{ effect: 'ZoomIn' }}
                                                         cssClass="e-round-corner e-danger"></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Zoom Out" enableProgress spinSettings={{ position: 'Center' }} animationSettings={{ effect: 'ZoomOut' }}
                                                         cssClass="e-small e-danger"></ProgressButtonComponent>
                            </div>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Download" enableProgress duration={duration} cssClass="e-hide-spinner e-progress-top"
                                                         iconCss="e-btn-sb-icons e-download-icon"></ProgressButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <ProgressButtonComponent content="Disabled" disabled></ProgressButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function  btnClick() {
    if (state.content === "Play") {
        state = { content: 'Pause', iconCss: 'e-btn-sb-icon e-pause-icon' };
    }
    else {
        state = { content: 'Play', iconCss: 'e-btn-sb-icon e-play-icon' };
    }
}

export default Button;
