import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import './Common/css/ContextMenu.css';

enableRipple(true);

const ContextMenu = () => {

    let cmenu: any;

    const menuItems = [
        {
            iconCss: 'e-cart-icon e-link',
            text: 'Flipkart',
            url: 'https://www.google.co.in/search?q=flipkart'
        },
        {
            iconCss: 'e-cart-icon e-link',
            text: 'Amazon',
            url: 'https://www.google.co.in/search?q=amazon'
        },
        {
            iconCss: 'e-cart-icon e-link',
            text: 'Snapdeal',
            url: 'https://www.google.co.in/search?q=snapdeal'
        }
    ];
    const itemBeforeEvent = (args: any) => {
        args.element.getElementsByTagName('a')[0].setAttribute('target', '_blank');
    };

    const menuItems2 = [
        {
            text: 'Save as...'
        },
        {
            text: 'View page source'
        },
        {
            text: 'Inspect'
        }
    ];

    const menuItems3 = [
        {
            text: 'Show All Bookmarks'
        },
        {
            text: 'Bookmarks Toolbar',
            items: [
                {
                    text: 'Most Visited',
                    items: [
                        {
                            text: 'Google'
                        },
                        {
                            text: 'Gmail'
                        }
                    ]
                },
                {
                    text: 'Recently Added'
                }
            ]
        }
    ];

    const itemBeforeEvent2 = (args: any) => {
        const shortCutSpan = createElement('span');
        const text = args.item.text;
        const shortCutText = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ? 'Ctrl + U' : 'Ctrl + Shift + I');
        shortCutSpan.textContent = shortCutText;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class', 'shortcut');
    };

    const menuItems4 = [
        {
            iconCss: 'e-menu-icons e-cut',
            text: 'Cut'
        },
        {
            iconCss: 'e-icons e-copy',
            text: 'Copy'
        },
        {
            iconCss: 'e-menu-icons e-paste',
            items: [
                {
                    iconCss: 'e-cm-icons e-pastetext',
                    text: 'Paste Text',
                },
                {
                    iconCss: 'e-cm-icons e-pastespecial',
                    text: 'Paste Special'
                }
            ],
            text: 'Paste'
        }
    ];


    const onCreated = () => {
        cmenu.open(400, 800);
    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div id='target1'>Right click / Touch hold to open the ContextMenu</div>
                    <ContextMenuComponent id='contextmenu' target='#target1' items={menuItems} beforeItemRender={itemBeforeEvent}/>
                </div>

                <div className="col-md-6">
                    <div id='target2'>Right click / Touch hold to open the ContextMenu</div>
                    <ContextMenuComponent id='contextmenu2' target='#target2' items={menuItems2} beforeItemRender={itemBeforeEvent2}/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-6">
                    <div id='target3'>Right click / Touch hold to open the ContextMenu</div>
                    <ContextMenuComponent id='contextmenu3' target='#target3' items={menuItems3}> </ContextMenuComponent>
                </div>
                <div className="col-md-6">
                    <div id='target4'>Right click / Touch hold to open the ContextMenu</div>
                    <ContextMenuComponent ref={(scope) => cmenu = scope} id='contextmenu4' items={menuItems4} created={onCreated}/>

                </div>
            </div>

        </div>
    );
}

export default ContextMenu;
