import BasicTreeMap from "./TreeMaps/BasicTreeMap";
import ColorTreeMap from "./TreeMaps/ColorTreeMap";
import LegendTreeMap from "./TreeMaps/LegendTreeMap";
import TooltipsTreeMap from "./TreeMaps/TooltipsTreeMap";
import BindingTreeMap from "./TreeMaps/BindingTreeMap";
import GroupColorTreeMap from "./TreeMaps/GroupColorTreeMap";
import HighlightTreeMap from "./TreeMaps/HighlightTreeMap";

const TreeMap = () => {
    const dataSource = [
        { Title: 'State wise International Airport count in South America', State: "Brazil", Count: 25 },
        { Title: 'State wise International Airport count in South America', State: "Colombia", Count: 12 },
        { Title: 'State wise International Airport count in South America', State: "Argentina", Count: 9 },
        { Title: 'State wise International Airport count in South America', State: "Ecuador", Count: 7 },
        { Title: 'State wise International Airport count in South America', State: "Chile", Count: 6 },
        { Title: 'State wise International Airport count in South America', State: "Peru", Count: 3 },
        { Title: 'State wise International Airport count in South America', State: "Venezuela", Count: 3 },
        { Title: 'State wise International Airport count in South America', State: "Bolivia", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Paraguay", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Uruguay", Count: 2 },
        { Title: 'State wise International Airport count in South America', State: "Falkland Islands", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "French Guiana", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "Guyana", Count: 1 },
        { Title: 'State wise International Airport count in South America', State: "Suriname", Count: 1 },
    ];
    const colorMapping = [
        {
            value: 25,
            color: '#634D6F'
        },
        {
            value: 12,
            color: '#B34D6D'
        },
        {
            value: 9,
            color: '#557C5C'
        },
        {
            value: 7,
            color: '#44537F'
        },
        {
            value: 6,
            color: '#637392'
        },
        {
            value: 3,
            color: '#7C754D'
        },
        {
            value: 2,
            color: '#2E7A64'
        },
        {
            value: 1,
            color: '#95659A'
        },
    ];

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>

                    <BasicTreeMap datasource={dataSource} />
                </div>
                <div className="col-md-6">
                    <b>Color</b>
                    <ColorTreeMap datasource={dataSource} />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Enable Legend</b>
                    <LegendTreeMap datasource={dataSource} colorMapping = {colorMapping}  />
                </div>
                <div className="col-md-6">
                    <b>With Tooltips</b>
                    <TooltipsTreeMap datasource = {dataSource} colorMapping = {colorMapping} />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Group Color</b>
                    <GroupColorTreeMap />
                </div>
                <div className="col-md-6">
                    <b>HightLight</b>
                    <HighlightTreeMap />
                </div>
            </div>
        </div>
    );
}

export default TreeMap;
