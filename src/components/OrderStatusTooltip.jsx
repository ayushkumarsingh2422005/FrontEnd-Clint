import React, { useState, useEffect, useRef } from 'react';

export default function OrderStatusTooltip({ status, id, fun }) {
    const [toolTipState, setToolTipState] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(status);
    const tooltipRef = useRef(null);

    const handleStatusChange = async (newStatus) => {
        setToolTipState(false); // Close tooltip after selection
        const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/update/status/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "status": newStatus })
        });
        console.log('Response status:', response.status); // Log the response status
        const data = await response.json();
        console.log('Response data:', data); // Log the response data

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        setCurrentStatus(newStatus);
        fun('all');
        alert(`Updated status of order id ${id} to ${newStatus}`);

    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setToolTipState(false);
            }
        }

        if (toolTipState) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toolTipState]);

    return (
        <div className={`relative ${currentStatus.toLowerCase() === 'pending' ? 'bg-red-300' : currentStatus.toLowerCase() === 'completed' ? 'bg-blue-300' : 'bg-green-300'} p-1 px-2 rounded-md cursor-pointer w-auto font-bold`} onClick={() => setToolTipState(!toolTipState)}>
            {currentStatus}
            <div ref={tooltipRef} id={`tooltip-${id}`} className={`right-full top-1/2 transform -translate-y-1/2 bg-gray-900 px-2 rounded-sm shadow-md ${toolTipState ? 'absolute' : 'hidden'}`} style={{ marginRight: '10px' }}>
                <div className='whitespace-nowrap w-auto flex items-center bg-red-400 px-2 py-2 rounded-md my-1'>
                    <input type="radio" name={`status-${id}`} id={`toolTipPending-${id}`} checked={currentStatus === "pending"} onChange={() => handleStatusChange('pending')} /> &nbsp;
                    <label htmlFor={`toolTipPending-${id}`}>Pending</label>
                </div>
                <div className='whitespace-nowrap w-auto flex items-center bg-blue-400 px-2 py-2 rounded-md my-1'>
                    <input type="radio" name={`status-${id}`} id={`toolTipCompleted-${id}`} checked={currentStatus === "completed"} onChange={() => handleStatusChange('completed')} /> &nbsp;
                    <label htmlFor={`toolTipCompleted-${id}`}>Completed</label>
                </div>
                <div className='whitespace-nowrap w-auto flex items-center bg-green-400 px-2 py-2 rounded-md my-1'>
                    <input type="radio" name={`status-${id}`} id={`toolTipPaid-${id}`} checked={currentStatus === "paid"} onChange={() => handleStatusChange('paid')} /> &nbsp;
                    <label htmlFor={`toolTipPaid-${id}`}>Paid</label>
                </div>
            </div>
        </div>
    );
}
