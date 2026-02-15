"use client"

import { useState } from  'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '@/app/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    }

    return (
        <div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                toolbar={true}
                views={["work_week", "day", "month"]}
                view={view}
                style={{ height: 450 }}
                onView={handleOnChangeView}
            />
        </div>
    )
};

export default BigCalendar;