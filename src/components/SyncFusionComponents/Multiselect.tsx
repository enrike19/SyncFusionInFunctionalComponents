import {CheckBoxSelection, Inject, MultiSelectComponent, TaggingEventArgs} from '@syncfusion/ej2-react-dropdowns';
import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { SortOrder } from '@syncfusion/ej2-lists';

const Multiselect = () => {
    const sportsData: string[] = ['Badminton', 'Basketball', 'Cricket', 'Football', 'Golf', 'Gymnastics', 'Hockey', 'Rugby', 'Snooker', 'Tennis'];

    const sportsData2: { [key: string]: Object }[] = [
        { id: 'game1', sports: 'Badminton' },
        { id: 'game2', sports: 'Football' },
        { id: 'game3', sports: 'Tennis' }
    ];

// maps the appropriate column to fields property
    const  fields2: object = { text: 'sports', value: 'id' };

    const countriesData: { [key: string]: Object }[] = [
        { Country: { Name: 'Australia' }, Code: { Id: 'AU' }},
        { Country: { Name: 'Bermuda' },Code: { Id: 'BM' }},
        { Country:{ Name: 'Canada'}, Code:{ Id: 'CA'} },
        { Country:{Name: 'Cameroon'}, Code:{ Id: 'CM'} },
        { Country:{Name: 'Denmark'}, Code:{ Id: 'DK' }},
        { Country:{Name: 'France'}, Code: { Id:'FR'} }
    ];

    // maps the appropriate column to fields property
    const fieldsContries: object = { text: 'Country.Name', value: 'Code.Id' };

    const customerData: DataManager = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
    });
    // bind the Query instance to query property
    const query: Query = new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6);
    // maps the appropriate column to fields property
    const fields: object = { text: 'ContactName', value: 'CustomerID' };
    // sort the resulted items
    const sortOrder: SortOrder = 'Ascending';

    const sportsDataCheck: { [key: string]: Object }[] = [
        { Id: 'game1', Game: 'Badminton' },
        { Id: 'game2', Game: 'Football' },
        { Id: 'game3', Game: 'Tennis' },
        { Id: 'game4', Game: 'Golf' },
        { Id: 'game5', Game: 'Cricket' },
        { Id: 'game6', Game: 'Handball' },
        { Id: 'game7', Game: 'Karate' },
        { Id: 'game8', Game: 'Fencing' },
        { Id: 'game9', Game: 'Boxing' }
    ];
    // maps the appropriate column to fields property
    const fieldsCheck: object = { text: 'Game', value: 'Id' };

    const colorsData: { [key: string]: Object }[] =[
        { Color: 'Chocolate', Code: '#75523C' },
        { Color: 'CadetBlue', Code: '#3B8289' },
        { Color: 'DarkOrange', Code: '#FF843D' },
        { Color: 'DarkRed', Code: '#CA3832' },
        { Color: 'Fuchsia', Code: '#D44FA3' },
        { Color: 'HotPink', Code: '#F23F82' },
        { Color: 'Indigo', Code: '#2F5D81' },
        { Color: 'LimeGreen', Code: '#4CD242' },
        { Color: 'OrangeRed', Code: '#FE2A00' },
        { Color: 'Tomato', Code: '#FF745C' }
    ];
    // maps the appropriate column to fields property
    const fieldsColor: { [key: string]: string } = { text: 'Color', value: 'Code' };
    // set the value to MultiSelect
    const colorValues: string[] = ['#75523C', '#4CD242', '#FF745C'];
    // bind the tagging event
    const onTagging = (e: TaggingEventArgs) => {
        // set the current selected item text as class to chip element.
        e.setClass((e.itemData as any)[fieldsColor.text].toLowerCase());
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <b>Default</b>
                    <MultiSelectComponent id="mtselement1" dataSource={sportsData} />
                </div>
                <div className="col-md-4">
                    <b>With Placeholder</b>
                    <MultiSelectComponent id="mtselement2" dataSource={sportsData}  placeholder="Find a game" />
                </div>
                <div className="col-md-4">
                    <b>Custom Poplist Width / Height</b>
                    <MultiSelectComponent id="mtselement3" dataSource={sportsData} popupHeight="250px" popupWidth="250px" placeholder="Find a game" />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Binding with object</b>
                    <MultiSelectComponent id="mtselement4" dataSource={sportsData2} fields={fields2} placeholder="Select a game" />
                </div>
                <div className="col-md-4">
                    <b>Binding Complex Object</b>
                    <MultiSelectComponent id="mtselement5" dataSource={countriesData} fields={fieldsContries} placeholder="Select a country" />
                </div>
                <div className="col-md-4">
                    <b>Remote data</b>
                    <MultiSelectComponent id="mtselement6" query={query} dataSource={customerData}
                                          fields={fields} sortOrder={sortOrder} placeholder="Select a customer" />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-4">
                    <b>Checkbox</b>
                    <MultiSelectComponent id="checkbox" dataSource={sportsDataCheck}
                                          fields={fieldsCheck} placeholder="Select game" mode="CheckBox">
                        <Inject services={[CheckBoxSelection]} />
                    </MultiSelectComponent>
                </div>
                <div className="col-md-4">
                    <b>Chip Customization</b>
                    <MultiSelectComponent id="chip-customization" value={colorValues} dataSource={colorsData} fields={fieldsColor} mode="Box" placeholder="Favorite Colors" tagging={onTagging} />

                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

export default Multiselect;
