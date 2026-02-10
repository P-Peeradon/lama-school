'use client'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { calendarEvents } from '../lib/data';

const localiser = momentLocalizer(moment);

const BigCalendar = () => {
    return (
        <div>
            <Calendar
                localizer={localiser}
                events={calendarEvents} // an array of event objects
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }} // Container requires an explicit height
            />
        </div>
    );
};

export default BigCalendar;
