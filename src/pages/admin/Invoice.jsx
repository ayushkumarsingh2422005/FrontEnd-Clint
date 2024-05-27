import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Invoice() {
    const {id} = useParams();
    const invoice_id = "#INV"+id;
    const [order, setOrder] = useState();

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_URL}/api/orders/get/${id}`);
                // `${import.meta.env.VITE_APP_URL}/api/dishes/update/${editElementId}`
                if (!response.ok) {
                    throw new Error(`Error fetching order: ${response.statusText}`);
                }
                const data = await response.json();
                setOrder(data);
            } catch (err) {
                console.log(err.message);
            }
        };

        fetchOrder();
    }, [id]);
    return (
        <>
            {order ? <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto">
                <h1 className="font-bold text-2xl my-4 text-center text-blue-600">KRP Services</h1>
                <hr className="mb-2" />
                <div className="flex justify-between mb-6">
                    <h1 className="text-lg font-bold">Invoice</h1>
                    <div className="text-gray-700">
                        <div>Date: {order.date.split("T")[0]}</div>
                        <div>Invoice : {invoice_id}</div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700">{order.name}</div>
                    <div className="text-gray-700">{order.phone_number}</div>
                </div>
                <table className="w-full mb-8">
                    <thead>
                        <tr className='bg-gray-700 text-gray-200'>
                            <th className="text-left font-bold pl-2">Description</th>
                            <th className="text-right font-bold">Qty</th>
                            <th className="text-right font-bold">Size</th>
                            <th className="text-right font-bold pr-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items_desc.map((item, index)=>{
                            return <tr key={index} className={index%2!=0 ? 'bg-gray-100': ""}>
                            <td className="text-left text-gray-700 pl-2">{item.item_name}</td>
                            <td className="text-right text-gray-700">{item.item_quantity}</td>
                            <td className="text-right text-gray-700">{item.item_plate}</td>
                            <td className="text-right text-gray-700 pr-2">₹ 100.00</td>
                        </tr>
                        })}
                    </tbody>
                    <tfoot className='font-semibold'>
                        <tr className='bg-slate-300 border border-t-black'>
                            <td className="text-left text-gray-700 pl-2">Total</td>
                            <td className="text-right text-gray-700"></td>
                            <td className="text-right text-gray-700"></td>
                            <td className="text-right text-gray-700 pr-2">₹ {order.total_bill}</td>
                        </tr>
                    </tfoot>
                </table>
                <div className="text-gray-700 mb-2">Thank you for your business!</div>
                <div className="text-gray-700 text-sm">Please remit payment within 30 days.</div>
            </div> : "loading ....."}
        </>
    )
}
