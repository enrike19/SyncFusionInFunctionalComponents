import { TreeMapComponent, LevelDirective, LevelsDirective } from '@syncfusion/ej2-react-treemap';

const BindingTreeMap = () => {
    return (
        <TreeMapComponent id='treemap5' dataSource={[
            {},
            { Name: "United States", Sales: 28092, Expense: 26000, States: [
                    { Name: "New York", Sales: 2353, Expense: 2000 },
                    { Name: "Los Angeles", Sales: 3453, Expense: 3000 },
                    { Name: "San Francisco", Sales: 8456, Expense: 8000 },
                    { Name: "Chicago", Sales: 6785, Expense: 7000 },
                    { Name: "Miami", Sales: 7045, Expense: 6000 },
                ]
            },
            {
                Name: "Canada", Sales: 19240, Expense: 18500, States: [
                    { Name: "Toronto", Sales: 7045, Expense: 7000 },
                    { Name: "Vancouver", Sales: 4352, Expense: 4000 },
                    { Name: "Winnipeg", Sales: 7843, Expense: 7500 }
                ]
            },
            {
                Name: "Mexico", Sales: 16980, Expense: 14500, States: [
                    { Name: "Mexico City", Sales: 7843, Expense: 6500, States1: [
                            { Name: "Cancun1", Sales: 6683, Expense: 6000 },
                            { Name: "Acapulco1", Sales: 2454, Expense: 2000 }
                        ]
                    },
                    { Name: "Cancun", Sales: 6683, Expense: 6000 },
                    { Name: "Acapulco", Sales: 2454, Expense: 2000 }
                ]
            },
        ]} weightValuePath='Sales' leafItemSettings={{
            labelPath: 'Name'
        }}>
            <LevelsDirective>
                <LevelDirective groupPath='States' groupGap={3} showHeader={true} headerHeight={25} headerTemplate='headertemplate'  />
            </LevelsDirective>
        </TreeMapComponent>
    );
}

export default BindingTreeMap;
