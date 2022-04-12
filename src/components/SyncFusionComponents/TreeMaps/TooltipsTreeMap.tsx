import { TreeMapComponent, Inject, TreeMapLegend, TreeMapTooltip } from '@syncfusion/ej2-react-treemap';

const TooltipsTreeMap = (props: any) => {

    const data = [...props.datasource];
    const colorMapping = [...props.colorMapping];
    return (
        <TreeMapComponent id='treemap4' height='350px' dataSource={data}  weightValuePath='Count' equalColorValuePath='Count' legendSettings={{
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        }} leafItemSettings={{
            showLabels: true,
            labelPath: 'State',
            labelPosition: 'Center',
            colorMapping: colorMapping
        }}>
            <Inject services={[TreeMapTooltip, TreeMapLegend]}/>
        </TreeMapComponent>
    );
}

export default TooltipsTreeMap;
