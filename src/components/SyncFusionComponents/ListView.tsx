import { ListViewComponent } from '@syncfusion/ej2-react-lists';
//import DataManager related classes
import { DataManager, Query } from '@syncfusion/ej2-data';
const ListView = () => {

    const arts = [
        { text: 'Artwork', id: '01' },
        { text: 'Abstract', id: '02' },
        { text: 'Modern Painting', id: '03' },
        { text: 'Ceramics', id: '04' },
        { text: 'Animation Art', id: '05' },
        { text: 'Oil Painting', id: '06' }
    ];

    const simpleData = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];

    const settings = [
        {
            Name: "Display",
            id: "list-01"
        },
        {
            Name: "Notification",
            id: "list-02"
        },
        {
            Name: "Sound",
            id: "list-03"
        },
        {
            Name: "Apps",
            id: "list-04"
        },
        {
            Name: "Storage",
            id: "list-05"
        },
        {
            Name: "Battery",
            id: "list-06"
        }
    ];
    const fields = { text: "Name", tooltip: "Name", id: "id" };

    const dataRem = new DataManager({ url: "//js.syncfusion.com/ejServices/Wcf/Northwind.svc/", crossDomain: true });
    //bind the Query instance to query property
    const query = new Query()
        .from("Products")
        .select("ProductID,ProductName")
        .take(6);
    //map the appropriate columns to fields property
    const fieldsRem = { id: "ProductID", text: "ProductName" };

    const arts2 = [
        {
            'text': 'Audi A4',
            'id': '9bdb',
            'category': 'Audi'
        },
        {
            'text': 'Audi A5',
            'id': '4589',
            'category': 'Audi'
        },
        {
            'text': 'BMW 501',
            'id': 'f849',
            'category': 'BMW'
        },
        {
            'text': 'BMW 502',
            'id': '7aff',
            'category': 'BMW'
        }
    ];
    const fields2 = { groupBy: 'category', tooltip: 'text' };

    const dataCheck = [
        { text: 'Do Meditation', id: '1' },
        { text: 'Go Jogging', id: '2' },
        { text: 'Buy Groceries', id: '3' },
        { text: 'Pay Phone bill', id: '4' },
        { text: 'Play Football with your friends', id: '5' },
    ];

    const artsNested = [
        {
            text: "Asia",
            id: "01",
            category: "Continent",
            child: [
                {
                    text: "India",
                    id: "1",
                    category: "Asia",
                    child: [
                        {
                            text: "Delhi",
                            id: "1001",
                            category: "India"
                        },
                        {
                            text: "Kashmir",
                            id: "1002",
                            category: "India"
                        },
                        {
                            text: "Goa",
                            id: "1003",
                            category: "India"
                        }
                    ]
                },
                {
                    text: "China",
                    id: "2",
                    category: "Asia",
                    child: [
                        {
                            text: "Zhejiang",
                            id: "2001",
                            category: "China"
                        },
                        {
                            text: "Hunan",
                            id: "2002",
                            category: "China"
                        },
                        {
                            text: "Shandong",
                            id: "2003",
                            category: "China"
                        }
                    ]
                }
            ]
        },
        {
            text: "North America",
            id: "02",
            category: "Continent",
            child: [
                {
                    text: "USA",
                    id: "3",
                    category: "North America",
                    child: [
                        {
                            text: "California",
                            id: "3001",
                            category: "USA"
                        },
                        {
                            text: "New York",
                            id: "3002",
                            category: "USA"
                        },
                        {
                            text: "Florida",
                            id: "3003",
                            category: "USA"
                        }
                    ]
                },
                {
                    text: "Canada",
                    id: "4",
                    category: "North America",
                    child: [
                        {
                            text: "Ontario",
                            id: "4001",
                            category: "Canada"
                        },
                        {
                            text: "Alberta",
                            id: "4002",
                            category: "Canada"
                        },
                        {
                            text: "Manitoba",
                            id: "4003",
                            category: "Canada"
                        }
                    ]
                }
            ]
        },
        {
            text: "Europe",
            id: "03",
            category: "Continent",
            child: [
                {
                    text: "Germany",
                    id: "5",
                    category: "Europe",
                    child: [
                        {
                            text: "Berlin",
                            id: "5001",
                            category: "Germany"
                        },
                        {
                            text: "Bavaria",
                            id: "5002",
                            category: "Germany"
                        },
                        {
                            text: "Hesse",
                            id: "5003",
                            category: "Germany"
                        }
                    ]
                },
                {
                    text: "France",
                    id: "6",
                    category: "Europe",
                    child: [
                        {
                            text: "Paris",
                            id: "6001",
                            category: "France"
                        },
                        {
                            text: "Lyon",
                            id: "6002",
                            category: "France"
                        },
                        {
                            text: "Marseille",
                            id: "6003",
                            category: "France"
                        }
                    ]
                }
            ]
        },
        {
            text: "Australia",
            id: "04",
            category: "Continent",
            child: [
                {
                    text: "Australia",
                    id: "7",
                    category: "Australia",
                    child: [
                        {
                            text: "Sydney",
                            id: "7001",
                            category: "Australia"
                        },
                        {
                            text: "Melbourne",
                            id: "7002",
                            category: "Australia"
                        },
                        {
                            text: "Brisbane",
                            id: "7003",
                            category: "Australia"
                        }
                    ]
                },
                {
                    text: "New Zealand",
                    id: "8",
                    category: "Australia",
                    child: [
                        {
                            text: "Milford Sound",
                            id: "8001",
                            category: "New Zealand"
                        },
                        {
                            text: "Tongariro National Park",
                            id: "8002",
                            category: "New Zealand"
                        },
                        {
                            text: "Fiordland National Park",
                            id: "8003",
                            category: "New Zealand"
                        }
                    ]
                }
            ]
        },
        {
            text: "Africa",
            id: "05",
            category: "Continent",
            child: [
                {
                    text: "Morocco",
                    id: "9",
                    category: "Africa",
                    child: [
                        {
                            text: "Rabat",
                            id: "9001",
                            category: "Morocco"
                        },
                        {
                            text: "Toubkal",
                            id: "9002",
                            category: "Morocco"
                        },
                        {
                            text: "Todgha Gorge",
                            id: "9003",
                            category: "Morocco"
                        }
                    ]
                },
                {
                    text: "South Africa",
                    id: "10",
                    category: "Africa",
                    child: [
                        {
                            text: "Cape Town",
                            id: "10001",
                            category: "South Africa"
                        },
                        {
                            text: "Pretoria",
                            id: "10002",
                            category: "South Africa"
                        },
                        {
                            text: "Bloemfontein",
                            id: "10003",
                            category: "South Africa"
                        }
                    ]
                }
            ]
        }
    ];
    const fieldsNested = { tooltip: "text" };


    const listTemplate = (data: any) => {
        let letterAvatar = <span className='e-avatar e-avatar-circle'>{data.avatar}</span>;
        let imageAvatar = <span className={`${data.pic} e-avatar e-avatar-circle`}></span>;
        return (<div className='e-list-wrapper e-list-multi-line e-list-avatar'>
            {data.avatar !== "" ? (letterAvatar) : (imageAvatar)}
            <span className="e-list-item-header">{data.text}</span>
            <span className="e-list-content">{data.contact}</span>
        </div>);
    }

    const dataTemplate = [
        {
            text: "Jenifer",
            contact: "(206) 555-985774",
            id: "1",
            avatar: "",
            pic: "pic01"
        },
        { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
        {
            text: "Isabella",
            contact: "(206) 555-8122",
            id: "4",
            avatar: "",
            pic: "pic02"
        },
        {
            text: "William ",
            contact: "(206) 555-9482",
            id: "5",
            avatar: "W",
            pic: ""
        },
        {
            text: "Jacob",
            contact: "(71) 555-4848",
            id: "6",
            avatar: "",
            pic: "pic04"
        },
        { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
        {
            text: "Oliver",
            contact: "(71) 555-5598",
            id: "8",
            avatar: "",
            pic: "pic03"
        },
        {
            text: "Charlotte",
            contact: "(206) 555-1189",
            id: "9",
            avatar: "C",
            pic: ""
        }
    ];
    const fieldsTemplate = { text: "Name" };

    const myStyle =`
                    #list {
                  display: block;
                  max-width: 400px;
                  margin: auto;
                  border: 1px solid #dddddd;
                  border-radius: 3px;
                }
                #list .e-list-group-item {
                    height: 56px;
                    line-height: 56px;
                }
                
                #list .count {
                    float: right;
                }
                
                #container {
                    visibility: hidden;
                }
                
                #loader {
                    color: #008cff;
                    height: 40px;
                    left: 45%;
                    position: absolute;
                    top: 45%;
                    width: 30%;
                }
                
                .e-list-wrapper .e-avatar-circle {
                    background: #BCBCBC;
                }
                
                `;


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <b>Default</b>
                    <ListViewComponent id="list" dataSource={arts}/>
                    <style>
                        {myStyle}
                    </style>
                </div>
                <div className="col-md-6">
                    <b>Array String</b>
                    <ListViewComponent id="list" dataSource={simpleData}/>
                </div>
            </div>
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Binding Data Object</b>
                    <ListViewComponent id="list" dataSource={settings} fields={fields} showHeader={true} headerTitle="Device settings"/>
                </div>
                <div className="col-md-6">
                    <b>Remote Data</b>
                    <ListViewComponent id="list" dataSource={dataRem} fields={fieldsRem} query={query} showHeader={true} headerTitle="Product Name"/>
                </div>
            </div>
            <div className="row  mt-40">
                <div className="col-md-6">
                    <b>Grouping</b>
                    <ListViewComponent id='list' dataSource={arts2} fields={fields2}></ListViewComponent>
                </div>
                <div className="col-md-6">
                    <b>With Checkbox</b>
                    <ListViewComponent id='list' dataSource={dataCheck} showCheckBox={true} headerTitle='TO DO LIst' showHeader={true}></ListViewComponent>
                </div>
            </div>

            <div className="row  mt-40">
                <div className="col-md-6">
                    <b>Nested List</b>
                    <ListViewComponent id="list" dataSource={artsNested} fields={fieldsNested} showHeader={true} headerTitle="Continent"/>
                </div>
                <div className="col-md-6">
                    <b>With Templates</b>
                    <ListViewComponent id='list' dataSource={dataTemplate} headerTitle='Contacts' showHeader={true} sortOrder="Ascending" width='350px' template={listTemplate} fields={fieldsTemplate} cssClass='e-list-template'></ListViewComponent>
                </div>
            </div>
        </div>
    );
}

export default ListView;





