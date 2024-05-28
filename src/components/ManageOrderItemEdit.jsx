import React, { useRef, useState } from 'react'
import { FaCut, FaSave } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import showToastMessage from '../utils/toast_message';

export default function ManageOrderItemEdit({ items_desc, id, fun }) {
    const [editOrderMenuState, setEditOrderMenuState] = useState(false);
    // const [itemDesc, setItemDesc] = useState(items_desc);
    const ref = useRef();

    const updateData = async () => {
        let updatedData = []
        for (let ele of ref.current.childNodes) {
            // console.log(ele.childNodes[0].childNodes[0].value)
            updatedData.push({
                "item_id": ele.id,
                "item_name": ele.childNodes[0].childNodes[0].value,
                "item_quantity": ele.childNodes[1].childNodes[0].value,
                "item_plate": ele.childNodes[2].childNodes[0].value
            });
        }
        console.log(id)

        const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/update/menu/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "items_desc": updatedData })
        });
        console.log('Response status:', response.status); // Log the response status
        const data = await response.json();
        console.log('Response data:', data); // Log the response data

        if (!response.ok) {
            showToastMessage("error", response.statusText);
            throw new Error(`Error: ${response.statusText}`);
        }
        fun('all');
        setEditOrderMenuState(false);
        showToastMessage('success', `Order of ID ${id} updated sucessfully`)
    }
    return (
        <>
            <table
                className="border border-gray-300 m-0 table-auto bg-white rounded-lg shadow-md font-light"
                onClick={() => setEditOrderMenuState(!editOrderMenuState)}
            >
                <thead className="bg-gray-100">
                    <tr>

                        <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Name</th>
                        <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Quantity</th>
                        <th className="text-left text-xs font-semibold text-gray-700 uppercase tracking-wider p-1 px-2">Size</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {items_desc.map((ele, idx) => (
                        <tr className={`${idx % 2 !== 0 ? "bg-gray-50" : ""}`} key={idx}>

                            <td className="text-sm font-medium text-gray-900 px-2">{ele.item_name}</td>
                            <td className="text-sm text-gray-500 px-2">{ele.item_quantity}</td>
                            <td className="text-sm text-gray-500 px-2">{ele.item_plate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div
                className={`p-4 h-full flex justify-center items-center flex-col fixed left-0 bg-red-50 w-full z-50 ${editOrderMenuState ? "top-0" : "top-full"}`}
            >
                <FaXmark
                    className='top-3 right-3 absolute text-xl'
                    onClick={() => setEditOrderMenuState(!editOrderMenuState)}
                />
                <div className='w-full text-center text-4xl'>Logo</div>
                <div className='p-2 text-2xl container border border-solid'>
                    <div>
                        <table className="border border-gray-300 m-0 table-auto bg-white rounded-lg shadow-md font-light">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Quantity</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Size</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 text-3xl" ref={ref}>
                                {items_desc.map((ele, idx) => (
                                    <tr className={`${idx % 2 !== 0 ? "bg-gray-50" : ""}`} key={idx} id={ele.item_id}>
                                        <td className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm"><input type="text" defaultValue={ele.item_name} className='w-full bg-transparent' /></td>
                                        <td className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm" ><input type="number" defaultValue={ele.item_quantity} className='w-full bg-transparent' /></td>
                                        <td className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm" ><select defaultValue={ele.item_plate} className='bg-transparent'>
                                            <option value="full" >full</option>
                                            <option value="half">half</option>
                                        </select></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='flex items-center gap-2 text-4xl bg-blue-400 rounded-md p-2 w-min' onClick={updateData}>
                        <FaSave /> Save
                    </div>
                </div>
            </div>
        </>

    )
}
