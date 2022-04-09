import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';


const Scheduler = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ScheduleComponent>
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                    </ScheduleComponent>
                </div>
            </div>
        </div>
    );
}

export default Scheduler;
