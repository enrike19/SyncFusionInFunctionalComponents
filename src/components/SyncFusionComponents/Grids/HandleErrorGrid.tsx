import {ColumnDirective, ColumnsDirective, Grid, GridComponent, FailureEventArgs} from "@syncfusion/ej2-react-grids";
import {DataManager, ODataAdaptor, Query} from "@syncfusion/ej2-data";

const BasicGrid = () => {

    const data = new DataManager({
        adaptor: new ODataAdaptor,
        url: 'http://services.odata.org/invalidurl'
    });
    const query = new Query().addParams('ej2grid', 'true').take(10);

    let grid: Grid | null;

    const onActionFailure = (e: FailureEventArgs) => {
        const span: HTMLElement = document.createElement('span');
        if (grid) {
            (grid.element.parentNode as HTMLElement).insertBefore(span, grid.element);
            span.style.color = "#FF0000";
            span.innerHTML = "Server exception: 404 Not found";
        }
    }

    return (
        <GridComponent dataSource={data} ref={g => grid = g} actionFailure={onActionFailure}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
        </GridComponent>
    );
}

export default BasicGrid;
