import BasicTreeView from "./TreeViews/BasicTreeView";
import BindingTreeView from "./TreeViews/BindingTreeView";
import CheckboxTreeView from "./TreeViews/CheckBoxTreeView";
import DragAndDropTreeView from "./TreeViews/DragAndDropTreeView";

const TreeView = () => {

    return (
        <div className="container">
            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Default</b>
                    <BasicTreeView />
                </div>
                <div className="col-md-6">
                    <b>Binding</b>
                    <BindingTreeView />
                </div>
            </div>

            <div className="row mt-40">
                <div className="col-md-6">
                    <b>Checkbox</b>
                    <CheckboxTreeView />
                </div>
                <div className="col-md-6">
                    <b>Drag and Drop</b>
                    <DragAndDropTreeView />
                </div>
            </div>
        </div>
    );
}



export default TreeView;
