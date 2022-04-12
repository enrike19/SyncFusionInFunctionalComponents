import {Link} from "react-router-dom";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";

const Menu = () => {

    const links = [
       /* {name: 'Button Group', link: '/buttonGroup'},
        {name: 'Button', link: '/buttons'},
        {name: 'Carousel', link: '/carousel'},
        {name: 'Charts', link: '/charts'},
        {name: 'Checkbox', link: '/checkbox'},
        {name: 'DataGrid', link: '/dataGrid'},
        {name: 'DataManager', link: '/dataManager'},
        {name: 'Dropdown', link: '/dropdown'},
        //name: 'PivotTable', link: '/pivotTable'},
        {name: 'Barcodes', link: '/barcode'},
        //{name: 'Tree Grid', link: '/treeGrid'},
       // {name: 'Range Navigator', link: '/rangeNavigator'},
        {name: 'Context Menu', link: '/contextMenu'},
        {name: 'Dashboard layout', link: '/dashboardLayout'},
        {name: 'DatesPicker', link: 'datesPicker'},
        {name: 'Diagrams', link: '/diagrams'},
        {name: 'Dialog', link: '/dialog'},
        {name: 'File Manager', link: '/fileManager'},
        {name: 'Forms', link: '/formValidator'},
        {name: 'Gantt', link: '/gantt'},
        {name: 'Grids', link: '/grids'},
        {name: 'Heat Map', link: '/heatmap'},
        {name: 'InPlace Editor', link: '/inPlaceEditor'},
        {name: 'Kanban', link: '/kanban'},
        {name: 'Linear Gauge', link: '/linearGauge'},
        {name: 'ListBox', link: '/listbox'},
        {name: 'ListView', link: '/listview'},
        {name: 'Maps', link: '/maps'},
        {name: 'Masked Inputs', link: '/maskedInputs'},
        {name: 'Menu Bar', link: '/menubar'},
        {name: 'Multiselect', link: '/multiselect'},*/
        {name: 'Numeric TextBox', link: '/numericTextbox'},
        {name: 'Pager', link: '/pager'},
        {name: 'Pdf Viewer', link: '/pdfviewer'},
        {name: 'Progress Bar', link: '/progressBar'},
        {name: 'Progress Button', link: '/progressButton'},
        {name: 'QueryBuilder', link: '/queryBuilder'},
        {name: 'Radio Button', link: '/radiobutton'},
        {name: 'Range slider', link: '/rangeSlider'},
        {name: 'RichTextEditor', link: '/richTextEditor'},
        {name: 'Schedule', link: '/schedule'},
        {name: 'Sidebar', link: '/sidebar'},
        {name: 'Signature', link: '/signature'},
        {name: 'Smith Chart', link: '/smithChart'},
        {name: 'SparkLine', link: '/sparkline'},
        {name: 'Spinner', link: '/spinner'},
        {name: 'SplitButtons', link: '/splitButtons'},
        {name: 'Splitter', link: '/splitter'},
        {name: 'Spreadsheet', link: '/Spreadsheet'},
        {name: 'Switch', link: '/Switch'},
        {name: 'Tabs', link: '/tabs'},
        {name: 'Toast', link: '/toast'},
        {name: 'Toolbar', link: '/toolbar'},
        {name: 'Tooltips', link: '/tooltips'},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
        {name: '', link: ''},
    ];


    return (
        <div className="col-md-3">

            <h6 className={"text-center"}>Menu</h6>
            <div className="row">
                {
                    links.filter(item => item.link !== '').sort((a, b) => (a.name > b.name) ? 1 : -1).map(item => (
                        <div className={'col-md-6'} key={item.link}>
                            <Link to={item.link} className="btn btn-sm btn-primary options" > { item.name }</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
 };

export default Menu;
