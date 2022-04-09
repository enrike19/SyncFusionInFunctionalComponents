import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

const ButtonGroup = () => {
    const items = [
        {
            text: 'Learn SQL'
        },
        {
            text: 'Learn PHP'
        },
        {
            text: 'Learn Bootstrap'
        }
    ];
    return (
        <div className={'row'}>
            <div className={'col-md-4'}>
                <div className='e-btn-group'>
                    <ButtonComponent>HTML</ButtonComponent>
                    <ButtonComponent>CSS</ButtonComponent>
                    <ButtonComponent>Javascript</ButtonComponent>
                </div>
            </div>

            <div className={'col-md-4'}>
                <div className='e-btn-group e-outline'>
                    <ButtonComponent cssClass='e-outline'>HTML</ButtonComponent>
                    <ButtonComponent cssClass='e-outline'>CSS</ButtonComponent>
                    <ButtonComponent cssClass='e-outline'>Javascript</ButtonComponent>
                </div>
            </div>
            <div className={'col-md-4'}>
                <div className='e-btn-group'>
                    <ButtonComponent>HTML</ButtonComponent>
                    <ButtonComponent>CSS</ButtonComponent>
                    <ButtonComponent>Javascript</ButtonComponent>
                    <DropDownButtonComponent id="dropdownelement" items={items}> More </DropDownButtonComponent>
                </div>
            </div>
        </div>

    );
}

export default ButtonGroup;
