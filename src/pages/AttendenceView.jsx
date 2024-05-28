import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../components/component.css'; // Add your custom CSS here
import { useParams } from 'react-router-dom';

export default function AttendenceView() {
    const [date, setDate] = useState(new Date());
    const { id } = useParams();
    const [specialDates, setSpecialDates] = useState([]);

    const onChange = (newDate) => {
        setDate(newDate);
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month' && specialDates.some(d => d.toDateString() === date.toDateString())) {
            return 'highlight';
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/employe-data/get-attendence/${id}`); // Replace with your server URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const final_data = [];
            for (let arr of Object.keys(data)) {
                for (let ele of data[arr]) {
                    const yr = arr.split("-")[1];
                    const mo = arr.split("-")[0] - 1; // Month index starts from 0 in JavaScript Date object
                    const dt = ele;
                    const dtf = new Date(yr, mo, dt);
                    final_data.push(dtf);
                }
            }
            setSpecialDates(final_data);
        } catch (error) {
            console.error('Error fetching attendance data:', error);
        }
    };

    const getMonthDate = (monthOffset) => {
        const newDate = new Date(date.getFullYear(), monthOffset, 1);
        return newDate;
    };

    return (
        <div className='calendar-year-container'>
            {specialDates && Array.from({ length: 12 }, (_, index) => (
                <Calendar
                    key={index}
                    onChange={onChange}
                    value={date}
                    activeStartDate={getMonthDate(index)}
                    tileClassName={tileClassName}
                />
            ))}
        </div>
    );
}
