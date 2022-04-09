import {
    ColumnDirective,
    ColumnsDirective,
    Grid,
    GridComponent,
    Inject, Page
} from "@syncfusion/ej2-react-grids";
import { Ajax } from '@syncfusion/ej2-base';

const AjaxGrid = () => {

    let grid: Grid | null;

    const ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = (data: any) => {
        if (grid) {
            grid.dataSource = JSON.parse(data);
        }
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GridComponent ref={g => grid = g} allowPaging={true} >
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID'  textAlign='Right' width='120'/>
                        <ColumnDirective field='CustomerID' headerText='Customer ID'  textAlign='Right'  width='120'/>
                        <ColumnDirective field='EmployeeID' headerText='Employee ID'  textAlign='Right'  width='120'/>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country'  textAlign='Right'  width='120'/>
                    </ColumnsDirective>
                    <Inject services={[Page]}/>
                </GridComponent>
            </div>
        </div>
    );
}

export default AjaxGrid;
