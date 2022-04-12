import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router";

import Menu from './components/layout/Menu';
import Button from './components/SyncFusionComponents/Button';
import Header from "./components/layout/Header";
import ButtonGroup from "./components/SyncFusionComponents/ButtonGroup";
import Carrousel from "./components/SyncFusionComponents/Carrousel";
import Charts from "./components/SyncFusionComponents/Charts";
import Checkbox from "./components/SyncFusionComponents/Checkbox";
import {DataGrid} from "./components/SyncFusionComponents/DataGrid";
import {TreeGrid} from "./components/SyncFusionComponents/TreeGrid";
import Dropdown from "./components/SyncFusionComponents/Dropdown";
import PivotTable from "./components/SyncFusionComponents/PivotTable";
import Barcode from "./components/SyncFusionComponents/Barcode";
import DataManagerE from "./components/SyncFusionComponents/DataManager";
import RangeNavigator from "./components/SyncFusionComponents/RangeNavigator";
import ContextMenu from "./components/SyncFusionComponents/ContextMenu";
import DashboardLayout from "./components/SyncFusionComponents/DashboardLayout";
import DatesPicker from "./components/SyncFusionComponents/DatesPicker";
import Diagrams from "./components/SyncFusionComponents/Diagram";
import Dialog from "./components/SyncFusionComponents/Dialog";
import FileManager from "./components/SyncFusionComponents/FileManager";
import FormValidator from "./components/SyncFusionComponents/FormValidator";
import Gantt from "./components/SyncFusionComponents/Gantt";
import Grid from "./components/SyncFusionComponents/Grid";
import Heatmap from "./components/SyncFusionComponents/Heatmap";
import InPlaceEditor from "./components/SyncFusionComponents/InPlaceEditor";
import Kanban from "./components/SyncFusionComponents/Kanban";
import LinearGauge from "./components/SyncFusionComponents/LinearGauge";
import ListBox from "./components/SyncFusionComponents/ListBox";
import ListView from "./components/SyncFusionComponents/ListView";
import Maps from "./components/SyncFusionComponents/Maps";
import MaskedTextBox from "./components/SyncFusionComponents/MaskedTextBox";
import MenuBar from "./components/SyncFusionComponents/MenuBar";
import Multiselect from "./components/SyncFusionComponents/Multiselect";
import NumericTextbox from "./components/SyncFusionComponents/NumericTextbox";
import Pager from "./components/SyncFusionComponents/Pager";
import PDFViewer from "./components/SyncFusionComponents/PDFViewer";
import ProgressBar from "./components/SyncFusionComponents/ProgressBar";
import ProgressButton from "./components/SyncFusionComponents/ProgressButton";
import QueryBuilder from "./components/SyncFusionComponents/QueryBuilder";
import Radiobutton from "./components/SyncFusionComponents/RadioButton";
import RangeSlider from "./components/SyncFusionComponents/RangeSlider";
import RichTextEditorE from "./components/SyncFusionComponents/RichEditor";
import Scheduler from "./components/SyncFusionComponents/Scheduler";
import Sidebar from "./components/SyncFusionComponents/Sidebar";
import Signature from "./components/SyncFusionComponents/Signature";
import SmithChart from "./components/SyncFusionComponents/SmithChart";
import Sparkline from "./components/SyncFusionComponents/Sparkline";
import Spinner from "./components/SyncFusionComponents/Spinner";
import SplitButtons from "./components/SyncFusionComponents/SplitButtons";
import Splitter from "./components/SyncFusionComponents/Splitter";
import Spreadsheet from "./components/SyncFusionComponents/Spreadsheet";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className={'container'}>
        <div className={"row"}>
          <Menu/>
          <div className={"col-md-9 mt-20"}>
            <Routes>

                <Route path={"/barcode"} element={<Barcode/>} />

                <Route path={"/buttons"} element={<Button/>} />
                <Route path={"/buttonGroup"} element={<ButtonGroup/>} />

                <Route path={"/carousel"} element={<Carrousel/>} />

                <Route path={'/charts'} element={<Charts/>} />

                <Route path={'/checkbox'} element={<Checkbox/>} />
                <Route path={'/contextMenu'} element={<ContextMenu/>} />

                <Route path={'/dashboardLayout'} element={<DashboardLayout/>} />

                <Route path={'/dataGrid'} element={<DataGrid/>} />
                <Route path={'/treeGrid'} element={<TreeGrid/>} />

                <Route path={'/dataManager'} element={<DataManagerE/>} />

                <Route path={'/datesPicker'} element={<DatesPicker/>} />

                <Route path={'/diagrams'} element={<Diagrams/>} />
                <Route path={'/dialog'} element={<Dialog/>} />
                <Route path={'/dropdown'} element={<Dropdown/>} />

                <Route path={'/fileManager'} element={<FileManager/>} />
                <Route path={'/formValidator'} element={<FormValidator/>} />

                <Route path={'/gantt'} element={<Gantt/>} />

                <Route path={'/grids'} element={<Grid/>} />
                <Route path={'/heatMap'} element={<Heatmap/>} />

                <Route path={'/inPlaceEditor'} element={<InPlaceEditor/>} />

                <Route path={'/kanban'} element={<Kanban/>} />

                <Route path={'/linearGauge'} element={<LinearGauge/>} />

                <Route path={'/listbox'} element={<ListBox/>} />

                <Route path={'/listview'} element={<ListView/>} />

                <Route path={'/maps'} element={<Maps/>} />

                <Route path={'/maskedInputs'} element={<MaskedTextBox/>} />

                <Route path={'/menubar'} element={<MenuBar/>} />

                <Route path={'/multiselect'} element={<Multiselect/>} />

                <Route path={'/numericTextbox'} element={<NumericTextbox/>} />

                <Route path={'/pager'} element={<Pager/>} />

                <Route path={'/pdfviewer'} element={<PDFViewer/>} />

                <Route path={'/pivotTable'} element={<PivotTable/>} />

                <Route path={'/progressBar'} element={<ProgressBar/>} />

                <Route path={'/progressButton'} element={<ProgressButton/>} />

                <Route path={'/queryBuilder'} element={<QueryBuilder/>} />

                <Route path={'/radiobutton'} element={<Radiobutton/>} />

                <Route path={'/rangeNavigator'} element={<RangeNavigator/>} />

                <Route path={'/rangeSlider'} element={<RangeSlider/>} />

                <Route path={'/richTextEditor'} element={<RichTextEditorE/>} />

                <Route path={'/schedule'} element={<Scheduler/>} />

                <Route path={'/sidebar'} element={<Sidebar/>} />

                <Route path={'/signature'} element={<Signature/>} />

                <Route path={'/smithChart'} element={<SmithChart/>} />

                <Route path={'/sparkline'} element={<Sparkline/>} />

                <Route path={'/spinner'} element={<Spinner/>} />

                <Route path={'/splitButtons'} element={<SplitButtons/>} />

                <Route path={'/splitter'} element={<Splitter/>} />

                <Route path={'/Spreadsheet'} element={<Spreadsheet/>} />




            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
