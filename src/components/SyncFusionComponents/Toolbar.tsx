import { CheckBox, RadioButton } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';

const Toolbar = () => {

    const data = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    const numericTem = new NumericTextBox({ format: 'c2', value: 1 });
    const templateDropdown = new DropDownList({ dataSource: data, width: 120, index: 2 });
    const templateCheckbox = new CheckBox({ label: 'Checkbox', checked: true });
    const templateRadiobutton = new RadioButton({ label: 'Radio', name: 'default', checked: true });

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <ToolbarComponent id='toolbar'>
                        <ItemsDirective>
                            <ItemDirective text="Cut"/>
                            <ItemDirective text="Copy"/>
                            <ItemDirective text="Paste"/>
                            <ItemDirective type="Separator"/>
                            <ItemDirective text="Bold"/>
                            <ItemDirective text="Italic"/>
                            <ItemDirective text="Underline"/>
                        </ItemsDirective>
                    </ToolbarComponent>
                </div>
                <div className="col-md-6">
                    <b>With HTML</b>
                    <ToolbarComponent>
                        <div>
                            <div><button className='e-btn e-tbar-btn'>Cut</button> </div>
                            <div><button className='e-btn e-tbar-btn'>Copy</button> </div>
                            <div><button className='e-btn e-tbar-btn'>Paste</button> </div>
                            <div className='e-separator'> </div>
                            <div><button className='e-btn e-tbar-btn'>Bold</button> </div>
                            <div><button className='e-btn e-tbar-btn'>Italic</button> </div>
                        </div>
                    </ToolbarComponent>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Custom Elements</b>
                    <ToolbarComponent>
                        <ItemsDirective>
                            <ItemDirective text="Cut"/>
                            <ItemDirective text="Copy"/>
                            <ItemDirective type="Separator"/>
                            <ItemDirective text="Undo"/>
                            <ItemDirective text="Redo"/>
                            <ItemDirective type="Separator"/>
                            <ItemDirective type="Input" template={numericTem}/>
                            <ItemDirective type="Input" template={templateDropdown}/>
                            <ItemDirective type="Input" template={templateCheckbox}/>
                            <ItemDirective type="Input" template={templateRadiobutton}/>
                        </ItemsDirective>
                    </ToolbarComponent>


                </div>

            </div>
        </div>
    );
}

export default Toolbar;
