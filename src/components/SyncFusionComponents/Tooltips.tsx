import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import {Ajax} from "@syncfusion/ej2-base";

const Tooltips = () => {

    const myCSS = `#target {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    padding: 20px 0;
    width: 200px;
    text-align: center;
    color: #424242;
    font-size: 20px;
}

.tooltip-box {
    width: 100%;
    height: 200px;
  }

  #tooltip {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    box-sizing: border-box;
    padding: 20px 0;
    width: 200px;
    text-align: center;
    color: #424242;
    font-size: 20px;
    user-select: none;
    position: relative;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
  }

  .ddl {
    display: inline-block;
    margin: 0 30px;
  }

`;

    const content = () => {
        return (<div id='tooltipContent'>
            <p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p>
        </div>);
    }
    let style = {
        display: 'inline-block',
        padding: '5px'
    };

    let tooltipInstance: any;

    const onBeforeRender = (args: any) => {

        tooltipInstance.content = 'Loading...';
        tooltipInstance.dataBind();
        let ajax = new Ajax('./tooltipdata.json', 'GET', true);
        ajax.send().then((result: any) => {
            result = JSON.parse(result);
            for (let i = 0; i < result.length; i++) {
                if (result[i].Id === args.target.getAttribute('data-content')) {
                    tooltipInstance.content = "<div class='contentWrap'>" + result[i].Sports + "</div>";
                }
            }
            tooltipInstance.dataBind();
        }, (reason) => {
            tooltipInstance.content = reason.message;
            tooltipInstance.dataBind();
        });

    }

    let tooltipInstancePos: any;
    let dropElement: any;

    const change = () => {
        tooltipInstancePos.position = dropElement.value;
    }

    let tooltipInstanceOp: any;
    let buttonElementOp: any;
    let styleTable = {
        margin: '150px auto 0 auto', transform: 'translateY(-50%)'
    };
    let margin = {
        margin: '40px'
    };

    const handleClickOp = () => {
        if (buttonElementOp.getAttribute('data-tooltip-id')) {
            tooltipInstance.close();
        }
        else {
            tooltipInstance.open(buttonElementOp);
        }
    }

    const TooltipAnimation = {
        open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
        close: { effect: 'ZoomOut', duration: 500, delay: 0 }
    };


    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-3">
                    <b>Default</b>
                    <TooltipComponent position="TopCenter" content="Tooltip Content" target="#target">
                        <button className="e-btn" id="target">Show Tooltip</button>
                    </TooltipComponent>
                </div>
                <div className="col-md-3">
                    <b>On Inputs</b>
                    <TooltipComponent id="details" target='.e-info' position='RightCenter'>
                        <form id="details" role="form">
                            <table>
                                <tbody>
                                <tr>
                                    <td className="info">User Name</td>
                                    <td>
                                        <input type="text" className="e-info" name="firstname" title="Please enter your name"/> </td>
                                </tr>
                                <tr>
                                    <td className="info">Email Address</td>
                                    <td>
                                        <input type="text" className="e-info" name="email" title="Enter a valid email address"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info">Password</td>
                                    <td>
                                        <input type="password" className="e-info" name="password" title="Be at least 8 characters length"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="info">Confirm Password</td>
                                    <td>
                                        <input type="password" className="e-info" name="Cpwd" title="Re-enter your password"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ButtonComponent id="sample" className="center" content="Submit"/>
                                    </td>
                                    <td>
                                        <ButtonComponent id="reset" className="center" content="Reset"/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </TooltipComponent>
                </div>
                <div className="col-md-3">
                    <b>Dimensions</b>
                    <TooltipComponent width="180px" height="40px" content="This tooltip has 180px width and 40px height">
                        <div id='target'>Show Tooltip</div>
                    </TooltipComponent>
                </div>
                <div className="col-md-3">
                    <b>Scrolling</b>
                    <p>A green home is a type of house designed to be
                        <TooltipComponent width="300px" height="60px" isSticky={true} content={content} style={style}>
                            <a><u>environmentally friendly</u></a>
                        </TooltipComponent> and sustainable. And also focuses on the efficient use of "energy, water, and building materials." As green homes
                        have become more prevalent we have also seen the emergence of green affordable housing.
                    </p>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Open Mode</b>
                    <table style={style}>
                        <tbody>
                        <tr>
                            <td>
                                <TooltipComponent content='Tooltip from hover' opensOn='Hover' target='#hoverButton'>
                                    <button style={margin} id='hoverButton' className="e-btn blocks">Hover Me !(Default)</button>
                                </TooltipComponent>
                            </td>
                            <td>
                                <TooltipComponent content='Tooltip from click' opensOn='Click' target='#clickButton'>
                                    <button style={margin} id='clickButton' className="e-btn blocks">Click Me !</button>
                                </TooltipComponent>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <TooltipComponent content='Tooltip from focus' opensOn='Focus' target='#tooltipfocus'>
                                <span style={margin} id="textbox" className="e-float-input blocks">
                                    <input id="tooltipfocus" type="text" placeholder="Focus and blur"/>
                                </span>
                                </TooltipComponent>
                            </td>
                            <td>
                                <TooltipComponent className="wrap" ref={t => tooltipInstanceOp = t} opensOn='custom' content='Tooltip from custom mode'>
                                    <input id="box" type="button" className="e-btn" ref={d => buttonElementOp = d} onClick={handleClickOp} value="Click to open tooltip manually"/>
                                </TooltipComponent>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <b>Define Positions</b>
                    <TooltipComponent ref={t => tooltipInstancePos = t} className="tooltip-box" content='Tooltip Content' target='#tooltip'>
                        <div id="tooltip">Show Tooltip</div>
                    </TooltipComponent>
                    <div className='ddl'>
                        <select id="positions" ref={d => dropElement = d} onChange={change} className="form-control drop-inline">
                            <option value="TopLeft">Top Left</option>
                            <option value="TopCenter" selected>Top Center</option>
                            <option value="TopRight">Top Right</option>
                            <option value="BottomLeft">Bottom Left</option>
                            <option value="BottomCenter">Bottom Center</option>
                            <option value="BottomRight">Bottom Right</option>
                            <option value="LeftTop">Left Top</option>
                            <option value="LeftCenter">Left Center</option>
                            <option value="LeftBottom">Left Bottom</option>
                            <option value="RightTop">Right Top</option>
                            <option value="RightCenter">Right Center</option>
                            <option value="RightBottom">Right Bottom</option>
                        </select>
                    </div>

                </div>
                <div className="col-md-3">
                    <b>Mouse trailing</b>
                    <TooltipComponent className="tooltip-box" content='Tooltip Content' mouseTrail={true} showTipPointer={false}>
                        <div id='target'>Show Tooltip</div>
                    </TooltipComponent>
                </div>
                <div className="col-md-3">
                    <TooltipComponent className="tooltip-box" content='Tooltip animation effect' animation={ {
                            open: { effect: 'ZoomIn', duration: 1000, delay: 0 },
                            close: { effect: 'ZoomOut', duration: 500, delay: 0 }} }>
                        <div id='target'>Show Tooltip</div>
                    </TooltipComponent>
                </div>
                <div className="col-md-3">

                </div>
            </div>

            <style>{ myCSS }</style>
        </div>
    );
}

export default Tooltips;



