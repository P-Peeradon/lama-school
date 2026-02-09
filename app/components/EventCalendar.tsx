"use client"
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: "Lorem ipsm dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: "Lorem ipsm dolor sit amet, consectetur adipiscing elit."
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor',
        time: '12:00 PM - 2:00 PM',
        description: "Lorem ipsm dolor sit amet, consectetur adipiscing elit."
    }
]

const EventCalendar = () => {
    const [value, setValue] = useState<Value>(new Date());

    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={setValue} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4">Events</h1>
                <Image src='/moreDark.png' width={20} height={20} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div 
                        className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-[#C3EBFA] even:border-t-[#CFCEFF]" 
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1>{event.title}</h1>
                            <span>{event.time}</span>
                        </div>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
