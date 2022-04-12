import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

const BasicTreeMap = (props: any) => {

    const data = [...props.datasource];
    return (
        <TreeMapComponent id='treemap' height='350px' dataSource={data} weightValuePath='Count' leafItemSettings={{
            labelPath: 'State',
        }}>
        </TreeMapComponent>
    );
}

export default BasicTreeMap;
