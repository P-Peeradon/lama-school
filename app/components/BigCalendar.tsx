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
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 17, 0, 0)}
            />
        </div>
    );
};

export default BigCalendar;
