import React, { useState } from "react";
import LessonSchedule from "../lessonSchedule/LessonSchedule";
import IconList from "../iconList/IconList";

const ScheduleTable = () => {
    const [scheduleVisible, setScheduleVisible] = useState(false);

    const toggleSchedule = () => {
        setScheduleVisible(!scheduleVisible);
    };

    return (
        <div>
            <IconList toggleSchedule={toggleSchedule} />
            <LessonSchedule scheduleVisible={scheduleVisible} />
        </div>
    );
};

export default ScheduleTable;