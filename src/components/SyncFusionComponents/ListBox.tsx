import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const ListBox = () => {

    const data = ['Badminton', 'Cricket', 'Football', 'Golf', 'Tennis', 'Basket Ball', 'Base Ball', 'Hockey', 'Volley Ball'];

    const dataObj = [
        { text: 'Hennessey Venom!', id: 'list-01' },
        { text: 'Bugatti Chiron!', id: 'list-02' },
        { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
        { text: 'SSC Ultimate Aero', id: 'list-04' },
        { text: 'Koenigsegg CCR', id: 'list-05' },
        { text: 'McLaren F1', id: 'list-06' },
        { text: 'Aston Martin One- 77', id: 'list-07' },
        { text: 'Jaguar XJ220', id: 'list-08' },
        { text: 'McLaren P1', id: 'list-09' },
        { text: 'Ferrari LaFerrari', id: 'list-10' },
    ];

    const dataComp = [
        { id: 'game1', sports: { Name: 'Badminton' } },
        { id: 'game2', sports: { Name: 'Cricket' } },
        { id: 'game3', sports: { Name: 'Football' } },
        { id: 'game4', sports: { Name: 'Golf' } },
        { id: 'game5', sports: { Name: 'Tennis' } },
        { id: 'game6', sports: { Name: 'Basket Ball' } },
        { id: 'game7', sports: { Name: 'Base Ball' } },
        { id: 'game8', sports: { Name: 'Hockey' } },
        { id: 'game9', sports: { Name: 'Volley Ball' } }
    ];
    const fields = { text: "sports.Name", value: "id" };

    const fields2 = { text: 'FirstName', value: 'EmployeeID' };
    const data2 = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees'
    });

    const data3 = [
        { "Name": "Australia", "Code": "AU" },
        { "Name": "Bermuda", "Code": "BM" },
        { "Name": "Canada", "Code": "CA" },
        { "Name": "Cameroon", "Code": "CM" },
        { "Name": "Denmark", "Code": "DK" },
        { "Name": "France", "Code": "FR" },
        { "Name": "Finland", "Code": "FI" },
        { "Name": "Germany", "Code": "DE" },
        { "Name": "Hong Kong", "Code": "HK" }
    ];
    const fields3 = { text: "Name" };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <b>Using Array</b>
                    <ListBoxComponent dataSource={data}/>
                </div>
                <div className="col-md-6">
                    <b>Using Array Object</b>
                    <ListBoxComponent dataSource={dataObj}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <b>Using Complex Objext</b>
                    <ListBoxComponent dataSource={dataComp} fields={fields}/>
                </div>
                <div className="col-md-6">
                    <b>Remote Data</b>
                    <ListBoxComponent dataSource={data2} fields={fields2}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <b>Drag/Drop</b>
                    <ListBoxComponent dataSource={data3} allowDragAndDrop={true} fields={fields3}/>
                </div>
                <div className="col-md-6">
                    <b>Remote Data</b>
                    <ListBoxComponent dataSource={data2} fields={fields2}/>);
                </div>
            </div>
        </div>
    );
}

export default ListBox;
