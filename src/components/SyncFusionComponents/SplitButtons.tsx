import { createElement, enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import './Common/css/SplitBottons.css';

enableRipple(true);

const SplitButtons = () => {

    const items = [
        {
            text: 'Cut',
        },
        {
            text: 'Copy',
        },
        {
            text: 'Paste',
        }
    ];

    const items2 = [
        {
            iconCss: 'e-sb-icons e-cut',
            text: 'Cut'
        },
        {
            iconCss: 'e-icons e-copy',
            text: 'Copy'
        },
        {
            iconCss: 'e-sb-icons e-paste',
            text: 'Paste'
        },
        {
            separator: true
        },
        {
            iconCss: 'e-sb-icons e-font',
            text: 'Font'
        },
        {
            iconCss: 'e-sb-icons e-paragraph',
            text: 'Paragraph'
        }
    ];

    const itemBeforeEvent = (args: any) => {
            const shortCutSpan = createElement('span');
            const text = args.item.text;
            args.element.appendChild(shortCutSpan);
            shortCutSpan.setAttribute('class', 'shortcut');
            const clsName = (text === 'Copy') ? 'e-icons' : 'e-sb-icons';
            shortCutSpan.classList.add(clsName);
            (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
        };



    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Default</b>
                    <SplitButtonComponent id="element" items={items}> Paste </SplitButtonComponent>
                </div>
                <div className="col-md-4">
                    <b>with icos</b>
                    <SplitButtonComponent items={items} iconCss='e-sb-icons e-paste'>Paste</SplitButtonComponent>
                    <SplitButtonComponent items={items} iconPosition="Top" iconCss='e-sb-icons e-paste'>Paste</SplitButtonComponent>

            </div>
                <div className="col-md-4">
                    <b>Icon Top</b><br/>
                    <SplitButtonComponent cssClass='e-vertical' items={items} iconCss='e-sb-icons e-paste' iconPosition='Top'>Paste</SplitButtonComponent>

                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Popup</b>
                    <SplitButtonComponent items={items2} iconCss='e-sb-icons e-paste'>Paste</SplitButtonComponent>
                </div>
                <div className="col-md-4">
                    <b>with Template</b>
                    <SplitButtonComponent items={items} beforeItemRender={itemBeforeEvent} iconCss='e-sb-icons e-paste'/>

                </div>
                <div className="col-md-4">

                </div>
            </div>
        </div>


    );
}

export default SplitButtons;
