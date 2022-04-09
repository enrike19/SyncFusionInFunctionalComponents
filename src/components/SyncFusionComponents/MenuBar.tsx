import {Ajax, enableRipple} from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { DataManager, ODataAdaptor, Query } from '@syncfusion/ej2-data';

import './Common/css/Menubar.css';
import {useState} from "react";

enableRipple(true);

const MenuBar = () => {

    const menuItems = [
        {
            items: [
                {text: 'Open'},
                {text: 'Save'},
                {text: 'Exit'}
            ],
            text: 'File'
        },
        {
            items: [
                {text: 'Cut'},
                {text: 'Copy'},
                {text: 'Paste'}
            ],
            text: 'Edit'
        },
        {
            items: [
                {text: 'Toolbar'},
                {text: 'Sidebar'}
            ],
            text: 'View'
        },
        {
            items: [
                {text: 'Spelling & Grammar'},
                {text: 'Customize'},
                {text: 'Options'}
            ],
            text: 'Tools'
        },
        {text: 'Go'},
        {text: 'Help'}
    ];

    const menuItemsIcons = [
        {
            iconCss: 'em-icons e-file',
            items: [
                {text: 'Open', iconCss: 'em-icons e-open'},
                {text: 'Save', iconCss: 'e-icons e-save'},
                {separator: true},
                {text: 'Exit'}
            ],
            text: 'File'
        },
        {
            iconCss: 'em-icons e-edit',
            items: [
                {text: 'Cut', iconCss: 'em-icons e-cut'},
                {text: 'Copy', iconCss: 'em-icons e-copy'},
                {text: 'Paste', iconCss: 'em-icons e-paste'}
            ],
            text: 'Edit'
        },
        {
            items: [
                {text: 'Toolbar'},
                {text: 'Sidebar'},
                {text: 'Full Screen'}
            ],
            text: 'View'
        },
        {
            items: [
                {text: 'Spelling & Grammar'},
                {text: 'Customize'},
                {text: 'Options'}
            ],
            text: 'Tools'
        },
        {text: 'Go'},
        {text: 'Help'}
    ];

    const menuItemsMultilevel = [
        {
            items: [
                {
                    items: [
                        {
                            items: [
                                {text: 'Trimmers'},
                                {text: 'Shavers'}
                            ],
                            text: 'Personal Care'
                        },
                        {
                            items: [
                                {text: 'Shirts'},
                                {text: 'Jackets'},
                                {text: 'Track Suits'}
                            ],
                            text: 'Clothing'
                        },
                        {text: 'Footwear'}
                    ],
                    text: 'Men Fashion'
                },
                {
                    items: [
                        {
                            items: [
                                {text: 'Kurtas'},
                                {text: 'Salwars'},
                                {text: 'Sarees'}
                            ],
                            text: 'Clothing'
                        },
                        {
                            items: [
                                {text: 'Nosepins'},
                                {text: 'Anklets'}
                            ],
                            text: 'Jewellery'
                        }
                    ],
                    text: 'Women Fashion'
                }
            ],
            text: 'Fashion'
        },
        {
            items: [
                {
                    items: [
                        {text: 'Fully Automatic'},
                        {text: 'Semi Automatic'}
                    ],
                    text: 'Washing Machine'
                },
                {
                    items: [
                        {text: 'Inverter ACs'},
                        {text: 'Split ACs'}
                    ],
                    text: 'Air Conditioners'
                }
            ],
            text: 'Home & Living'
        },
        {text: 'Accessories'},
        {text: 'Sports'},
        {text: 'Gaming'}
    ];

    const dataSource = [
        {
            continent: 'Asia',
            countries: [
                {
                    country: 'China',
                    languages: [
                        {language: 'Chinese'},
                        {language: 'Cantonese'}
                    ]
                },
                {
                    country: 'India',
                    languages: [
                        {language: 'English'},
                        {language: 'Hindi'},
                        {language: 'Tamil'}
                    ]
                },
                {
                    country: 'Japan',
                    languages: [
                        {language: 'Japanese'}
                    ]
                }
            ]
        },
        {
            continent: 'Africa',
            countries: [
                {
                    country: 'Nigeria',
                    languages: [
                        {language: 'English'},
                        {language: 'Hausa'}
                    ]
                },
                {
                    country: 'Egypt',
                    languages: [
                        {language: 'Arabic'}
                    ]
                },
                {
                    country: 'South Africa',
                    languages: [
                        {language: 'Tswana'},
                        {language: 'Swati'}
                    ]
                }
            ]
        },
        {
            continent: 'North America',
            countries: [
                {
                    country: 'Canada',
                    languages: [
                        {language: 'French'}
                    ]
                },
                {
                    country: 'Mexico',
                    languages: [
                        {language: 'Spanish'}
                    ]
                },
                {
                    country: 'USA',
                    languages: [
                        {language: 'English'}
                    ]
                }
            ]
        },
        {
            continent: 'South America',
            countries: [
                {
                    country: 'Brazil',
                    languages: [
                        {language: 'Portuguese'}
                    ]
                },
                {
                    country: 'Colombia',
                    languages: [
                        {language: 'Spanish'}
                    ]
                },
                {
                    country: 'Argentina',
                    languages: [
                        {language: 'Spanish'}
                    ]
                }
            ]
        },
        {
            continent: 'Oceania',
            countries: [
                {
                    country: 'Australia'
                },
                {
                    country: 'New Zealand'
                },
                {
                    country: 'Samoa'
                },
            ]
        }
    ];

    const SERVICE_URI = 'https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/';
    // Menu fields definition
    const menuFields = {
        children: ['countries', 'languages'],
        text: ['continent', 'country', 'language']
    };

    const [state, setState] = useState({menuItems: []});

    const menuFields2 = {
        children: ['Orders'],
        text: ['FirstName', 'ShipName']
    };

    const proxy = this;
    const select = () => {
        return [1, 2, 3, 4, 5];
    }
    new DataManager({ url: SERVICE_URI, adaptor: new ODataAdaptor, crossDomain: true })
        .executeQuery(new Query().from('Employees').take(5).hierarchy(new Query()
            .foreignKey('EmployeeID')
            .from('Orders').take(13), select))
        .then((e: any) => {
            setState({ menuItems: e.result });
        });


    const menuTemplate = (dataF: any) => {
        return (dataF.category ? <span>{dataF.category}</span> :
            (dataF.value && dataF.url) ?
                <div className='e-avatar e-avatar-small image' style={{ backgroundImage: 'url(https://ej2.syncfusion.com/react/demos/src/menu/images/' + dataF.url + '.png)' }}>{dataF.value}</div> :
                dataF.support ?
                    <ul>
                        {dataF.support.map((supp: any) => <li key={supp.id}>
                            {supp.value}
                            {supp.count ? <span className='e-badge e-badge-success'>{supp.count}</span> : ""}
                        </li>)}
                    </ul> :
                    <div tabIndex={0} className="e-card">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                                <div className="e-card-header-title">About Us</div>
                            </div>
                        </div>
                        <div className="e-card-content">
                            {dataF.about.value}
                        </div>
                        <div className="e-card-actions">
                            <button className="e-btn e-outline">
                                Read More
                            </button>
                        </div>
                    </div>);
    }

    const menuFieldsCustom = {
        children: ['options'],
        text: ['category', 'value']
    };
    // Menu data definition
    const dataCustom:any = [
        {
            category: 'Products',
            options: [
                { value: 'JavaScript', url: 'javascript' },
                { value: 'Angular', url: 'angular' },
                { value: 'ASP.NET Core', url: 'core' },
                { value: 'ASP.NET MVC', url: 'mvc' }
            ]
        },
        {
            category: 'Services',
            options: [
                {
                    support: [
                        { id: 1, count: '1200+', value: 'Application Development' },
                        { id: 2, count: '3700+', value: 'Maintenance & Support' },
                        { id: 3, value: 'Quality Assurance' },
                        { id: 4, count: '900+', value: 'Cloud Integration' }
                    ]
                }
            ]
        },
        {
            category: 'About Us',
            options: [
                {
                    about: {
                        value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                    }
                }
            ]
        },
        { category: 'Careers' },
        { category: 'Sign In' }
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <b>Default</b><br/>
                    <MenuComponent items={menuItems}/>
                </div>
                <div className="col-md-6">
                    <b>With Icons</b>
                    <MenuComponent items={menuItemsIcons}/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-6">
                    <b>Multilevel Nesting</b><br/>
                    <MenuComponent items={menuItemsMultilevel}/>
                </div>
                <div className="col-md-6">
                    <b>Binding FIelds</b>
                    <MenuComponent items={dataSource} fields={menuFields}/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <b>Data Service</b><br/>
                    <div>
                        {state.menuItems.length ?
                            <MenuComponent items={state.menuItems} fields={menuFields2}/> : ''}
                    </div>
                </div>
                <div className="col-md-6">
                    <b>Custom menu items</b>
                    <div className="menu-section">
                        <MenuComponent items={dataCustom} fields={menuFieldsCustom} template={menuTemplate}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
