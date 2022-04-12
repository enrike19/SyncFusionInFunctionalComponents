import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';

const BasicScheduler = () => {

    const data = [
        {
            Id: 1,
            Subject: 'Meeting - 1',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 11, 30),
            IsAllDay: false
        }, {
            Id: 2,
            Subject: 'Meeting - 1',
            StartTime: new Date(2018, 1, 14, 8, 0),
            EndTime: new Date(2018, 1, 14, 10, 30),
            IsAllDay: false
        }
    ];
    return (
            <ScheduleComponent height='550px' selectedDate= {new Date(2018, 1, 15)} eventSettings={ { dataSource: data } }>
                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
    );
}

export default BasicScheduler;
