import { MapsComponent, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-react-maps';



const Maps = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <MapsComponent id="container"/>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    );
}

export default Maps;
