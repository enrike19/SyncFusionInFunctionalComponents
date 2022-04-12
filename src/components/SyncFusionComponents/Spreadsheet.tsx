import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DataManager, ODataAdaptor } from '@syncfusion/ej2-data';

const Spreadsheet = () => {

   /* const data = [
        {"OrderID":10044,"CustomerID":"BLONP","EmployeeID":12,"Freight":47.699999999999996,"ShipCity":"Marseille","Verified":false,"OrderDate":"1930-10-22T00:00:00Z","ShipName":"Ernst Handel","ShipCountry":"Austria","ShippedDate":"1996-12-30T00:00:00Z","ShipAddress":"Magazinweg 7"},{"OrderID":10045,"CustomerID":"BOLID","EmployeeID":13,"Freight":56.699999999999996,"ShipCity":"Tsawassen","Verified":true,"OrderDate":"1953-02-18T00:00:00Z","ShipName":"Hanari Carnes","ShipCountry":"Switzerland","ShippedDate":"1997-12-03T00:00:00Z","ShipAddress":"1029 - 12th Ave. S."}
    ];*/

    const data = [
        {"result":[{"OrderID":10044,"CustomerID":"BLONP","EmployeeID":12,"Freight":47.699999999999996,"ShipCity":"Marseille","Verified":false,"OrderDate":"1930-10-22T00:00:00Z","ShipName":"Ernst Handel","ShipCountry":"Austria","ShippedDate":"1996-12-30T00:00:00Z","ShipAddress":"Magazinweg 7"},{"OrderID":10045,"CustomerID":"BOLID","EmployeeID":13,"Freight":56.699999999999996,"ShipCity":"Tsawassen","Verified":true,"OrderDate":"1953-02-18T00:00:00Z","ShipName":"Hanari Carnes","ShipCountry":"Switzerland","ShippedDate":"1997-12-03T00:00:00Z","ShipAddress":"1029 - 12th Ave. S."}],"items":[{"OrderID":10044,"CustomerID":"BLONP","EmployeeID":12,"Freight":47.699999999999996,"ShipCity":"Marseille","Verified":false,"OrderDate":"1930-10-22T00:00:00Z","ShipName":"Ernst Handel","ShipCountry":"Austria","ShippedDate":"1996-12-30T00:00:00Z","ShipAddress":"Magazinweg 7"},{"OrderID":10045,"CustomerID":"BOLID","EmployeeID":13,"Freight":56.699999999999996,"ShipCity":"Tsawassen","Verified":true,"OrderDate":"1953-02-18T00:00:00Z","ShipName":"Hanari Carnes","ShipCountry":"Switzerland","ShippedDate":"1997-12-03T00:00:00Z","ShipAddress":"1029 - 12th Ave. S."}],"count":45}
    ];
    let spreadsheet: any;
    const dataRemote = new DataManager({
        adaptor: new ODataAdaptor,
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Orders'
    });

    let spreadsheetRemote: any;

    const created = () => {
        //Applies cell and number formatting to specified range of the active sheet
        spreadsheetRemote.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:K1');
    }

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Default</b>
                    <SpreadsheetComponent/>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Local Data</b>
                    <SpreadsheetComponent ref={(ssObj) => { spreadsheet = ssObj; }}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={110}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-12">
                    <b>Remote Data</b>
                    <SpreadsheetComponent ref={(ssObj) => { spreadsheetRemote = ssObj; }} created={created}>
                        <SheetsDirective>
                            <SheetDirective name='Order Details'>
                                <RangesDirective>
                                    <RangeDirective dataSource={dataRemote}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={280}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>
                </div>
            </div>
        </div>
    );
}

export default Spreadsheet;
