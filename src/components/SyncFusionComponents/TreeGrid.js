import './Common/css/TreeGrid.css';
import * as React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Filter, Sort, Reorder, Inject } from '@syncfusion/ej2-react-treegrid';
import { countries } from './Common/DataLocal/data-treegrid';
import { SampleBase } from './Common/sample-base';
import { getObject } from '@syncfusion/ej2-grids';
import { addClass, isNullOrUndefined } from '@syncfusion/ej2-base';

export class TreeGrid extends SampleBase {
    gridTemplate(props) {
        return (<div style={{ display: 'inline' }}><div style={{ display: 'inline-block' }}>
            <img className='e-image'></img>
        </div><div style={{ display: 'inline-block', paddingLeft: '6px' }}>{props.name}</div></div>);
    }
    treegridTemplate(props) {
        return (<div className='statustemp'>
            <span className='statustxt'>{props.gdp}</span>
        </div>);
    }
    treeratingTemplate(props) {
        if (props.rating) {
            return (<div className='rating'>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
                <span className="star"></span>
            </div>);
        }
        else {
            return (<span></span>);
        }
    }
    treeunemployTemplate(props) {
        return (<div id='myProgress' className='pbar'>
            <div id='myBar' className='bar'>
                <div id='label' className='barlabel'></div>
            </div>
        </div>);
    }
    treelocationTemplate(props) {
        var locationsrc = 'https://ej2.syncfusion.com/react/demos/src/treegrid/images/Map.png';
        return (<div id="coordinates">
            <img src={locationsrc} className='e-image' alt={props.coordinates}/>
            <a target='_blank' href='https://www.google.com/maps/place/'>{props.coordinates}</a>
        </div>);
    }
    treeareaTemplate(props) {
        return (<span>{props.area} km<sup>2</sup></span>);
    }
    treezoneTemplate(props) {
        let classValue = '';
        if (props.timezone.indexOf('-') !== -1) {
            classValue = 'negativeTimeZone';
        }
        return (<div><img src='https://ej2.syncfusion.com/react/demos/src/treegrid/images/__Normal.png' style={{ filter: "brightness(150%)" }} className={classValue}></img><span style={{ paddingLeft: '7px' }}>{props.timezone}</span>)</div>);
    }
    Filter = {
        type: 'Excel',
        itemTemplate: '#flagtemplate'
    };
    populationValue(field, data) {
        return data[field] / 1000000;
    }
    queryCellinfo(args) {
        if (args.column.field === 'gdp') {
            if (args.data[args.column.field] < 2) {
                args.cell.querySelector('.statustxt').classList.add('e-lowgdp');
                args.cell.querySelector('.statustemp').classList.add('e-lowgdp');
            }
        }
        if (args.column.field === 'rating') {
            if (args.column.field === 'rating') {
                for (let i = 0; i < args.data[args.column.field]; i++) {
                    args.cell.querySelectorAll('span')[i].classList.add('checked');
                }
            }
        }
        if (args.column.field === 'unemployment') {
            if (args.data[args.column.field] <= 4) {
                addClass([args.cell.querySelector('.bar')], ['progressdisable']);
            }
            args.cell.querySelector('.bar').style.width = args.data[args.column.field] * 10 + '%';
            args.cell.querySelector('.barlabel').textContent = args.data[args.column.field] + '%';
        }
        if (args.column.field === 'name') {
            let parentItem = getObject('parentItem', args.data);
            let imageElement = args.cell.querySelector('.e-image');
            if (isNullOrUndefined(parentItem)) {
                let name = getObject('name', args.data);
                imageElement.src = "src/treegrid/images/" + name + ".png";
            }
            else {
                let name = getObject('name', parentItem);
                imageElement.src = "src/treegrid/images/" + name + ".png";
            }
        }
    }
    flagtemplate = this.gridTemplate;
    gdptemplate = this.treegridTemplate;
    ratingtemplate = this.treeratingTemplate;
    unemploymentTemplate = this.treeunemployTemplate;
    locationtemplate = this.treelocationTemplate;
    areatemplate = this.treeareaTemplate;
    timezonetemplate = this.treezoneTemplate;
    render() {
        return (<div className='control-pane'>
            <div className='control-section'>
                <TreeGridComponent dataSource={countries} childMapping='states' height='400' allowReordering={true} allowFiltering={true} allowSorting={true} filterSettings={{ type: 'Menu', hierarchyMode: 'Parent' }} queryCellInfo={this.queryCellinfo.bind(this)}>
                    <ColumnsDirective>
                        <ColumnDirective field='name' headerText='Province' width='190' template={this.flagtemplate} filter={this.Filter}></ColumnDirective>
                        <ColumnDirective field='population' headerText='Populationf (Million)' allowFiltering={false} valueAccessor={this.populationValue} textAlign='Right' width='200'></ColumnDirective>
                        <ColumnDirective field='gdp' headerText='GDP Rate %' width='145' template={this.gdptemplate}/>
                        <ColumnDirective field='rating' headerText='Credit Rating' width='190' template={this.ratingtemplate}/>
                        <ColumnDirective field='unemployment' headerText='Unemployment Rate' width='200' allowFiltering={false} template={this.unemploymentTemplate}/>
                        <ColumnDirective field='coordinates' headerText='Coordinates' allowSorting={false} width='220' template={this.locationtemplate}/>
                        <ColumnDirective field='area' headerText='Area' width='140' template={this.areatemplate}/>
                        <ColumnDirective field='timezone' headerText='Time Zone' width='150' template={this.timezonetemplate}/>
                    </ColumnsDirective>
                    <Inject services={[Filter, Sort, Reorder]}/>
                </TreeGridComponent>
            </div>
        </div>);
    }
}


