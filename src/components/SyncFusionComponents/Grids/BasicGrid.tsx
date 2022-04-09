import {ColumnDirective, ColumnsDirective, GridComponent, Page, Inject} from "@syncfusion/ej2-react-grids";
import {DataManager, ODataAdaptor, Query} from "@syncfusion/ej2-data";

const BasicGrid = () => {

    const data = new DataManager({
        adaptor: new ODataAdaptor,
        url: 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders'
    });
    const query = new Query().addParams('ej2grid', 'true');

    return (
        <GridComponent dataSource={data} query={query} allowPaging={true} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>
    );
}

export default BasicGrid;
