import { getValue } from '@syncfusion/ej2-base';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import Row from './Row';
import {useState} from "react";
const SERVICE_URI: string = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders';

interface IOrders {
    OrderID: number;
    EmployeeID: number;
    CustomerID: string;
    Order_Details: object[];
}

const DataManagerE = () => {

    const [ state, setState ] = useState({ items: [] });

    new DataManager({ url: SERVICE_URI }).executeQuery(new Query().take(8))
        .then((e: ReturnOption) => {
            const res = (e.result as IOrders[]).map((row: IOrders) => (<Row {...row}/>));
            setState({
                items: res as []
            });
        });

    return (
        <table id='datatable' className='e-table'>
            <thead>
                <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
            </thead>
            <tbody>{ getValue('items', state) }</tbody>
        </table>
    );
}

export default DataManagerE;
