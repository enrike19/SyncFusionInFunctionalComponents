import BasicGrid from "./Grids/BasicGrid";
import HandleErrorGrid from "./Grids/HandleErrorGrid";
import AjaxGrid from "./Grids/AjaxGrid";
import AdaptiveGrid from "./Grids/AdaptiveGrid";
import ScrollGrid from "./Grids/ScrollGrid";

const Grid = () => {


/* Example 2*/


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <b>Default</b>
                    <BasicGrid/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <b>Handle Error</b>
                    <HandleErrorGrid/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <b>Ajax Binding</b>
                    <AjaxGrid/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <b>Adaptive Grid</b>
                    <AdaptiveGrid/>
                </div>
            </div>

            <div className="row mt-20">
                <div className="col-md-12 mt-20">
                    <b>Scroll Grid</b>
                    <ScrollGrid/>
                </div>
            </div>

        </div>
    );
}

export default Grid;



