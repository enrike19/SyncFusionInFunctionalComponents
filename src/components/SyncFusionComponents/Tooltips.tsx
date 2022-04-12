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
}`;

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
                <div className="col-md-3">
                    <b>Ajax</b>
                    <div id="container">
                        <h4>National Sports</h4>
                        <TooltipComponent id="targetContainer" ref={t => tooltipInstance = t} className="e-prevent-select" content="Loading..." target=".target" position="RightCenter" beforeRender={onBeforeRender}>
                            <div id="countrylist">
                                <ul>
                                    <li className="target" title="1"><span>Australia</span></li>
                                    <li className="target" title="2"><span>Bhutan</span></li>
                                    <li className="target" title="3"><span>China</span></li>
                                    <li className="target" title="4"><span>Cuba</span></li>
                                    <li className="target" title="5"><span>India</span></li>
                                    <li className="target" title="6"><span>Switzerland</span></li>
                                    <li className="target" title="7"><span>United States</span></li>
                                </ul>
                            </div>
                        </TooltipComponent>
                    </div>
                </div>
                <div className="col-md-3">
                    <b></b>
                </div>
                <div className="col-md-3">
                    <b></b>
                </div>
                <div className="col-md-3">
                    <b></b>
                </div>
            </div>

            <style>{ myCSS }</style>
        </div>
    );
}

export default Tooltips;
