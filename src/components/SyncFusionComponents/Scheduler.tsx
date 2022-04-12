import BasicScheduler from "./Schedules/BasicScheduler";
import SettingViewScheduler from "./Schedules/SettingViewScheduler";
import CrudScheduler from "./Schedules/CrudScheduler";
import VirtualScrollingSchedule from "./Schedules/VirtualScrollingSchedule";

const Scheduler = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <BasicScheduler/>
                </div>
            </div>

            <div className=" mt-40">
                <div className="col-md-12">
                    <SettingViewScheduler/>
                </div>
            </div>

            <div className=" mt-40">
                <div className="col-md-12">
                    <CrudScheduler/>
                </div>
            </div>

            <div className=" mt-40">
                <div className="col-md-12">
                    <VirtualScrollingSchedule/>
                </div>
            </div>

            <div className=" mt-40">
                <div className="col-md-12">
                </div>
            </div>
        </div>
    );
}

export default Scheduler;
