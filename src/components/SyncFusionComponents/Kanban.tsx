import { DataManager, ODataAdaptor, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import {Ajax} from "@syncfusion/ej2-base";

const Kanban = () => {

    const data = new DataManager({
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Kanban',
        adaptor: new ODataAdaptor
    });

    const data2 = new DataManager({
        url: 'https://services.odata.org/v4/northwind/northwind.svc/Suppliers',
        adaptor: new ODataV4Adaptor
    });

    const DialogOpen = (args: any) => {
        args.cancel = true;
    }

    let kanban: any;
    const ajax = new Ajax("https://ej2services.syncfusion.com/production/web-services/api/Orders", "GET");
    ajax.send();
    ajax.onSuccess = (data: any) => {
        if (kanban) {
            kanban.dataSource = JSON.parse(data);

        }
    };

    return (
        <div className="container">
            <div className="row mt-20">
                <b>Empty</b>
                <div className="col-md-12 mt-20">
                    <KanbanComponent id="kanban" keyField="Status">
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open"/>
                            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                            <ColumnDirective headerText="Testing" keyField="Testing"/>
                            <ColumnDirective headerText="Done" keyField="Close"/>
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
            <div className="row mt-20">

                <b>Remote Data</b>
                <div className="col-md-12 mt-20">
                    <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} allowDragAndDrop={false} dialogOpen={DialogOpen}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="To Do" keyField="Open"/>
                            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
                            <ColumnDirective headerText="Testing" keyField="Testing"/>
                            <ColumnDirective headerText="Done" keyField="Close"/>
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
            <div className="row mt-20">
                <b>Remote ODataV4</b>
                <div className="col-md-12 mt-20">
                    <KanbanComponent id="kanban" keyField="ContactTitle" dataSource={data2} cardSettings={{ contentField: "ContactName", headerField: "SupplierID" }} allowDragAndDrop={false} dialogOpen={DialogOpen}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="Order Administrator" keyField="Order Administrator"/>
                            <ColumnDirective headerText="Sales Representative" keyField="Sales Representative"/>
                            <ColumnDirective headerText="Export Administrator" keyField="Export Administrator"/>
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <b>Ajax and Drag/Drop</b>
                    <KanbanComponent ref={kan => kanban = kan} id="kanban1" keyField="ShipCountry" cardSettings={{ contentField: "ShippedDate", headerField: "OrderID" }}>
                        <ColumnsDirective>
                            <ColumnDirective headerText="Denmark" keyField="Denmark"/>
                            <ColumnDirective headerText="Brazil" keyField="Brazil"/>
                            <ColumnDirective headerText="Switzerland" keyField="Switzerland"/>
                            <ColumnDirective headerText="Germany" keyField="Germany"/>
                        </ColumnsDirective>
                    </KanbanComponent>
                </div>
            </div>
        </div>
    );
}

export default Kanban;
