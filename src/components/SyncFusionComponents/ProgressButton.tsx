import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

import './Common/css/ProgressButton.css';
import {useState} from "react";
const ProgressButton = () => {

    const begin = (args: any) => {
        args.step = 20;
    }

    const [state, setState] = useState({ content: 'Progress' });

    const begin2 = (args: any) => {
        setState({ content: 'Progress ' + args.percent + '%' });
    }

    const progress = (args: any) => {
        setState({ content: 'Progress ' + args.percent + '%' });
        if (args.percent === 40) {
            args.percent = 90;
        }
    }

    const end = (args: any) => {
        setState({ content: 'Progress ' + args.percent + '%' });
    }

    let progressBtn: any;
    const [state2, setState2] = useState({ content: 'Download', iconCss: 'e-btn-sb-icon e-download'  });

    const end2 =() => {
        setState2({ content: 'Download', iconCss: 'e-btn-sb-icon e-download' });
    }

    const clickHandler = () => {
        if (state2.content === 'Download') {
            setState2({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause' });
        }
        else if (state2.content === 'Pause') {
            setState2({ content: 'Resume', iconCss: 'e-btn-sb-icon e-play' });
            progressBtn.stop();
        }
        else if (state2.content === 'Resume') {
            setState2({ content: 'Pause', iconCss: 'e-btn-sb-icon e-pause' });
            progressBtn.start();
        }
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-3">
                    <b>Spin Left</b><br/>
                    <ProgressButtonComponent content='Spin Left'/>
                </div>
                <div className="col-md-3">
                    <b>Template</b><br/>
                    <ProgressButtonComponent content='Submit' spinSettings={{ position: 'Right', width: 20, template: '<div class="template"></div>' }}/>
                </div>
                <div className="col-md-3">
                    <b>Progress</b><br/>
                    <ProgressButtonComponent content='Slide Left' enableProgress={true} animationSettings={ { effect: 'SlideLeft', duration: 500, easing: 'linear' } } spinSettings={{ position: 'Center' }}/>
                </div>
                <div className="col-md-3">
                    <b>Progress step</b><br/>
                    <ProgressButtonComponent content='Progress Step' enableProgress={true} begin={begin} cssClass='e-hide-spinner'/>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-3">
                    <b>Progress Percent</b><br/>
                    <ProgressButtonComponent content={state.content} enableProgress={true} duration={15000} begin={begin2} progress={progress} end={end} cssClass='e-hide-spinner'/>
                </div>
                <div className="col-md-3">
                    <b></b><br/>
                    <ProgressButtonComponent content={state2.content} enableProgress={true} duration={4000} iconCss={state2.iconCss} end={end2} cssClass='e-hide-spinner' onClick={clickHandler} ref={(scope) => { progressBtn = scope; }}/>
                </div>
            </div>
        </div>
    );
}

export default ProgressButton;
