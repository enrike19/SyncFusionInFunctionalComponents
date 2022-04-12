import { TreeMapComponent, Inject, TreeMapLegend } from '@syncfusion/ej2-react-treemap';

const LegendsTreeMap = (props: any) => {

    const data = [...props.datasource];
    const color = [...props.colorMapping];

    return (
        <TreeMapComponent id='treemap3' height='350px' dataSource={data} weightValuePath='Count' equalColorValuePath='Count' legendSettings={{
            visible: true,
            position: 'Top',
            shape: 'Rectangle'
        }} leafItemSettings={{
            labelPath: 'State',
            colorMapping: color
        }}>
            <Inject services={[TreeMapLegend]}/>
        </TreeMapComponent>
    );
}

export default LegendsTreeMap;
