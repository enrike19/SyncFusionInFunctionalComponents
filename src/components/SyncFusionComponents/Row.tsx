
interface IOrders {
    OrderID: number;
    EmployeeID: number;
    CustomerID: string;
    Order_Details: object[];
}


const Row = (props: IOrders) => {
    const item: IOrders = props as IOrders;
    return (<tr>
        <td>{item.OrderID}</td>
        <td>{item.CustomerID}</td>
        <td>{item.EmployeeID}</td>
    </tr>)

};

export default Row
