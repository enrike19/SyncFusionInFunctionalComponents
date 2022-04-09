import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { SplitButtonComponent, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';

import './Common/css/Dropdown.css';

const Dropdown = () => {

    const  items: ItemModel[] = [
        {
            text: 'Dashboard',
            iconCss: 'e-ddb-icons e-dashboard'
        },
        {
            text: 'Notifications',
            iconCss: 'e-ddb-icons e-notifications',
        },
        {
            text: 'User Settings',
            iconCss: 'e-ddb-icons e-settings',
        },
        {
            text: 'Log Out',
            iconCss: 'e-ddb-icons e-logout'
        }];

    const addDisabled = (args: MenuEventArgs) => {
        if (args.item.text !== 'Paste') {
            args.element.classList.add('e-disabled');
        }
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className='dropdownbutton-section'>
                    <div id='dropdownbutton-control'>
                        <div className='row'>
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <DropDownButtonComponent items={items} iconCss='e-ddb-icons e-profile'></DropDownButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <DropDownButtonComponent items={items}>Profile</DropDownButtonComponent>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <DropDownButtonComponent items={items} iconCss='e-ddb-icons e-profile'>Profile</DropDownButtonComponent>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-6">
                                <DropDownButtonComponent items={items} cssClass='e-caret-hide'>Profile</DropDownButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='splitbutton-section'>
                    <div id='splitbutton-control'>
                        <div className='row'>
                            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-3">
                                <SplitButtonComponent items={items} iconCss='e-btn-icons e-paste'></SplitButtonComponent>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-3">
                                <SplitButtonComponent items={items} content='Paste'></SplitButtonComponent>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-3">
                                <SplitButtonComponent items={items} content='Paste' iconCss='e-btn-icons e-paste'></SplitButtonComponent>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-lg-3 col-md-3">
                                <SplitButtonComponent items={items} content='Paste' iconCss='e-btn-icons e-paste' beforeItemRender={addDisabled}></SplitButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
