import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';

  const BasicTreeMap = (props: any) => {

    const data = [...props.datasource];

    return (
        <TreeMapComponent id='treemap1' height='350px' dataSource={data} weightValuePath='Count'
                          equalColorValuePath='Count' leafItemSettings={{
            labelPath: 'State',
            colorMapping: [
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
            ]
        }}>
        </TreeMapComponent>
    );
}

export default BasicTreeMap;
