import { PagerComponent } from '@syncfusion/ej2-react-grids';

const Pager = () => {
    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <PagerComponent totalRecordsCount = {20} pageSize = {1} pageCount = {3}></PagerComponent>
                </div>
                <div className="col-md-6">
                    <b>Page count</b>
                    <PagerComponent totalRecordsCount = {20} pageSize = {1} pageCount = {3}></PagerComponent>
                </div>
            </div>


        </div>
    );
}

export default Pager;
