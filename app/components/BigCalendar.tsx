'use client'
import { useState } from 'react';
import { Calendar, momentLocalizer, Views, type View } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '../lib/data';

const localiser = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    }

    return (
        <div>
            <Calendar
                localizer={localiser}
                events={calendarEvents} // an array of event objects
                startAccessor="start"
                endAccessor="end"
                views={['work_week', 'day']}
                view={view}
                style={{ height: 500 }} // Container requires an explicit height
                onView={handleOnChangeView}
            />
        </div>
    );
};

export default BigCalendar;
